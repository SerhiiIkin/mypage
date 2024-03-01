"use client";
import {
    ChangeEvent,
    FormEvent,
    useCallback,
    useEffect,
    useState,
} from "react";
import { useRouter } from "next/router";
import Eye from "../ui/svg/Eye";
import Chat from "../ui/svg/Chat";
import UserChat from "../UserChat";

import { setUser } from "../../store/Slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { tokenT, userT } from "../../modules/modules";

import { io } from "socket.io-client";
import LoginFormText from "./LoginFormText";

let socket = io();

function LoginForm() {
    const { loginform, placeholderForm, submitForm, errorMessage } =
        LoginFormText();
    const dispatch = useAppDispatch();
    const { messages, username } = useAppSelector((state) => state.user);
    const loginName = process.env.NEXT_PUBLIC_MYLOGIN;
    const router = useRouter();
    const [usernameInput, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isOpenForm, setIsOpenForm] = useState(false);
    const [isOpenChat, setIsOpenChat] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isFullScreenWindow, setIsFullScreenWindow] = useState(false);
    const [type, setType] = useState(true);
    const [token, setToken] = useState<tokenT>();
    const [error, setError] = useState("");
    const letters = /^[A-Za-zØøÅåÆæ\s]+$/;

    function onRollUpBtnClick() {
        setIsFullScreen(false);
        setIsOpenChat(false);
    }

    function onBtnFullScreenClick() {
        setIsFullScreen((prev) => !prev);
        setIsFullScreenWindow((prev) => !prev);
    }

    async function submitHandler(event: FormEvent) {
        event.preventDefault();
        if (usernameInput.length < 2) {
            setError(errorMessage);
        }
        if (!password && usernameInput?.length >= 2) {
            const createId = `${usernameInput.trim()}${new Date()
                .toLocaleTimeString()
                .replace(/ /g, "")}`;
            const roomId = `${usernameInput}${new Date()
                .toDateString()
                .replace(/ /g, "")}${new Date()
                .toLocaleTimeString()
                .replace(/ /g, "")}`;

            try {
                const response = await fetch("api/auth/userLogin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ usernameInput }),
                });
                const { token } = await response.json();
                if (token.message === "Success") {
                    localStorage.setItem("token", JSON.stringify(token));
                    const userData: userT = {
                        id: createId,
                        username: usernameInput.trim(),
                        messages,
                        roomId,
                        token: token.value,
                    };

                    setIsOpenChat(true);
                    setIsOpenForm(false);

                    socket.emit("join_room", userData);
                    dispatch(setUser(userData));
                } else {
                    throw new Error(token.message);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                const response = await fetch("api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ usernameInput, password }),
                });

                const { token } = await response.json();

                if (token) {
                    router.push("/dashboard");
                    localStorage.setItem("token", token as string);
                } else {
                    throw new Error(token);
                }
            } catch (error) {
                console.error("error with login");
            }
        }
    }

    function OpenCloseForm() {
        if (username.length >= 2) {
            if (isFullScreenWindow) {
                setIsFullScreen(true);
            }

            setIsOpenChat(true);
        } else {
            setIsOpenForm((prev) => !prev);
        }
    }
    const socketInit = useCallback(async () => {
        const localToken = localStorage.getItem("token")?.length
            ? localStorage.getItem("token").includes("expiry")
                ? JSON.parse(localStorage.getItem("token"))
                : localStorage.getItem("token")
            : "";

        window.addEventListener("beforeunload", () => {
            updateToken(localToken);
        });
        if (localToken?.length === 0) {
            setToken({
                expiry: 0,
                value: "empty",
                message: "",
            });
        } else if (localToken.value) {
            setToken(localToken);
        }

        if (new Date().getTime() > localToken.expiry) {
            localStorage.removeItem("token");
        } else {
            socket.emit("get_user", localToken);
            socket.once("current_user", (user: userT) => {
                dispatch(setUser(user));
            });
        }
    }, []);

    function userNameHandler(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        if (letters.test(value) || value === "") {
            setUsername(event.target.value);
        }
    }

    function updateToken(localToken) {
        if (localToken?.expiry) {
            localToken.expiry = new Date().getTime() + 24 * 60 * 60 * 1000;
            localToken.message = "updated";
            localStorage.setItem("token", JSON.stringify(localToken));
        }
    }

    useEffect(() => {
        socketInit();
    }, []);

    return (
        <>
            {!isOpenForm && !isOpenChat && token && (
                <div
                    className={`cursor-pointer fixed bg-blue-400 p-1 rounded bottom-5 right-4 z-20 `}
                    onClick={OpenCloseForm}
                >
                    <Chat />
                </div>
            )}
            {isOpenForm && !username && (
                <form
                    onSubmit={submitHandler}
                    className="shadow-sm shadow-slate-500 p-2 z-20 bg-white rounded flex flex-col fixed bottom-5 right-4"
                >
                    <h2>{loginform}</h2>
                    <button
                        onClick={OpenCloseForm}
                        type="button"
                        className="absolute top-2 right-2 hover:text-red-400"
                    >
                        X
                    </button>
                    <label className="relative pb-4">
                        <input
                            autoFocus
                            value={usernameInput}
                            onChange={userNameHandler}
                            className="p-2 focus-visible:outline-none"
                            type="text"
                            placeholder={placeholderForm}
                        />
                        <span className="text-sm absolute bottom-0 left-0 text-red-400">
                            {error && errorMessage}
                        </span>
                    </label>
                    {usernameInput === loginName && (
                        <label className="relative" htmlFor="password">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-2 focus-visible:outline-none"
                                type={type ? "password" : "text"}
                                placeholder="password"
                                autoComplete="true"
                            />
                            <span
                                onClick={() => setType((prev) => !prev)}
                                className="absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
                            >
                                <Eye />
                            </span>
                        </label>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-400 xl:hover:bg-blue-700 rounded py-1 px-2"
                    >
                        {submitForm}
                    </button>
                </form>
            )}
            {isOpenChat && (
                <UserChat
                    socket={socket}
                    isFullScreen={isFullScreen}
                    onBtnFullScreenClick={onBtnFullScreenClick}
                    onRollUpBtnClick={onRollUpBtnClick}
                />
            )}
        </>
    );
}

export default LoginForm;
