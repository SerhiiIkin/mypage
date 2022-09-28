import Multilanguage from "../Multilanguage";

function CardText() {
    const titleTask = Multilanguage(
        "Фінальне завдання з курсу Frontend basic",
        "Final task from the course Frontend Basis",
        "Afsluttende opgave fra kurset Frontend Basis"
    );
    const altTask = Multilanguage(
        "Зображення завдання курсу",
        "The course task from the course image",
        "Kursopgaven fra kursusbilledet"
    );
    const descriptionTask = Multilanguage(
        "Це також був сайт із мого курсу HTML/CSS, де я вперше використав JS для <Menu Burger> і зрозумів, що це не так складно, як я собі уявляв. З набутими знаннями я вже міг створювати такі прості сайти на одній сторінці, та ще й використовуючи вже трохи JavaScript. Перейшовши за посиланням нижче, ви можете побачити, яким був мій перший сайт :)",
        "It was also a site from my HTML / CSS course, where I first used JS for <Menu Burger> and realized it wasn't as complicated as I imagined. With the acquired knowledge, I could already make such easy sites on one page, and even using already a little JavaScript. By clicking on the link below, you can see what my first site was :)",
        "Det var også et websted fra mit HTML/CSS kursus, hvor jeg først brugte JS til <Menu Burger> og indså, at det ikke var så kompliceret, som jeg havde forestillet mig. Med den erhvervede viden kunne jeg allerede lave sådanne nemme sider på én side, og endda bruge allerede lidt JavaScript. Ved at klikke på linket nedenfor kan du se, hvad min første side var :)"
    );

    const titleProject = Multilanguage(
        "Підсумкове завдання з курсу Front-end Basis",
        "Final task from the course Front-end Basis",
        "Afsluttende opgave fra kurset Front-end Basis"
    );
    const altProject = Multilanguage(
        "Зображення проекту курсу",
        "The course project image",
        "Kursets projektbillede"
    );
    const descriptionProject = Multilanguage(
        "Це була веб-сторінка з мого курсу hmtl/css. Тут я маю деякі знання про html, css і як з ними працювати. Я використовував більше js для цієї веб-сторінки, і я був дуже радий, тому що навчився цьому сам. Тут ви можете побачити головну веб-сторінку, але ви завжди можете натиснути на посилання нижче та переглянути мій проект онлайн. Цей проект працює трьома мовами, тому що він був у макеті. Я зробив усе можливе, щоб це запрацювало, тому що мені подобається, як працює моя веб-сторінка. Сторінка адаптивна, що дуже зручно, адже ви можете переглядати сторінку з будь-якого пристрою і її завжди буде комфортно переглядати. Переходьте за посиланням нижче, і дивіться на мої роботи із задоволенням :)",
        "This was a web page from my hmtl / css course. Here I have some knowledge about html, css and how to work with it. I used more js for this web page and I was very happy because I learned it myself. Here you can see the main web page, but you can always click on the links below and see my project online. This project works in three languages ​​because it was in the maket. I did my best to make it work because I like the way my web page works. The page is adaptive, which is very convenient because you can view the page from any device and it will always be comfortable to view. Click on the link below, and look at my work with pleasure :)",
        "Dette var en webside fra mit hmtl / css kursus. Her har jeg lidt viden om html, css og hvordan man arbejder med det. Jeg brugte flere js til denne webside, og jeg var meget glad, fordi jeg lærte det selv. Her kan du se hovedsiden, men du kan altid klikke på nedenstående links og se mit projekt online. Dette projekt fungerer på tre sprog, fordi det var i fabrikatet. Jeg gjorde mit bedste for at få det til at fungere, fordi jeg kan lide den måde, min webside fungerer på. Siden er adaptiv, hvilket er meget praktisk, fordi du kan se siden fra enhver enhed, og den vil altid være behagelig at se. Klik på linket herunder, og se mit arbejde med fornøjelse :)"
    );

    const titleConverter = Multilanguage(
        'Додаток React "Конвертер валют"',
        'React application "Currency converter"',
        'React applikation "Valutaomregner"'
    );
    const altConverter = Multilanguage("Конвертер", "Converter", "Konverter");
    const descriptionConverter = Multilanguage(
        "Це моя програма, яку я створив за допомогою React JS. Я отримую дані з API і записую їх у базу даних (react-redux), показую їх у таблиці та використовую для обчислення. Я використовував інтерфейс матеріалу з (mui.com), щоб зробити його більш красивим і чуйним.",
        "It is my application, that I maked with React JS. I get data from API and write them in database (react-redux), show them in the table and use for calculate. I used material UI from ( mui.com ) for at make it more beautiful and responsive.",
        "Det er min applikation, som jeg har lavet med React JS. Jeg henter data fra API og skriver dem i database (react-redux), viser dem i tabellen og bruger dem til at beregne. Jeg brugte materiale UI fra ( mui.com ) for at gøre det smukkere og mere responsivt."
    );

    const titleManagement = Multilanguage(
        'Додаток React "Ресторанне управління"',
        'React application "Restaurant management"',
        'React applikation "Restaurant administration"'
    );
    const altRestaurant = Multilanguage("Ресторан", "Restaurant", "restaurant");
    const descriptionRestaurant = Multilanguage(
        "Це моя програма, яку я створив за допомогою React JS. Я отримую дані з API (mockapi.io) і записую їх у базу даних (react-redux). Я використовував інтерфейс матеріалу з (mui.com), щоб зробити його більш красивим і чуйним. Це робиться з react-router-dom, тому це SPA (односторінкова програма)",
        "It is my application, that I maked with React JS. I get data from API ( mockapi.io ) and write them in database (react-redux). I used material UI from ( mui.com ) for at make it more beautiful and responsive. It makes with react-router-dom, so it is SPA (Single page application)",
        "Det er min application, som jeg har lavet med React JS. Jeg henter data fra API ( mockapi.io ) og skriver dem i database (react-redux). Jeg brugte materiale UI fra ( mui.com ) for at gøre det smukkere og mere responsivt. Det er lavet med react-router-dom, så det er SPA (Single page application)"
    );

    const titleShop = Multilanguage(
        'Додаток React / Typescript "Магазин"',
        'React / Typescript application "Shop"',
        'React / Typescript applikation "Butik"'
    );
    const altShop = Multilanguage("Магазин", "Shop", "Butik");
    const descriptionShop = Multilanguage(
        "Це мій додаток, який я створив за допомогою React і використовував Typescript для більш ефективного та правильного написання коду. Я отримую дані з API (fakestoreapi.com) і записую їх у базу даних redux/toolkit за допомогою axios. Я використовував матеріал UI (tailwindcss.com), щоб зробити його більш красивим і чуйним. Це зроблено за допомогою react-router-dom, тому це SPA (односторінкова програма)",
        "It is my application, that I make with React and used Typescript for more effective and correctly write code. I get data from API ( fakestoreapi.com ) and write them in database redux/toolkit with using axios. I used material UI ( tailwindcss.com ) for at make it more beautiful and responsive. It maked with react-router-dom, so it is SPA (Single page application)",
        "Det er min applikation, som jeg laver med React og brugte Typescript for mere effektiv og korrekt skrive kode. Jeg henter data fra API ( fakestoreapi.com ) og skriver dem i database redux/toolkit med brug af axios. Jeg brugte materiale UI (tailwindcss.com) for at gøre det smukkere og mere responsivt. Det er lavet med react-router-dom, så det er SPA (Single page application)"
    );

    const titleMern = Multilanguage(
        'Додаток Mongo Db, Express, React, Node Js i TypeScript "Магазин"',
        'Mongo Db, Express, React, Node Js and TypeScript application "Shop"',
        'Mongo Db, Express, React, Node Js and TypeScript applikation "Butik"'
    );
    const descriptionMern = Multilanguage(
        "Це моя перша програма з повним стеком, яку я створив за допомогою React ( Typescript ), Express, Mongo Db, Node Js для сторінки реєстрації/авторизації. Я отримую дані зі свого сервера та записую їх у базу даних redux/toolkit за допомогою axios. Я використовував матеріал UI (tailwindcss.com), щоб зробити його більш красивим і чуйним. Це зроблено за допомогою react-router-dom, тому це SPA (односторінкова програма). Коли особа авторизується адміністратором, вона може додати продукт. Як користувач, так і адміністратор можуть писати коментарі під продуктами.",
        "It is my first full stack application, that I maked with React ( Typescript ), Express, Mongo Db, Node Js for at make registration/ authorization page. I get data from my server and write them in database redux/toolkit with using axios. I used material UI ( tailwindcss.com ) for at make it more beautiful and responsive. It maked with react-router-dom, so it is SPA (Single page application). When person authorization som admin, so person can add product. Both user and admin can write commenter under products.",
        "Det er min første fuld stack-applikation, som jeg lavede med React (Typescript), Express, Mongo Db, Node Js til at oprette registrerings-/autorisationssiden. Jeg henter data fra min server og skriver dem i database redux/toolkit ved hjælp af axios. Jeg brugte materiale UI (tailwindcss.com) for at gøre det smukkere og mere responsivt. Det er lavet med react-router-dom, så det er SPA (Single page application). Når person autorisation som admin, så person kan tilføje produkt. Både bruger og admin kan skrive kommentar under produkter."
    );

    const titleChat = Multilanguage("React чат", "React chat", "React chat");
    const altChat = Multilanguage("чат", "chat", "chat");
    const descriptionChat = Multilanguage(
        "Я розробив програму, за допомою якої можна створити переписку між декількома особами. Программа написана на React.",
        "I developed a program that allows you to create a chat between several people. You need to enter a username and enter the chat. The program is written in React.",
        "Jeg har udviklet et program, der giver dig mulighed for at oprette en chat mellem flere personer.Du skal indtaste et brugernavn og gå ind i chatten. Programmet er skrevet i React."
    );

    const linkText = Multilanguage(
        "Посилання на github",
        "Link in github",
        "Link i github"
    );

    return {
        titleTask,
        titleProject,
        titleConverter,
        titleManagement,
        titleShop,
        altShop,
        altRestaurant,
        altConverter,
        altProject,
        altTask,
        descriptionTask,
        descriptionProject,
        descriptionConverter,
        descriptionRestaurant,
        descriptionShop,
        linkText,
        titleMern,
        descriptionMern,
        titleChat,
        altChat,
        descriptionChat,
    };
}
export default CardText;
