import { useState, ChangeEvent } from "react";
export default function useCheckBoxHook() {
    const [checkbox, setCheckbox] = useState(false);

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setCheckbox((prev) => !prev);
    }

    function onreset(value: boolean): void {
        setCheckbox(value);
    }

    return {
        checked: checkbox,
        onChange,
        onreset,
    };
}
