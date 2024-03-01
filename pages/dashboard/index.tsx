"use client";
import { useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";
import Image from "next/image";
import { useRouter } from "next/router";
import { RootState } from "../../store/store";
import { messageT, userT } from "../../modules/modules";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setUsers, updateUserMessages } from "../../store/Slices/usersSlice";
import MyChat from "../../components/MyChat";
import Header from "../../Sections/Header/Header";
import LinkUkraine from "../../components/LinkUkraine/LinkUkraine";

let socket = io();

function Dashboard() {
    const users = useAppSelector((state: RootState) => state.users.users);
    const [userRoomId, setUserRoomId] = useState("");
    const router = useRouter();

    const myInitialData: userT = {
        username: "Serhii",
        id: "26091992",
        roomId: "",
        messages: [],
        token: "",
    };
    const [myData, setMyData] = useState<userT>(myInitialData);

    const dispatch = useAppDispatch();
    

    function changeRoom(user: userT) {
        setMyData((prev) => ({ ...prev, roomId: user.roomId }));
        setUserRoomId(user.roomId);
    }

    const socketInit = useCallback(async () => {
        const loginName = process.env.NEXT_PUBLIC_MYLOGIN;
        const localToken = localStorage.getItem("token")?.length
            ? localStorage.getItem("token").includes("expiry")
                ? JSON.parse(localStorage.getItem("token"))
                : localStorage.getItem("token")
            : "";
        if (localToken.expiry || !localToken?.length) {
            router.push("./");
            return;
        }
        const response = await fetch("api/auth/checkJWT", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ localToken }),
        });
        const data = await response.json();
        if (data?.token !== loginName) {
            router.push("./");
            return;
        }

        socket.emit("get_users");
        socket.emit("online");

        socket.once("receive_users", (users: userT[]) => {
            if (users.length !== 0) {
                users.forEach((user) => {
                    socket.emit("join_room", user);
                });
                dispatch(setUsers(users));
            }
        });

        window.addEventListener("beforeunload", () => {
            socket.emit("offline");
        });
    }, []);

    useEffect(() => {
        socketInit();
    }, []);

    useEffect(() => {
        socket.on("new_user_joined", (users: userT[]) => {
            if (users.length !== 0) {
                users.forEach((user) => {
                    socket.emit("join_room", user);
                });
                dispatch(setUsers(users));
            }
        });

        socket.on("receive_users", (users: userT[]) => {
            dispatch(setUsers(users));
        });

        socket.on("leaved_user", (users: userT[]) => {
            dispatch(setUsers(users));
        });

        socket.on("receive_msg", (messageData: messageT) => {
            dispatch(updateUserMessages(messageData));
        });

        return (): void => {
            socket.off("leaved_user");
            socket.off("receive_users");
            socket.off("new_user_joined");
            socket.off("receive_msg");
        };
    }, [dispatch]);

    return (
        <>
            <LinkUkraine />
            <Header />
            <div className="flex pt-28 flex-col xl:flex-row pb-2 h-[calc(100dvh-112px)]">
                <aside className="basis-1/6">
                    <h3 className="flex justify-center items-center gap-2">
                        Chats list
                    </h3>
                    <div className="px-2 flex flex-wrap w-full  xl:grid   gap-2 xl:overflow-y-auto">
                        {users?.map((user) => {
                            const { messages, id, username } = user;
                            return (
                                <button
                                    onClick={() => changeRoom(user)}
                                    key={id}
                                    className="grid gap-2 pb-4 lg:grid-cols-2 px-2 py-1 bg-blue-500 rounded "
                                >
                                    {messages[messages.length - 1]?.img ? (
                                        <div className="w-8 aspect-square mx-auto">
                                            <Image
                                                className="w-8 aspect-square rounded-full"
                                                src={
                                                    messages[
                                                        messages.length - 1
                                                    ]?.img
                                                }
                                                alt={
                                                    messages[
                                                        messages.length - 1
                                                    ]?.imgAlt
                                                }
                                            />
                                        </div>
                                    ) : (
                                        <span className="bg-gray-600 max-w-8 mx-auto aspect-square rounded-full justify-self-start px-4 py-2">
                                            {username[0]}
                                        </span>
                                    )}

                                    <p>{username}</p>

                                    <p className="lg:col-span-2 text-left truncate">
                                        {messages[messages.length - 1]?.message
                                            ? messages[messages.length - 1]
                                                  .message
                                            : "No message"}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </aside>
                {userRoomId ? (
                    <MyChat
                        myData={myData}
                        socket={socket}
                        userRoomId={userRoomId}
                    />
                ) : (
                    <div>Chose user</div>
                )}
            </div>
        </>
    );
}

export default Dashboard;
