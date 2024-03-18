import { updateUserMessages } from "../store/Slices/usersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { RootState } from "../store/store";
import { messageT, userT } from "../modules/modules";
import {
    FormEvent,
    useState,
    KeyboardEvent,
    useMemo,
    FocusEvent,
    useEffect,
    useRef,
} from "react";
import Form from "./ui/Form";
import MessagesContainer from "./ui/MessagesContainer";
import myImg from "../img/me.jpg";

type MyChatPropsT = {
    userRoomId: string;
    socket: any;
    myData: userT;
};

function MyChat({ userRoomId, socket, myData }: MyChatPropsT) {
    const [textarea, setTextarea] = useState("");
    const dispatch = useAppDispatch();
    const users = useAppSelector((state: RootState) => state.users.users);
    const currentUser = useMemo(
        () => users.find((user) => user.roomId === userRoomId),
        [userRoomId, users]
    );
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const server = process.env.NEXT_PUBLIC_SERVER;

    async function sendMessage() {
        const createId = `${myData.username}${new Date()
            .toLocaleTimeString()
            .replace(/ /g, "")}`;

        const messageData: messageT = {
            dato: new Date().toLocaleDateString().trim(),
            username: myData.username,
            roomId: userRoomId,
            time: new Date().toLocaleTimeString().trim(),
            message: textarea.trim(),
            img: myImg,
            imgAlt: myData.username,
            id: createId,
        };

        await fetch(
            `${server}api/user/messages/${currentUser._id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(messageData),
            }
        );

        await socket.emit("send_msg", messageData);
        dispatch(updateUserMessages(messageData));
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
        await socket.emit("typing", myData);
    }

    async function stopTyping(event: FocusEvent<HTMLTextAreaElement>) {
        await socket?.emit("stopTyping", myData);
    }

    function focusTextArea(event: FocusEvent<HTMLTextAreaElement>) {
        if (containerRef?.current)
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }

    useEffect(() => {
        socket.on("typing", (user: userT) => {
            if (user?.username === currentUser?.username) {
                setIsCurrentUser(true);
                setIsTyping(true);
            } else {
                setIsCurrentUser(false);
            }
        });

        socket.on("stopTyping", () => {
            setIsTyping(false);
        });

        return (): void => {
            socket.off("typing");
        };
    }, [socket, currentUser]);

    useEffect(() => {
        if (containerRef?.current)
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [currentUser?.messages]);

    return (
        <div className="basis-5/6 p-2 h-[calc(100dvh-112px-151px)] xl:h-[calc(100dvh-112px)]  flex flex-col">
            <h2 className="text-center font-semibold pb-2">
                {currentUser?.username}
            </h2>
            <h3 className="text-center font-semibold pb-2">
                {currentUser?.roomId}
            </h3>

            <MessagesContainer containerRef={containerRef} user={currentUser} />

            <p className="animation-typing mt-auto">
                {isTyping && isCurrentUser && (
                    <>
                        {currentUser?.username} typing
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                    </>
                )}
            </p>

            <Form
                stopTyping={stopTyping}
                typing={typing}
                onSendMessage={onSendMessage}
                submitHandler={submitHandler}
                textarea={textarea}
                setTextarea={setTextarea}
                focusTextArea={focusTextArea}
            />
        </div>
    );
}

export default MyChat;
