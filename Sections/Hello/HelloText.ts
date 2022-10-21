import Multilanguage from "../../components/Multilanguage";

function HelloText() {
    const hello = Multilanguage("Привіт", "Hello", "Hej");
    const greeting = Multilanguage(
        "Моє ім'я Сергій Ікін",
        "I'm Serhii Ikin",
        "Jeg er Serhii Ikin"
    );
    const textAbout = Multilanguage(
        "Front-End розробник. Під час створення сайту розвиваю та вдосконалюю свої навички. Вам потрібен сайт? Тоді зв'яжіться зі мною!",
        "Front-End Developer. At the time of creating a site, I develop and improve my skills. Do you need a site? Then contact me!",
        "Front-end udvikler. På tidspunktet for oprettelse af et websted, udvikler og forbedrer jeg mine færdigheder. Har du brug for en side? Så kontakt mig!"
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

    const errorMessage = Multilanguage(
        "Помилка відправки повідомлення",
        "Error sending message",
        "Fejl ved afsendelse af besked"
    );

    return {
        hello,
        greeting,
        textAbout,
        btnMessage,
        titleWrite,
        requiredField,
        incorrectEmail,
        textWrite,
        emailWrite,
        errorMessage
    };
}
export default HelloText;
