import Multilanguage from "../Multilanguage";

export default function UserChatText() {
    const hello = Multilanguage("Привіт", "Hello", "Hej");
    const welcome = Multilanguage(
        "Ласкаво прошу до нашого чату.",
        "Welcome to our chat.",
        "Velkommen til vores chat."
    );
    const chatTime = Multilanguage(
        "Наш чат зберігається 24 години.",
        "Our chat is saved 24 hour .",
        "Vores chat er gemt 24 timer."
    );
    const typingtext = Multilanguage("друкує", "prints", "udskrifter");
    return {
        hello,
        welcome,
        chatTime,
        typingtext,
    };
}
