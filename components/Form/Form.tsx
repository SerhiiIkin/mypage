import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import axios from "../../axios";
import validator from "email-validator";
import HelloText from "../../Sections/Hello/HelloText";
import LIttleLoader from "../LIttleLoader/LIttleLoader";
import Notification from "../Notification/Notification";

import styles from "./Form.module.scss";
import FormIsHuman from "../FormIsHuman/FormIsHuman";

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
        isHuman,
        errorTextHuman,
    } = HelloText();

    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const [loading, setLoading] = useState(false);

    const [errorTitle, setErrorTitle] = useState(false);
    const [errorText, setErrorText] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorCheckBox, setErrorCheckBox] = useState(false);

    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [textNotification, setTextNotification] = useState("");
    const [btnSendMessage, setBtnSendMessage] = useState(btnSend);

    const [openCheckBox, setOpenCheckBox] = useState(false);

    useEffect(() => {
        setBtnSendMessage(btnSend);
    }, [btnSend]);

    async function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!text.trim().length) {
            setErrorText(true);
        }
        if (!title.trim().length) {
            setErrorTitle(true);
        }
        if (!checkbox) {
            setErrorCheckBox(true);
        }
        if (!email.trim().length) {
            setErrorEmail(true);
        } else if (!errorTitle && !errorEmail && !errorText && !errorCheckBox) {
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

    function dialog() {
        document.body.classList.toggle("lock");
        setOpen((prev) => !prev);
    }

    function stopPropagation(event: MouseEvent) {
        event.stopPropagation();
    }

    function isMatch(value: boolean) {
        setCheckbox(value);
        setOpenCheckBox(!value);
        setErrorCheckBox(!value);
    }

    function inputCheckboxHandler(event: ChangeEvent<HTMLInputElement>) {
        !checkbox && setOpenCheckBox(true);

        checkbox && setCheckbox(!checkbox);
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
                    <label className={styles.labelInput} htmlFor="isHuman">
                        {isHuman}
                        <input
                            type="checkbox"
                            checked={checkbox}
                            name="isHuman"
                            id="isHuman"
                            onChange={inputCheckboxHandler}
                        />
                        {errorCheckBox && (
                            <p className={styles.errorMessage}>
                                {errorTextHuman}
                            </p>
                        )}
                    </label>
                    <button
                        disabled={loading}
                        type="submit"
                        className={styles.btn_blue}>
                        {loading ? <LIttleLoader /> : btnSendMessage}
                    </button>
                    <FormIsHuman
                        openCheckBox={openCheckBox}
                        isMatch={isMatch}
                    />
                </form>
            </dialog>
        </>
    );
}

export default Form;
