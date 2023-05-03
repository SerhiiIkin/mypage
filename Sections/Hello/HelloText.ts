import Multilanguage from "../../components/Multilanguage";

function HelloText() {
    const textAbout = Multilanguage(
        "Я full-stack розробник. Я розробляю різні проекти на різних фреймворках для отримання досвіду, тому що мені цікаво це.",
        "I am a full-stack developer. I develop different projects on different frameworks to gain experience because I am interested in it.",
        "Jeg er en fuld stack udvikler. Jeg udvikler forskellige projekter på forskellige frameworks for at få erfaring, fordi jeg er interesseret i det."
    );
    const btnMessage = Multilanguage(
        "Написати мені на почту",
        "Write to me by mail",
        "Skriv til mig på mail"
    );

    const titleWrite = Multilanguage(
        "Напишіть ваш заголовок:",
        "Write your title:",
        "Skriv din titel:"
    );

    const textWrite = Multilanguage(
        "Ваше повідомлення:",
        "Your message:",
        "Din besked:"
    );

    const emailWrite = Multilanguage(
        "Напишіть вашу електрону адресу",
        "Write your email:",
        "Skriv din email:"
    );

    const requiredField = Multilanguage(
        "Oбов'язкове поле",
        "Required field",
        "Påkrævet område"
    );

    const incorrectEmail = Multilanguage(
        "Невірно введена електронна адреса",
        "Incorrect email address entered",
        "Forkert e-mailadresse indtastet"
    );

    const isHuman = Multilanguage("Я людина", "I am human", "Jeg er menneske");
    const errorTextHuman = Multilanguage(
        "Підтвердіть що ви людина :)",
        "Confirm that you are human :)",
        "Bekræft, at du er et menneske"
    );

    const errorMessage = Multilanguage(
        "Помилка відправки повідомлення",
        "Error sending message",
        "Fejl ved afsendelse af besked"
    );

    const btnSend = Multilanguage("Відправити", "Send", "Sende");

    const btnSendTryAgain = Multilanguage(
        "Спробувати ще раз",
        "Try again",
        "Prøv igen"
    );

    const messageSendSuccess = Multilanguage(
        "Повідомлення вдало відправлено!",
        "The message is successfully sent!",
        "Beskeden sendt med succes!"
    );

    return {
        textAbout,
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
errorTextHuman
    };
}
export default HelloText;
