import Multilanguage from "../Multilanguage";

export default function LoginFormText() {
    const loginform = Multilanguage(
        "Форма входу",
        "Login form",
        "Login formular"
    );
    const placeholderForm = Multilanguage(
        "Напишіть своє ім'я",
        "Write your name",
        "Skriv dit navn"
    );
    const submitForm = Multilanguage(
        "Почати чат",
        "Start a chat",
        "Start en chat"
    );
    const errorMessage = Multilanguage("Недостатньо літер", "Not enough letters","Ikke nok bogstaver");
    return {
        loginform,
        placeholderForm,
        submitForm,
        errorMessage,
    };
}
