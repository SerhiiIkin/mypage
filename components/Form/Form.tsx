import {
    ChangeEvent,
    FormEvent,
    MouseEvent,
    useEffect,
    useMemo,
    useState,
} from "react";
import axios from "../../axios";
import validator from "email-validator";
import HelloText from "../../Sections/Hello/HelloText";
import LIttleLoader from "../LIttleLoader/LIttleLoader";
import Notification from "../Notification/Notification";

import styles from "./Form.module.scss";

function Form() {
    const {
        btnMessage,
        titleWrite,
        requiredField,
        incorrectEmail,
        textWrite,
        emailWrite,
        errorMessage,
        btnSend,
        btnSendTryAgain,
        messageSendSuccess,
    } = HelloText();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorText, setErrorText] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [textNotification, setTextNotification] = useState("");
    const [btnSendMessage, setBtnSendMessage] = useState(btnSend);

    useEffect(() => {
        setBtnSendMessage(btnSend)
    }, [btnSend]);

    async function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!text.trim().length) {
            setErrorText(true);
        }
        if (!title.trim().length) {
            setErrorTitle(true);
        }
        if (!email.trim().length) {
            setErrorEmail(true);
        } else if (!errorTitle && !errorEmail && !errorText) {
            setLoading(true);

            try {
                await axios.post("/api/sendemail", {
                    email,
                    title,
                    text,
                });
                setIsOpenNotification(true);
                setTextNotification(messageSendSuccess);
                setLoading(false);
                setTimeout(() => {
                    setOpen(false);
                    setText("");
                    setEmail("");
                    setTitle("");
                    setBtnSendMessage(btnSend);
                }, 3000);
                setTimeout(() => {
                    setIsOpenNotification(false);
                }, 5000);
            } catch (error) {
                setIsOpenNotification(true);
                setTextNotification(errorMessage);
                setBtnSendMessage(btnSendTryAgain);
                setLoading(false);
                setTimeout(() => {
                    setIsOpenNotification(false);
                }, 5000);
            }
        }
    }

    function inputTitleHandler(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        isValidTitle(value);
        setTitle(value);
    }

    function isValidTitle(value: string) {
        if (!value.trim().length) {
            setErrorTitle(true);
        } else {
            setErrorTitle(false);
        }
    }

    function inputEmailHandler(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        isValidEmail(value);
        setEmail(value);
    }

    function isValidEmail(value: string) {
        if (!value.trim().length || !validator.validate(value)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    }

    function inputTextHandler(event: ChangeEvent<HTMLTextAreaElement>) {
        const value = event.target.value;
        isValidText(value);
        setText(value);
    }

    function isValidText(value: string) {
        if (!value.trim().length) {
            setErrorText(true);
        } else {
            setErrorText(false);
        }
    }

    function dialog(event: MouseEvent) {
        document.body.style.overflow = open ? "" : "hidden";
        setOpen((prev) => !prev);
    }

    function stopPropagation(event: MouseEvent) {
        event.stopPropagation();
    }

    return (
        <>
            <Notification
                textNotification={textNotification}
                isOpen={isOpenNotification}
            />
            <button onClick={dialog} className={styles.btn_blue}>
                {btnMessage}
            </button>
            <dialog open={open} onClick={dialog} className={styles.dialog}>
                <form
                    onClick={stopPropagation}
                    onSubmit={submitHandler}
                    className={styles.form}>
                    <button
                        type="button"
                        onClick={dialog}
                        className={styles.btnClose}>
                        X
                    </button>
                    <label htmlFor="title" className={styles.labelInput}>
                        {titleWrite}
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className={styles.input}
                            value={title}
                            onChange={inputTitleHandler}
                        />
                        {errorTitle && (
                            <p className={styles.errorMessage}>
                                {requiredField}
                            </p>
                        )}
                    </label>
                    <label htmlFor="email" className={styles.labelInput}>
                        {emailWrite}
                        <input
                            type="text"
                            id="email"
                            className={styles.input}
                            value={email}
                            onChange={inputEmailHandler}
                        />
                        {errorEmail && (
                            <p className={styles.errorMessage}>
                                {incorrectEmail}
                            </p>
                        )}
                    </label>
                    <label htmlFor="text" className={styles.labelInput}>
                        {textWrite}
                        <textarea
                            id="text"
                            rows={5}
                            className={styles.input}
                            value={text}
                            onChange={inputTextHandler}
                        />
                        {errorText && (
                            <p className={styles.errorMessage}>
                                {requiredField}
                            </p>
                        )}
                    </label>
                    <button
                        disabled={loading}
                        type="submit"
                        className={styles.btn_blue}>
                        {loading ? <LIttleLoader /> : btnSendMessage}
                    </button>
                </form>
            </dialog>
        </>
    );
}

export default Form;
