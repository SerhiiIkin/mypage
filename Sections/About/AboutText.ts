import Multilanguage from "../../components/Multilanguage";

function AboutText() {
    const developName = Multilanguage(
        "Junior Frontend розробник",
        "Junior Frontend developer",
        "Junior frontend udvikler"
    );
    const contacts = Multilanguage("Контакти", "Contacts", "Kontakter");
    const mypage = Multilanguage(
        "Моя сторінка на GitHub",
        "My page on GitHub",
        "Min side på GitHub"
    );
    const summary = Multilanguage("Резюме", "Summary", "Resumé");
    const summaryText = Multilanguage(
        "Я закінчив курси в ІТ-школі Hillel .Отримав хороші знання HTML, CSS, JavaScript, React.js , Node.js. В пошуку роботи як Frontend розробник.Що мені найбільше подобається в цій професії, це дивитися на результат моєї роботи, це надихає мене робити це краще і розвиватися в цій галузі.",
        "I finished the courses at the Hillel IT school. I got a good knowledge of HTML, CSS, JavaScript, React.js, Node.js. Looking for a job as a Frontend developer. What I like most about this profession is to see the result of my work, it inspires me to do it better and develop in this field.",
        "Jeg afsluttede kurserne på Hillel IT-skolen. Jeg fik et godt kendskab til HTML, CSS, JavaScript, React.js, Node.js. Leder efter et job som frontend-udvikler. Det, jeg bedst kan lide ved dette fag, er at se resultatet af mit arbejde, det inspirerer mig til at gøre det bedre og udvikle mig indenfor dette felt."
    );

    //Skills block
    const skills = Multilanguage(
        "Мої навички",
        "My skills",
        "Mine færdigheder"
    );
    const skillsList = [];
    addNewItem(
        skillsList,
        "HTML: семантика, специфікація, гумова та адаптивна верстка, методологія BEM",
        "HTML: semantics ,specification, rubber and adaptive layout, BEM methodology",
        "HTML: Semantik, specifikation, gummi og adaptivt layout, BEM -metodologi"
    );

    addNewItem(
        skillsList,
        "CSS: flexbox, grid, scss, перетворення, переходи, анімація, bootstrap, mui",
        "CSS: flexbox, grid, scss, transformations, transitions, animations, bootstrap, mui",
        "CSS: flexbox, grid, scss, transformationer, overgange, animationer, bootstrap, mui"
    );
    addNewItem(
        skillsList,
        "JavaScript: примітиви, об'єкти, масиви, функції, oб'єктно-орієнтоване програмування",
        "JavaScript: primitives, objects, arrays, functions, object oriented programming",
        "JavaScript: primitiver, objekter, arrays, funktioner, objektorienteret programmering"
    );
    addNewItem(skillsList, "Git, GitHub");
    addNewItem(skillsList, "Gulp, Webpack");
    addNewItem(skillsList, "Figma, Adobe Photoshop");
    addNewItem(
        skillsList,
        "Регулярні вираження, Веб сокети, Куки, Локальна пам'ять",
        "Regular expressions, Web sockets, Cookies, Local memory",
        "Regulære udtryk, web-sockets, cookies, lokal hukommelse"
    );
    addNewItem(
        skillsList,
        "Навички маніпулювання з деревом дому",
        "Skills of manipulating with DOM tree",
        "Færdigheder til at manipulere med Dom Tree"
    );
    addNewItem(
        skillsList,
        "Основні моделі програмування",
        "Basic programming patterns",
        "Grundlæggende programmeringsmønstre"
    );
    addNewItem(skillsList, "REST API");
    addNewItem(
        skillsList,
        "MVC/MVP/MVVM архітектура",
        "MVC/MVP/MVVM architecture",
        "MVC/MVP/MVVM arkitektur"
    );
    addNewItem(
        skillsList,
        "Бібліотека React на SPA",
        "Library React for SPA",
        "Bibliotek React på SPA"
    );
    addNewItem(
        skillsList,
        "Принципи маршрутизації на прикладі бібліотеки react-router",
        "Principles of routing on the example of the library react-router",
        "Principper for routing på eksemplet på bibliotekets react-router"
    );
    addNewItem(
        skillsList,
        "Збереження стану програми на прикладі redux and redux-thunk, redux/toolkit",
        "Save the state of the program on the example redux and redux-thunk, redux/toolkit",
        "Gem programmets tilstand på eksemplet redux and redux-thunk, redux/toolkit"
    );
    addNewItem(skillsList, "Typescript, Next Js");

    // Language block
    const language = Multilanguage(
        "Мови, що розмовляю",
        "Language spoken",
        "Sprog taler"
    );
    const languageList = [];

    addNewItem(
        languageList,
        "Українська, рідна",
        "Ukrainian, native",
        "Ukrainsk, indfødt"
    );
    addNewItem(
        languageList,
        "Данська, Вище середнього)",
        "Danish, Upper Intermediate)",
        "Danish, Øvre Mellem)"
    );
    addNewItem(
        languageList,
        "Англійська, Середній",
        "English, Intermediate",
        "Engelsk, Mellemliggende"
    );
    addNewItem(
        languageList,
        "Російська, Вище середнього",
        "Russian, Upper Intermediate",
        "Russisk, Øvre Mellem"
    );

    //Work experience
    const experience = Multilanguage(
        "Досвід роботи",
        "Work experience",
        "Erhvervserfaring"
    );
    const strongServiceWork = Multilanguage(
        "Сервісна робота",
        "Service work",
        "Servicearbejde"
    );
    const serviceWorkTime = Multilanguage(
        "5 років, 2010-2015, 6 місяців, 2016-2017",
        "5 years, 2010-2015, 6 month, 2016-2017",
        "5 år, 2010-2015, 6 måneder, 2016-2017"
    );
    const serviceWorkDescription = Multilanguage(
        "Кальнщик, Докер Паб, Jaguar",
        "Hookah smoker, Doker Pub, Jaguar",
        "Vandpibe ryger, Doker Pub, Jaguar"
    );
    const strongTransport = Multilanguage(
        "Робота у сфері транспорту",
        "Work in the field of transport",
        "Arbejde inden for transport"
    );
    const transportTime = Multilanguage(
        "6 місяців, 2015-2016",
        "6 months, 2015-2016",
        "6 måneder, 2015-2016"
    );
    const transportDescription = Multilanguage(
        "Таксист",
        "Taxi driver",
        "Taxachauffør"
    );

    const strongAgriculture = Multilanguage(
        "Робота в галузі сільського господарства",
        "Work in the field of agriculture",
        "Arbejde inden for landbruget"
    );
    const agricultureTime = Multilanguage(
        "5 років, 2017 - дотепер",
        "5 years, 2017 - until now",
        "5 år, 2017 - indtil nu"
    );
    const agricultureDescription = Multilanguage(
        "Працівник свинячої ферми",
        "Pig farm worker",
        "Medarbejder på grise gård"
    );

    // Edication

    const edication = Multilanguage("Навчання", "Edication", "Uddannelse");
    const strongEdication = Multilanguage(
        "Національний університет біоресурсів та природокористування України",
        "National University of Bioresources and Nature Management",
        "National University of Bioressources and Nature Management"
    );
    const edicationDescription = Multilanguage(
        "2008-2014 рр. Факультет інформаційних технологій (Master)",
        "2008-2014 Faculty of information Technology(Master)",
        "2008-2014 Fakultet for informationsteknologi(Master)"
    );

    //Courses

    const course = Multilanguage(
        "Додаткова освіта, курси",
        "Additional Education, Courses",
        "Yderligere uddannelse, kurser"
    );
    const frontendBasis = Multilanguage(
        "Hillel курс, Frontend Basis (08.07.2021 - 27.09.2021)",
        "Hillel Course, Frontend Basis (08.07.2021 - 27.09.2021)",
        "Hillel kursus, Frontend Basis (08.07.2021 - 27.09.2021)"
    );
    const frontendPro = Multilanguage(
        "Hillel курс, Frontend Pro (09.12.2021 - 19.04.2022)",
        "Hillel Course, Frontend Pro (09.12.2021 - 19.04.2022)",
        "Hillel kursus, Frontend Pro (09.12.2021 - 19.04.2022)"
    );
    const quoteTitle = Multilanguage(
        "Відгук мого вчителя з курсу Frondend Pro:",
        "Feedback from my teacher from the Frontend Pro course:",
        "Feedback fra min underviser fra Frontend Pro-kurset:"
    );
    const quoteText = Multilanguage(
        "Сергій – найвідповідальніший та ініціативний студент! У рамках курсу він сприймав інформацію максимально швидко. Під час курсу він ставив чіткі запитання, щоб зрозуміти нову інформацію. Успішно пройшов курс з найвищим балом, посівши 1 місце в рейтингу",
        "Serhii is the most responsible and proactive student! As part of the course, he grasped information as quickly as possible. During the course, he asked precise questions to understand new information. Successfully completed the course with the highest score, taking 1st place in the ranking",
        "Serhii er den mest ansvarlige og proaktive studerende! Som en del af kurset greb han information så hurtigt som muligt. I løbet af kurset stillede han præcise spørgsmål for at forstå ny information. Fuldførte kurset med den højeste score og tog 1. pladsen i ranglisten"
    );
    const dansk = Multilanguage(
        "Датська школа, датська мова, 2,5 роки",
        "Danish school, Danish language, 2.5 years",
        "Dansk skole, dansk sprog, 2,5 år"
    );
    const english = Multilanguage(
        "Курс англійської в It",
        "English course in It",
        "Engelsk kursus i It"
    );

    const downloadText = Multilanguage(
        "Є можливість завантажити резюме і супровідний лист  у форматі pdf.",
        "There is a possibility download resume and cover letter in pdf format.",
        "Der er en mulighed hent CV og ansøgning i pdf-format."
    );
    
    const downloadLabelCV = Multilanguage("Завантажити резюме", "Download resume", "Hent CV");
    const downloadLabelAnsøgning = Multilanguage("Завантажити супровідний лист", "Download cover letter", "Hent ansøgning");

    function addNewItem(
        array: string[],
        ukr: string,
        eng?: string,
        dk?: string
    ): void {
        if (!eng && !dk) {
            array.push(Multilanguage(ukr, ukr, ukr));
        } else {
            array.push(Multilanguage(ukr, eng, dk));
        }
    }

    return {
        developName,
        contacts,
        mypage,
        summary,
        summaryText,
        skills,
        skillsList,
        language,
        languageList,
        experience,
        strongServiceWork,
        serviceWorkTime,
        serviceWorkDescription,
        strongTransport,
        transportTime,
        transportDescription,
        strongAgriculture,
        agricultureTime,
        agricultureDescription,
        edication,
        strongEdication,
        edicationDescription,
        course,
        frontendBasis,
        frontendPro,
        quoteTitle,
        quoteText,
        dansk,
        english,
        downloadText,
        downloadLabelCV,
downloadLabelAnsøgning
    };
}
export default AboutText;
