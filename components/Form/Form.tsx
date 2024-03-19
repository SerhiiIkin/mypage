import {
    ChangeEvent,
    FormEvent,
    MouseEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import axios from "../../axios";
import validator from "email-validator";
import HelloText from "../../Sections/Hello/HelloText";
import Loader from "../Loader/Loader";
import Notification from "../Notification/Notification";
import FormIsHuman from "../FormIsHuman/FormIsHuman";

import styles from "./Form.module.scss";
import classNames from "classnames";

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

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const [errorTitle, setErrorTitle] = useState(false);
    const [errorText, setErrorText] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorCheckBox, setErrorCheckBox] = useState(false);

    const [isOpenNotification, setIsOpenNotification] = useState(false);
    const [textNotification, setTextNotification] = useState("");
    const [btnSendMessage, setBtnSendMessage] = useState(btnSend);

    const [openCheckBox, setOpenCheckBox] = useState(false);

    const dialogRef = useRef(null);
    const textAriaRef = useRef(null);

    const isErrors = useMemo(() => {
        return !(
            !text.trim().length ||
            !title.trim().length ||
            !validator.validate(email) ||
            !checkbox
        );
    }, [text, title, checkbox, email]);

    useEffect(() => {
        setBtnSendMessage(btnSend);
    }, [btnSend]);

    async function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        validation();
        if (isErrors) {
            setLoading(true);

            try {
                await axios.post("api/sendemail", {
                    email,
                    title,
                    text,
                });
                setIsOpenNotification(true);
                setTextNotification(messageSendSuccess);
                setTimeout(() => {
                    setText("");
                    setEmail("");
                    setTitle("");
                    setCheckbox(false);
                    setBtnSendMessage(btnSend);
                }, 3000);
                setTimeout(() => {
                    setIsOpenNotification(false);
                    setLoading(false);
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

    function validation() {
        if (!text.trim().length) {
            setErrorText(true);
        }
        if (!title.trim().length) {
            setErrorTitle(true);
        }

        if (!validator.validate(email)) {
            setErrorEmail(true);
        }

        if (!checkbox) {
            setErrorCheckBox(true);
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

    function dialogHandler() {
        document.body.classList.toggle("lock");
        setIsOpen((prev) => !prev);
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
        if (checkbox) {
            setCheckbox(!checkbox);
            setErrorCheckBox(false);
        } else {
            setOpenCheckBox(true);
            setErrorCheckBox(true);
            setCheckbox(false);
        }
    }

    function onResetClick() {
        setTitle("");
        setText("");
        setEmail("");
        setCheckbox(false);
    }

    useEffect(() => {
        if (textAriaRef.current.scrollHeight > 0) {
            textAriaRef.current.style.height = 0 + "px";
            const scrollHeight = textAriaRef.current.scrollHeight;
            textAriaRef.current.style.height = scrollHeight + "px";
        }
    }, [textAriaRef.current?.scrollHeight]);

    return (
        <>
            <Notification
                textNotification={textNotification}
                isOpen={isOpenNotification}
            />
            <button
                type="button"
                onClick={dialogHandler}
                className={styles.btn_blue}
            >
                {btnMessage}
            </button>
            <div
                ref={dialogRef}
                onClick={dialogHandler}
                className={classNames(isOpen ? styles.dialog : styles.hidden, "duration-500")}
            >
                <form
                    onClick={stopPropagation}
                    onSubmit={submitHandler}
                    className={styles.form}
                >
                    <button
                        type="button"
                        onClick={dialogHandler}
                        className={styles.btnClose}
                    >
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
                            className={`${styles.input} ${styles.textArea}`}
                            value={text}
                            rows={1}
                            onChange={inputTextHandler}
                            ref={textAriaRef}
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
                    <div className={styles.btns}>
                        {loading ? (
                            <Loader className={styles.loader} />
                        ) : (
                            <button type="submit" className={styles.btn_blue}>
                                {btnSendMessage}
                            </button>
                        )}

                        <button
                            onClick={onResetClick}
                            className={styles.btn_reset}
                            type="button"
                        >
                            Reset
                        </button>
                    </div>

                    <FormIsHuman
                        setOpenCheckBox={setOpenCheckBox}
                        openCheckBox={openCheckBox}
                        isMatch={isMatch}
                    />
                </form>
            </div>
        </>
    );
}

export default Form;
