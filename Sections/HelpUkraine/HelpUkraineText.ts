import Multilanguage from "../../components/Multilanguage";

export default function HelpUkraineText() {
    const title = Multilanguage(
        "Як допомогти Українській армії?",
        "How to help the Ukrainian army?",
        "Hvordan hjælper man den ukrainske hær?"
    );
    const description = Multilanguage(
        "Я розробив сторінку - підсказку, де я показую, як можливо найлегчим шляхом допомогти українській армії.Я важжаю, сума не важлива, з кожного по троху і то буде чудова допомога!",
        "I have developed a page - a tip, where I show how to help the Ukrainian army in the easiest way possible. I think that the amount is not important, a little bit from everyone will be a great help!",
        "Jeg har udviklet en side - et tip, hvor jeg viser hvordan man hjælper den ukrainske hær på den nemmeste måde.. Jeg tror at beløbet ikke er vigtigt, lidt fra alle vil være en stor hjælp!"
    );
    const step1 = Multilanguage(
        "1) Переходимо за посиланням на сторінку донатів.",
        "1) Follow the link to the donation page.",
        "2) Følg linket til donationssiden."
    );
    const step2 = Multilanguage(
        '2) Вказуємо імя, суму грошей (в гривнях) і повідомллення "На допомогу українським військовим!"',
        '2) We indicate the name, the amount of money (in hryvnias) and the message "To the aid of the Ukrainian military!"',
        '2) Vi angiver navnet, pengebeløbet (i hryvnias) og beskeden "Til hjælp for det ukrainske militær!"'
    );
    const step3 = Multilanguage("3) Останій крок, підтвердження оплати", "3) The last step, payment confirmation", "3) Det sidste trin, betalingsbekræftelse");
    const subtitle = Multilanguage("Як показано на цьому знімку екрана","As shown in this screenshot","Som vist på dette skærmbillede");
    const link = Multilanguage("Посилання", "Link", "Link");
    const errorMessage = Multilanguage("Помилка завантаження даних з банку!","Error downloading data from the bank!", "Fejl ved download af data fra bank!");

    return {
        title,
        description,
        step1,
        step2,
        step3,
        subtitle,
        link,
        errorMessage
    };
}
