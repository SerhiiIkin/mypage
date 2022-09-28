import { TextState } from "../../modules/modules";
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
        "Написати мені в телеграм",
        "Write me in the telegram",
        "Skriv til mig in telegram"
    );

    return { hello, greeting, textAbout, btnMessage };
}
export default HelloText;
