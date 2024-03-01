"use client";
import AspectRatio from "../ui/svg/AspectRatio";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Form from "../ui/Form";
import userImg from "../../img/user.png";

import {
    FormEvent,
    useState,
    KeyboardEvent,
    useEffect,
    FocusEvent,
    useMemo,
    useRef,
} from "react";
import { messageT } from "../../modules/modules";
import { setMessages } from "../../store/Slices/userSlice";
import MessagesContainer from "../ui/MessagesContainer";
import UserChatText from "./UserChatText";

type UserChatProps = {
    onRollUpBtnClick?: () => void;
    onBtnFullScreenClick?: () => void;
    isFullScreen?: boolean;
    socket: any;
};

function UserChat({
    onRollUpBtnClick,
    onBtnFullScreenClick,
    socket,
    isFullScreen,
}: UserChatProps) {
    const user = useAppSelector((state) => state.user);
    const [textarea, setTextarea] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isFocusTextArea, setIsFocusTextArea] = useState(false);
    const { hello, welcome, chatTime, typingtext } = UserChatText();
    const [status, setStatus] = useState(false);
    const dispatch = useAppDispatch();
    const containerRef = useRef<HTMLDivElement>(null);

    async function sendMessage() {
        const createId = `${user.username}${new Date()
            .toLocaleTimeString()
            .replace(/ /g, "")}`;

        const messageData: messageT = {
            dato: new Date().toLocaleDateString().trim(),
            username: user.username,
            roomId: user.roomId,
            time: new Date().toLocaleTimeString().trim(),
            message: textarea,
            img: userImg,
            imgAlt: user.username,
            id: createId,
        };

        await socket.emit("send_msg", messageData);
        dispatch(setMessages(messageData));
        setTextarea("");
    }

    function onSendMessage(event: KeyboardEvent<HTMLFormElement>) {
        if (textarea.trim().length <= 0) {
            setTextarea("");
            return;
        }
        if (event.key === "Enter" && event.ctrlKey) {
            sendMessage();
        }
    }
    function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (textarea.trim().length <= 0) return;
        sendMessage();
    }

    async function typing(event: KeyboardEvent<HTMLTextAreaElement>) {
        await socket.emit("typing", user);
    }

    async function stopTyping(event: FocusEvent<HTMLTextAreaElement>) {
        await socket.emit("stopTyping", user);
        setTimeout(() => {
            setIsFocusTextArea(false);
        }, 200);
    }

    function focusTextArea(event: FocusEvent<HTMLTextAreaElement>) {
        if (window.innerWidth < 1281) {
            setIsFocusTextArea(true);
        }

        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }

    useEffect(() => {
        socket.on("online", () => {
            setStatus(true);
        });
        socket.on("offline", () => {
            setStatus(false);
        });

        socket.on("receive_msg", (messageData: messageT) => {
            dispatch(setMessages(messageData));
        });

        socket.on("typing", () => {
            setIsTyping(true);
        });

        socket.on("stopTyping", () => {
            setIsTyping(false);
        });

        return (): void => {
            socket.off("stopTyping");
            socket.off("receive_msg");
            socket.off("typing");
            socket.off("online");
            socket.off("offline");
        };
    }, [socket]);

    useEffect(() => {
        if (containerRef?.current)
            containerRef.current.scrollTop =
                containerRef.current.scrollHeight -
                containerRef.current.offsetHeight;
    }, [user.messages]);

    const resizeClass = useMemo(() => {
        return isFullScreen
            ? isFocusTextArea
                ? "h-[51svh] bottom-0 left-0 right-0"
                : "inset-0"
            : "h-[51svh] w-72 bottom-0 right-4";
    }, [isFullScreen, isFocusTextArea]);

    return (
        <div
            className={`flex flex-col shadow shadow-slate-600 py-2 px-4  bg-white z-20 rounded fixed  ${resizeClass}  `}
        >
            <button
                onClick={onBtnFullScreenClick}
                className="absolute top-[0.65rem] right-11"
            >
                <AspectRatio />
            </button>
            <button
                onClick={onRollUpBtnClick}
                className="absolute right-3 top-2 text-2xl w-6 aspect-square border-b border-black"
            ></button>
            <h2>
                {hello} {user.username}!
            </h2>
            <span
                className={`absolute left-1 top-4 w-2 aspect-square  rounded-full ${
                    status ? "bg-green-600" : "bg-gray-400"
                }`}
            ></span>
            <p>{welcome}</p>
            <p className="text-sm text-gray-400 pb-2">{chatTime}</p>
            <MessagesContainer containerRef={containerRef} user={user} />

            <div className="animation-typing min-h-6  mt-auto">
                {isTyping && (
                    <>
                        Serhii {typingtext}
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </>
                )}
            </div>
            <Form
                focusTextArea={focusTextArea}
                stopTyping={stopTyping}
                typing={typing}
                onSendMessage={onSendMessage}
                submitHandler={submitHandler}
                textarea={textarea}
                setTextarea={setTextarea}
            />
        </div>
    );
}

export default UserChat;
