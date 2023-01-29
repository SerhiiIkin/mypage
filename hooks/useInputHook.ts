import { ChangeEvent, useState } from "react";

function useInputHook() {
    const [value, setValue] = useState("");

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    return { value, onChange };
}

export default useInputHook;
