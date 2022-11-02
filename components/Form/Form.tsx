import { ChangeEvent, FormEvent, MouseEvent, useMemo, useState } from "react";
import axios from "../../axios";
import validator from "email-validator";
import HelloText from "../../Sections/Hello/HelloText";
import LIttleLoader from "../LIttleLoader/LIttleLoader";

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
    } = HelloText();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [btnSend, setBtnSend] = useState("Send");
    const [loading, setLoading] = useState(false);
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorText, setErrorText] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

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
                const mail = await axios.post("/api/sendemail", {
                    email,
                    title,
                    text,
                });

                setBtnSend(mail.data.message);
                setLoading(false);
                setTimeout(() => {
                    setBtnSend("Send");
                    setOpen(false);
                    setText("");
                    setEmail("");
                    setTitle("");
                }, 3000);
            } catch (error) {
                setBtnSend(errorMessage);
                setLoading(false);
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
                            rows={3}
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
                        {loading ? <LIttleLoader /> : btnSend}
                    </button>
                </form>
            </dialog>
        </>
    );
}

export default Form;
