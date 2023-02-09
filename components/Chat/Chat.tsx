import classNames from "classnames";
import { FormEvent, useState } from "react";
import useInputHook from "../../hooks/useInputHook";

import styles from "./Chat.module.scss";

function Chat() {
    const [open, setOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState("");
    const [errorAuth, setErrorAuth] = useState(false);

    function openChat() {
        setOpen((prev) => !prev);
    }

    function AuthForm() {
        const input = useInputHook();

        function submitHandler(event: FormEvent) {
            event.preventDefault();
            if (input.value.trim().length > 2) {
                setIsAuth(true);
                setUserName(input.value);
            } else if (input.value.trim().length <= 2) {
                setErrorAuth(true);
            }
        }

        return (
            <form onSubmit={submitHandler}>
                <h2 className={styles.h2}>Auth form</h2>
                <input
                    type="text"
                    name="name"
                    value={input.value}
                    onChange={input.onChange}
                    placeholder="Enter name"
                    className={classNames(
                        styles.inputChatText,
                        errorAuth ? "outline outline-red-400" : ""
                    )}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }

    function BtnOpenChat() {
        return (
            <button title="click to open chat" onClick={openChat}>
                Chat
            </button>
        );
    }

    function ChatBody() {
        const textInput = useInputHook();

        function submitHandler(event: FormEvent) {
            event.preventDefault();
        }
        return (
            <div>
                <h2>Hello {userName} !</h2>

                <button
                    type="button"
                    className={styles.chat__btnRoll}
                    onClick={openChat}></button>
                <div className="py-2 min-h-[20rem]">messages</div>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        className={styles.inputChatText}
                        placeholder="Enter your text"
                        value={textInput.value}
                        onChange={textInput.onChange}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }

    return (
        <div className={classNames(styles.chat)}>
            {!isAuth && open && <AuthForm />}
            {!open && <BtnOpenChat />}
            {open && isAuth && <ChatBody />}
        </div>
    );
}

export default Chat;
