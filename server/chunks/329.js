"use strict";
exports.id = 329;
exports.ids = [329];
exports.modules = {

/***/ 303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function Image({ quality , alt , src , styles , onImgClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        onClick: onImgClick,
        src: src,
        className: styles,
        quality: quality,
        alt: alt
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);


/***/ }),

/***/ 5856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ store_CardData)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Multilanguage.ts
var Multilanguage = __webpack_require__(499);
;// CONCATENATED MODULE: ./components/CardContent/CardText.ts

function CardText() {
    const titleTask = (0,Multilanguage/* default */.Z)("Фінальне завдання з курсу Frontend basic", "Final task from the course Frontend Basis", "Afsluttende opgave fra kurset Frontend Basis");
    const altTask = (0,Multilanguage/* default */.Z)("Зображення завдання курсу", "The course task from the course image", "Kursopgaven fra kursusbilledet");
    const descriptionTask = (0,Multilanguage/* default */.Z)("Це також був сайт із мого курсу HTML/CSS, де я вперше використав JS для <Menu Burger> і зрозумів, що це не так складно, як я собі уявляв. З набутими знаннями я вже міг створювати такі прості сайти на одній сторінці, та ще й використовуючи вже трохи JavaScript. Перейшовши за посиланням нижче, ви можете побачити, яким був мій перший сайт :)", "It was also a site from my HTML / CSS course, where I first used JS for <Menu Burger> and realized it wasn't as complicated as I imagined. With the acquired knowledge, I could already make such easy sites on one page, and even using already a little JavaScript. By clicking on the link below, you can see what my first site was :)", "Det var ogs\xe5 et websted fra mit HTML/CSS kursus, hvor jeg f\xf8rst brugte JS til <Menu Burger> og inds\xe5, at det ikke var s\xe5 kompliceret, som jeg havde forestillet mig. Med den erhvervede viden kunne jeg allerede lave s\xe5danne nemme sider p\xe5 \xe9n side, og endda bruge allerede lidt JavaScript. Ved at klikke p\xe5 linket nedenfor kan du se, hvad min f\xf8rste side var :)");
    const titleProject = (0,Multilanguage/* default */.Z)("Підсумкове завдання з курсу Front-end Basis", "Final task from the course Front-end Basis", "Afsluttende opgave fra kurset Front-end Basis");
    const altProject = (0,Multilanguage/* default */.Z)("Зображення проекту курсу", "The course project image", "Kursets projektbillede");
    const descriptionProject = (0,Multilanguage/* default */.Z)("Це була веб-сторінка з мого курсу hmtl/css. Тут я маю деякі знання про html, css і як з ними працювати. Я використовував більше js для цієї веб-сторінки, і я був дуже радий, тому що навчився цьому сам. Тут ви можете побачити головну веб-сторінку, але ви завжди можете натиснути на посилання нижче та переглянути мій проект онлайн. Цей проект працює трьома мовами, тому що він був у макеті. Я зробив усе можливе, щоб це запрацювало, тому що мені подобається, як працює моя веб-сторінка. Сторінка адаптивна, що дуже зручно, адже ви можете переглядати сторінку з будь-якого пристрою і її завжди буде комфортно переглядати. Переходьте за посиланням нижче, і дивіться на мої роботи із задоволенням :)", "This was a web page from my hmtl / css course. Here I have some knowledge about html, css and how to work with it. I used more js for this web page and I was very happy because I learned it myself. Here you can see the main web page, but you can always click on the links below and see my project online. This project works in three languages ​​because it was in the maket. I did my best to make it work because I like the way my web page works. The page is adaptive, which is very convenient because you can view the page from any device and it will always be comfortable to view. Click on the link below, and look at my work with pleasure :)", "Dette var en webside fra mit hmtl / css kursus. Her har jeg lidt viden om html, css og hvordan man arbejder med det. Jeg brugte flere js til denne webside, og jeg var meget glad, fordi jeg l\xe6rte det selv. Her kan du se hovedsiden, men du kan altid klikke p\xe5 nedenst\xe5ende links og se mit projekt online. Dette projekt fungerer p\xe5 tre sprog, fordi det var i fabrikatet. Jeg gjorde mit bedste for at f\xe5 det til at fungere, fordi jeg kan lide den m\xe5de, min webside fungerer p\xe5. Siden er adaptiv, hvilket er meget praktisk, fordi du kan se siden fra enhver enhed, og den vil altid v\xe6re behagelig at se. Klik p\xe5 linket herunder, og se mit arbejde med forn\xf8jelse :)");
    const titleConverter = (0,Multilanguage/* default */.Z)('Додаток React "Конвертер валют"', 'React application "Currency converter"', 'React applikation "Valutaomregner"');
    const altConverter = (0,Multilanguage/* default */.Z)("Конвертер", "Converter", "Konverter");
    const descriptionConverter = (0,Multilanguage/* default */.Z)("Це моя програма, яку я створив за допомогою React JS. Я отримую дані з API і записую їх у базу даних (react-redux), показую їх у таблиці та використовую для обчислення. Я використовував інтерфейс матеріалу з (mui.com), щоб зробити його більш красивим і чуйним.", "It is my application, that I maked with React JS. I get data from API and write them in database (react-redux), show them in the table and use for calculate. I used material UI from ( mui.com ) for at make it more beautiful and responsive.", "Det er min applikation, som jeg har lavet med React JS. Jeg henter data fra API og skriver dem i database (react-redux), viser dem i tabellen og bruger dem til at beregne. Jeg brugte materiale UI fra ( mui.com ) for at g\xf8re det smukkere og mere responsivt.");
    const titleManagement = (0,Multilanguage/* default */.Z)('Додаток React "Ресторанне управління"', 'React application "Restaurant management"', 'React applikation "Restaurant administration"');
    const altRestaurant = (0,Multilanguage/* default */.Z)("Ресторан", "Restaurant", "restaurant");
    const descriptionRestaurant = (0,Multilanguage/* default */.Z)("Це моя програма, яку я створив за допомогою React JS. Я отримую дані з API (mockapi.io) і записую їх у базу даних (react-redux). Я використовував інтерфейс матеріалу з (mui.com), щоб зробити його більш красивим і чуйним. Це робиться з react-router-dom, тому це SPA (односторінкова програма)", "It is my application, that I maked with React JS. I get data from API ( mockapi.io ) and write them in database (react-redux). I used material UI from ( mui.com ) for at make it more beautiful and responsive. It makes with react-router-dom, so it is SPA (Single page application)", "Det er min application, som jeg har lavet med React JS. Jeg henter data fra API ( mockapi.io ) og skriver dem i database (react-redux). Jeg brugte materiale UI fra ( mui.com ) for at g\xf8re det smukkere og mere responsivt. Det er lavet med react-router-dom, s\xe5 det er SPA (Single page application)");
    const titleShop = (0,Multilanguage/* default */.Z)('Додаток React / Typescript "Магазин"', 'React / Typescript application "Shop"', 'React / Typescript applikation "Butik"');
    const altShop = (0,Multilanguage/* default */.Z)("Магазин", "Shop", "Butik");
    const descriptionShop = (0,Multilanguage/* default */.Z)("Це мій додаток, який я створив за допомогою React і використовував Typescript для більш ефективного та правильного написання коду. Я отримую дані з API (fakestoreapi.com) і записую їх у базу даних redux/toolkit за допомогою axios. Я використовував матеріал UI (tailwindcss.com), щоб зробити його більш красивим і чуйним. Це зроблено за допомогою react-router-dom, тому це SPA (односторінкова програма)", "It is my application, that I make with React and used Typescript for more effective and correctly write code. I get data from API ( fakestoreapi.com ) and write them in database redux/toolkit with using axios. I used material UI ( tailwindcss.com ) for at make it more beautiful and responsive. It maked with react-router-dom, so it is SPA (Single page application)", "Det er min applikation, som jeg laver med React og brugte Typescript for mere effektiv og korrekt skrive kode. Jeg henter data fra API ( fakestoreapi.com ) og skriver dem i database redux/toolkit med brug af axios. Jeg brugte materiale UI (tailwindcss.com) for at g\xf8re det smukkere og mere responsivt. Det er lavet med react-router-dom, s\xe5 det er SPA (Single page application)");
    const titleMern = (0,Multilanguage/* default */.Z)('Додаток Mongo Db, Express, React, Node Js i TypeScript "Магазин"', 'Mongo Db, Express, React, Node Js and TypeScript application "Shop"', 'Mongo Db, Express, React, Node Js and TypeScript applikation "Butik"');
    const descriptionMern = (0,Multilanguage/* default */.Z)("Це моя перша програма з повним стеком, яку я створив за допомогою React ( Typescript ), Express, Mongo Db, Node Js для сторінки реєстрації/авторизації. Я отримую дані зі свого сервера та записую їх у базу даних redux/toolkit за допомогою axios. Я використовував матеріал UI (tailwindcss.com), щоб зробити його більш красивим і чуйним. Це зроблено за допомогою react-router-dom, тому це SPA (односторінкова програма). Коли особа авторизується адміністратором, вона може додати продукт. Як користувач, так і адміністратор можуть писати коментарі під продуктами.", "It is my first full stack application, that I maked with React ( Typescript ), Express, Mongo Db, Node Js for at make registration/ authorization page. I get data from my server and write them in database redux/toolkit with using axios. I used material UI ( tailwindcss.com ) for at make it more beautiful and responsive. It maked with react-router-dom, so it is SPA (Single page application). When person authorization som admin, so person can add product. Both user and admin can write commenter under products.", "Det er min f\xf8rste fuld stack-applikation, som jeg lavede med React (Typescript), Express, Mongo Db, Node Js til at oprette registrerings-/autorisationssiden. Jeg henter data fra min server og skriver dem i database redux/toolkit ved hj\xe6lp af axios. Jeg brugte materiale UI (tailwindcss.com) for at g\xf8re det smukkere og mere responsivt. Det er lavet med react-router-dom, s\xe5 det er SPA (Single page application). N\xe5r person autorisation som admin, s\xe5 person kan tilf\xf8je produkt. B\xe5de bruger og admin kan skrive kommentar under produkter.");
    const titleChat = (0,Multilanguage/* default */.Z)("React чат", "React chat", "React chat");
    const altChat = (0,Multilanguage/* default */.Z)("чат", "chat", "chat");
    const descriptionChat = (0,Multilanguage/* default */.Z)("Я розробив програму, за допомою якої можна створити переписку між декількома особами. Программа написана на React.", "I developed a program that allows you to create a chat between several people. You need to enter a username and enter the chat. The program is written in React.", "Jeg har udviklet et program, der giver dig mulighed for at oprette en chat mellem flere personer.Du skal indtaste et brugernavn og g\xe5 ind i chatten. Programmet er skrevet i React.");
    const linkText = (0,Multilanguage/* default */.Z)("Посилання на github", "Link in github", "Link i github");
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
        descriptionChat
    };
}
/* harmony default export */ const CardContent_CardText = (CardText);

