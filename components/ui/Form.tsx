"use client";
import {
    FocusEvent,
    KeyboardEvent,
    FormEvent,
    Dispatch,
    ComponentPropsWithoutRef,
} from "react";
import Send from "./svg/Send";

interface FormProps extends ComponentPropsWithoutRef<"form"> {
    submitHandler: (event: FormEvent<HTMLFormElement>) => void;
    onSendMessage: (event: KeyboardEvent<HTMLFormElement>) => void;
    typing: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
    stopTyping: (event: FocusEvent<HTMLTextAreaElement>) => void;
    textarea: string;
    setTextarea: Dispatch<React.SetStateAction<string>>;
    focusTextArea?: (event: FocusEvent<HTMLTextAreaElement>) => void;
}

export default function Form({
    submitHandler,
    onSendMessage,
    textarea,
    setTextarea,
    typing,
    stopTyping,
    focusTextArea,
}: FormProps) {
    return (
        <form
            onSubmit={submitHandler}
            onKeyDown={onSendMessage}
            className="relative"
        >
            <textarea
                title="Ctrl + Enter for send message"
                autoFocus
                onFocus={focusTextArea}
                onKeyDown={typing}
                onBlur={stopTyping}
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
                className="mt-2 resize-none outline outline-neutral-400 rounded p-2 w-full"
            ></textarea>
            <button
                type="submit"
                className="absolute z-10 bottom-0 right-0 cursor-pointer p-3"
            >
                <Send />
            </button>
        </form>
    );
}
