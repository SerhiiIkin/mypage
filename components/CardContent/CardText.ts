import Multilanguage from "../Multilanguage";

function CardText() {
    const titleTask = Multilanguage(
        "Завдання з курсу Frontend basic",
        "Task from the course Frontend Basis",
        "Opgave fra kurset Frontend Basis"
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
    const altRestaurant = Multilanguage("Ресторан", "Restaurant", "Restaurant");
    const descriptionRestaurant = Multilanguage(
        "Це моя програма, яку я створив за допомогою React JS. Я отримую дані з API (mockapi.io) і записую їх у базу даних (react-redux). Я використовував інтерфейс матеріалу з (mui.com), щоб зробити його більш красивим і чуйним. Це робиться з react-router-dom, тому це SPA (односторінкова програма)",
        "It is my application, that I maked with React JS. I get data from API ( mockapi.io ) and write them in database (react-redux). I used material UI from ( mui.com ) for at make it more beautiful and responsive. It makes with react-router-dom, so it is SPA (Single page application)",
        "Det er min application, som jeg har lavet med React JS. Jeg henter data fra API ( mockapi.io ) og skriver dem i database (react-redux). Jeg brugte materiale UI fra ( mui.com ) for at gøre det smukkere og mere responsivt. Det er lavet med react-router-dom, så det er SPA (Single page application)"
    );

    const altShop = Multilanguage("Магазин", "Shop", "Butik");

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
        "Jeg har udviklet et program, der giver dig mulighed for at oprette en chat mellem flere personer. Du skal indtaste et brugernavn og gå ind i chatten. Programmet er skrevet i React."
    );

    const titleGammelSide = Multilanguage(
        "Моя перша сторінка портфоліо",
        "My first portfolio page",
        "Min første portefølje side"
    );
    const altGammelSide = Multilanguage(
        "Перша сторінка",
        "The first page",
        "Den første side"
    );
    const descriptionGammelSide = Multilanguage(
        'Моя перша сторінка, яку я розробив, щоб показати свої навики в Html, Scss, Js. На той момент я не мав досвіду роботи із бібліотекой "React" або "Next Js". Я важжаю, то був чудовий досвід для мене, як починаючого веб розробника.',
        "My first page that I designed to show my skills in Html, Scss, Js. At that time, I had no experience with the React or Next Js library. I think it was a great experience for me as a beginner web developer.",
        "Min første side, som jeg har designet for at vise mine færdigheder i HTML, Scss, Js. På det tidspunkt havde jeg ingen erfaring med React eller Next Js bibliotek. Jeg synes, det var en fantastisk oplevelse for mig som nybegynder webudvikler."
    );

    const titledetteWebsted = Multilanguage(
        "Поточна сторінка",
        "Current page",
        "Nuværende side"
    );
    const altdetteWebsted = Multilanguage(
        "Поточна сторінка",
        "Current page",
        "Nuværende side"
    );
    const descriptiondetteWebsted = Multilanguage(
        'З часом набуваючи більше досвіду, у мене є бажання змінити щось на краще. Цей сайт я розробляв на фрейморку який називається "Next JS". Використувуючи цей фреймворт, я розробив односторінковий сайт, з можливістю перекелючення мов, без перезагрузки сторіки, що я важжаю набагато краще для багато мовного сайту. Всі картинки, завантажуються паралельно, тобто користувачеві не потрібно чекати доки весь сайт загрузиться. Замість картинок він буде тимчасво бачити спінер. Використовуючи фреймфорк Tailwind Css, значно зменшується кількість коду в стилях. Деякі картинки, є можливість відкрити в повний екран, щоб роздивитись деталі. На сторінці про мене, можна знайти відео про мене. Якщо користувач зайде на невідому сторінку, то він отримає сторінку 404, яку я розробив.',
        'Over time, gaining more experience, I have a desire to change something for the better. I developed this site on the framework called "Next JS". Using this framework, I developed a single-page site, with the ability to switch languages, without reloading the page, which I consider much better for a multilingual site. All pictures are loaded in parallel, that is, the user does not need to wait until the entire site is loaded. Instead of pictures, he will temporarily see a spinner. Using the Tailwind Css framework significantly reduces the amount of code in styles. Some pictures can be opened in full screen to see the details. On the page about me, you can find a video about me. If the user goes to an unknown page, he will get a 404 page that I designed.',
        'Med tiden, får jeg mere erfaring, har jeg et ønske om at ændre noget til det bedre. Jeg udviklede dette websted på framework kaldet "Next JS". Ved at bruge denne framework udviklede jeg et enkeltsidet websted med mulighed for at skifte sprog uden at genindlæse siden, hvilket jeg anser for meget bedre for et flersproget websted. Alle billeder indlæses parallelt, det vil sige, at brugeren ikke behøver at vente, indtil hele siden er indlæst. I stedet for billeder vil han midlertidigt se en spinner. Brug af Tailwind Css framework reducerer mængden af ​​kode i stilarter markant.  Nogle billeder kan åbnes i fuld skærm for at se detaljerne. På siden om mig kan du finde en video om mig. Hvis brugeren går til en ukendt side, får han en 404-side, som jeg har designet.'
    );

    const titleWorldBaristaCup = Multilanguage("World Barista Cup");
    const altWorldBaristaCup = Multilanguage("World Barista Cup");
    const descriptionWorldBaristaCup = Multilanguage(
        "Тестове завдання, яке на мою думку заслуговує місце в моєму портфоліо. Використовуючи bootstrap і jQuery, є слайдер і пошук по сайту.",
        "A test task that I think deserves a place in my portfolio. Using bootstrap and jQuery, there is a slider and site search.",
        "En testopgave, som jeg synes fortjener en plads i min portfolio. Ved at bruge bootstrap og jQuery er der en skyder og webstedssøgning."
    );

    const titleTodoListAngular = Multilanguage(
        "Todo list Angular + ASP.NET Web Api + Sql Server + TailwindCss"
    );
    const altodoListAngular = Multilanguage("todo list angular");
    const descriptionTodoListAngular = Multilanguage(
        'Я розробив звичайний "Todo list" використовуючи фреймворк "Angular + TailwindCss", для серверної частини я використовував "ASP.NET Web Api" і для баз даних я використовував "Sql Server". Повна функціональна можливість, додавати, редагувати і видаляти "Todo"',
        'I designed the usual  "Todo list" using the framework "Angular + TailwindCss", for the server part I used "ASP.NET Web Api" and for databases I used "SQL Server ".Full functional ability, add, edit and delete "Todo "',
        'Jeg designede den sædvanlige "todo-list " ved hjælp af framework "Angular + TailwindCss", til serverdelen jeg brugte "ASP.NET Web API" og til databaser brugte jeg "SQL Server". Fuld funktionel evne, tilføjning, rediger og sletning "todo"'
    );

    const titleTodoListVue = Multilanguage(
        "Todo list Vue + ASP.NET Web Api + Sql Server + Bootstrap"
    );
    const altodoListVue = Multilanguage("todo list vue");
    const descriptionTodoListVue = Multilanguage(
        'Я розробив звичайний "Todo list" використовуючи фреймворк "Vue + Bootstrap", для серверної частини я використовував "ASP.NET Web Api" і для баз даних я використовував "Sql Server". Повна функціональна можливість, додавати, редагувати і видаляти "Todo"',
        'I designed the usual  "Todo list" using the framework "Vue + Bootstrap", for the server part I used "ASP.NET Web Api" and for databases I used "SQL Server ".Full functional ability, add, edit and delete "Todo "',
        'Jeg designede den sædvanlige "todo-list " ved hjælp af framework "Vue  + Bootstrap", til serverdelen jeg brugte "ASP.NET Web API" og til databaser brugte jeg "SQL Server". Fuld funktionel evne, tilføjning, rediger og sletning "todo"'
    );

    const titleTodoListBlazor = Multilanguage(
        "Todo list Blazor WebAssembly + Sql Server + Bootstrap"
    );
    const altodoListBlazor = Multilanguage("todo list blazor webAssembly");
    const descriptionTodoListBlazor = Multilanguage(
        'Я розробив звичайний "Todo list" використовуючи фреймворк "Blazor WebAssembly + Bootstrap",  для баз даних я використовував "Sql Server". Повна функціональна можливість, додавати, редагувати і видаляти "Todo"',
        'I designed the usual  "Todo list" using the framework "Blazor WebAssembly + Bootstrap",  for databases I used "SQL Server ". Full functional ability, add, edit and delete "Todo "',
        'Jeg designede den sædvanlige "todo-list " ved hjælp af framework "Blazor WebAssembly  + Bootstrap", til databaser brugte jeg "SQL Server". Fuld funktionel evne, tilføjning, rediger og sletning "todo"'
    );

    const titlePosts = Multilanguage(
        "React app + C# .Net Core 6 Web API + SQL Server"
    );
    const altPosts = Multilanguage("posts");
    const descriptionPosts = Multilanguage(
        "Я розробив Full stack програму, в на базі бібліотеки React, для серверної частини я використовував .NET Web API і для збереження даних баду даних SQL Server. Є можливість створення нового користувача із фото, фото я зберігаю на сервері. Користувач може переглянути всі пости, а також створити свій власний також із картинкою. Користувач має можливість коментувати пости, додавати вподобайку або забирати, відповідати на коментарі. Всі пости або коментарі створенні даним користувачем можуть редагуватись або видалятись. Авторизація користувача зберігається на протязі доби.",
        "I developed a full stack program, based on the React library, for the server part I used .NET Web API and for saving data, I used a SQL Server database. It is possible to create a new user from a photo, I save the photo on the server. The user can view all the posts and also create his own also with a picture. The user has the opportunity to comment on posts, add or remove favorites, reply to comments. All posts or comments created by this user can be edited or deleted. User authorization is stored for 24 hours.",
        "Jeg udviklede et full stack program, baseret på React biblioteket, til serverdelen brugte jeg .NET Web API og til at gemme data brugte jeg en SQL Server database. Det er muligt at oprette en ny bruger fra et billede, jeg gemmer billedet på serveren. Brugeren kan se alle indlæg og også oprette sine egne også med et billede. Brugeren har mulighed for at kommentere på indlæg, tilføje eller fjerne favoritter, svare på kommentarer. Alle indlæg eller kommentarer oprettet af denne bruger kan redigeres eller slettes. Brugergodkendelse gemmes i 24 timer."
    );

    const linkText = Multilanguage(
        "Переглянути проект",
        "View the project",
        "Se projektet"
    );

    return {
        titleTask,
        titleProject,
        titleConverter,
        titleManagement,
        altShop,
        altRestaurant,
        altConverter,
        altProject,
        altTask,
        descriptionTask,
        descriptionProject,
        descriptionConverter,
        descriptionRestaurant,
        linkText,
        titleMern,
        descriptionMern,
        titleChat,
        altChat,
        descriptionChat,
        titleGammelSide,
        altGammelSide,
        descriptionGammelSide,
        titledetteWebsted,
        altdetteWebsted,
        descriptiondetteWebsted,
        titleWorldBaristaCup,
        altWorldBaristaCup,
        descriptionWorldBaristaCup,
        titleTodoListAngular,
        altodoListAngular,
        descriptionTodoListAngular,
        titleTodoListVue,
        altodoListVue,
        descriptionTodoListVue,
        titleTodoListBlazor,
        altodoListBlazor,
        descriptionTodoListBlazor,
        titlePosts,
        altPosts,
        descriptionPosts,
    };
}
export default CardText;