;// CONCATENATED MODULE: ./img/Cards/kursus-project-eng.jpg
/* harmony default export */ const kursus_project_eng = ({"src":"/_next/static/media/kursus-project-eng.ad46ca3c.jpg","height":513,"width":850,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAkwtX/8QAHBAAAQMFAAAAAAAAAAAAAAAAAQADIQIREiJB/9oACAEBAAE/AGnjgI2vNXV//8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIAEiH/2gAIAQIBAT8AdRY5P//EABkRAAEFAAAAAAAAAAAAAAAAAAIAAQMSIf/aAAgBAwEBPwCMio2r/9k="});
;// CONCATENATED MODULE: ./img/Cards/kursus-lessons-project.jpg
/* harmony default export */ const kursus_lessons_project = ({"src":"/_next/static/media/kursus-lessons-project.ccdf02c6.jpg","height":630,"width":850,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAoIT/xAAdEAACAgEFAAAAAAAAAAAAAAADEQECIgAEBRIT/9oACAEBAAE/ACiPymyuOh/DNNd5wl6//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQIA/9oACAECAQE/ALkKd//EABgRAQADAQAAAAAAAAAAAAAAAAEAAgMx/9oACAEDAQE/AMrWc6q9J//Z"});
;// CONCATENATED MODULE: ./img/Cards/shop.jpg
/* harmony default export */ const shop = ({"src":"/_next/static/media/shop.ebb8f73f.jpg","height":768,"width":1906,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAMACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApoP/xAAaEAEBAAIDAAAAAAAAAAAAAAACAQAEJDEy/9oACAEBAAE/ANWpoVNXkuer1HZn/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
;// CONCATENATED MODULE: ./img/Cards/Currency_converter.jpg
/* harmony default export */ const Currency_converter = ({"src":"/_next/static/media/Currency_converter.3c63a616.jpg","height":397,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsgP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
;// CONCATENATED MODULE: ./img/Cards/ManagementRestaurant.jpg
/* harmony default export */ const ManagementRestaurant = ({"src":"/_next/static/media/ManagementRestaurant.e46350f8.jpg","height":842,"width":1890,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqoP/xAAcEAABAwUAAAAAAAAAAAAAAAACAwQSAAEFIUL/2gAIAQEAAT8AxTdJ2zBVScplbRlwdf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});
;// CONCATENATED MODULE: ./img/Cards/Mern_shop/addProduct.jpg
/* harmony default export */ const addProduct = ({"src":"/_next/static/media/addProduct.265cea68.jpg","height":1048,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsgP/xAAZEAABBQAAAAAAAAAAAAAAAAAAAQISUpH/2gAIAQEAAT8Ai2qYf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});
;// CONCATENATED MODULE: ./img/Cards/Mern_shop/auth_admin.jpg
/* harmony default export */ const auth_admin = ({"src":"/_next/static/media/auth_admin.f8b2ace1.jpg","height":1048,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsYP/xAAZEAABBQAAAAAAAAAAAAAAAAABAAISMpH/2gAIAQEAAT8AgwCoxf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"});
;// CONCATENATED MODULE: ./img/Cards/Mern_shop/auth.jpg
/* harmony default export */ const auth = ({"src":"/_next/static/media/auth.03dca713.jpg","height":1048,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsQP/xAAZEAABBQAAAAAAAAAAAAAAAAAAAgMTU5H/2gAIAQEAAT8AiaqTh//EABcRAAMBAAAAAAAAAAAAAAAAAAABEVH/2gAIAQIBAT8Ar0//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
;// CONCATENATED MODULE: ./img/Cards/Mern_shop/hoved.jpg
/* harmony default export */ const hoved = ({"src":"/_next/static/media/hoved.32552d5f.jpg","height":1048,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsgP/xAAaEAACAgMAAAAAAAAAAAAAAAABEQADEyFR/9oACAEBAAE/AMNdZKZfdqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
;// CONCATENATED MODULE: ./img/Cards/Mern_shop/mobile_hoved.jpg
/* harmony default export */ const mobile_hoved = ({"src":"/_next/static/media/mobile_hoved.cdbad826.jpg","height":1048,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAArwP/xAAYEAACAwAAAAAAAAAAAAAAAAAAAjFywf/aAAgBAQABPwBZa2H/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
;// CONCATENATED MODULE: ./img/Cards/Mern_shop/product.jpg
/* harmony default export */ const product = ({"src":"/_next/static/media/product.6d059bfb.jpg","height":1048,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsYP/xAAZEAACAwEAAAAAAAAAAAAAAAADEQABEkH/2gAIAQEAAT8AsQ9PPFP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
;// CONCATENATED MODULE: ./img/Cards/React_Chat_Socket/login.jpg
/* harmony default export */ const login = ({"src":"/_next/static/media/login.92683c48.jpg","height":1048,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsoP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
;// CONCATENATED MODULE: ./img/Cards/React_Chat_Socket/chat.jpg
/* harmony default export */ const chat = ({"src":"/_next/static/media/chat.0a36a972.jpg","height":1048,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsoP/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oACAEBAAE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
;// CONCATENATED MODULE: ./store/CardData.ts















function CardData() {
    const { titleTask , titleProject , titleConverter , titleManagement , titleShop , altShop , altRestaurant , altConverter , altProject , altTask , descriptionTask , descriptionProject , descriptionConverter , descriptionRestaurant , descriptionShop , titleMern , descriptionMern , titleChat , altChat , descriptionChat ,  } = CardContent_CardText();
    const imagesMernShop = ()=>{
        const images = [];
        images.push(hoved, addProduct, auth_admin, auth, mobile_hoved, product);
        return images;
    };
    const imagesChat = ()=>{
        const images = [];
        images.push(login, chat);
        return images;
    };
    const contentCard = (0,external_react_.useCallback)(()=>{
        const data = [];
        function createContentCard(id, src, title, alt, description) {
            function Slide(id, src, title, alt, description) {
                this.id = id, this.src = src, this.title = title, this.alt = alt;
                this.description = description;
            }
            const slideData = new Slide(id, src, title, alt, description);
            data.push(slideData);
        }
        new createContentCard(1, shop, titleShop, altShop, descriptionShop);
        new createContentCard(2, ManagementRestaurant, titleManagement, altRestaurant, descriptionRestaurant);
        new createContentCard(3, Currency_converter, titleConverter, altConverter, descriptionConverter);
        new createContentCard(4, kursus_project_eng, titleProject, altProject, descriptionProject);
        new createContentCard(5, kursus_lessons_project, titleTask, altTask, descriptionTask);
        new createContentCard(6, imagesMernShop(), titleMern, altShop, descriptionMern);
        new createContentCard(7, imagesChat(), titleChat, altChat, descriptionChat);
        return data;
    }, [
        altChat,
        altConverter,
        altProject,
        altRestaurant,
        altShop,
        altTask,
        descriptionChat,
        descriptionConverter,
        descriptionMern,
        descriptionProject,
        descriptionRestaurant,
        descriptionShop,
        descriptionTask,
        titleChat,
        titleConverter,
        titleManagement,
        titleMern,
        titleProject,
        titleShop,
        titleTask, 
    ]);
    return contentCard;
}
/* harmony default export */ const store_CardData = (CardData);


/***/ })

};
;