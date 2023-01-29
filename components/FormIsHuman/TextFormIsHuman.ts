import Multilanguage from "../Multilanguage";

function TextFormIsHuman() {
    const errorMessage = Multilanguage(
        "Не коректно вибрані картинки",
        "Incorrectly selected pictures",
        "Forkert valgte billeder"
    );

    const title = Multilanguage(
        "Виберіть картинки із котами",
        "Choose pictures with cats",
        "Vælg billeder med katte"
    );
    return {
        errorMessage,
        title,
    };
}

export default TextFormIsHuman;
