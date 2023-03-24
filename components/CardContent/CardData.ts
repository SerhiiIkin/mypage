import { lazy, useCallback, useMemo } from "react";
import { ICardContent } from "../../modules/modules";
import CardText from "./CardText";

import kursusHtmlProject from "../../img/Cards/kursus-project-eng.jpg";
import kursusLessons from "../../img/Cards/kursus-lessons-project.jpg";
import shop from "../../img/Cards/shop.jpg";
import converter from "../../img/Cards/Currency_converter.jpg";
import restaurant from "../../img/Cards/ManagementRestaurant.jpg";

import detteWebsted from "../../img/Cards/detteWebsted.jpg";

function CardData() {
    const {
        titleTask,
        titleProject,
        titleConverter,
        titleManagement,
        altRestaurant,
        altConverter,
        altProject,
        altTask,
        descriptionTask,
        descriptionProject,
        descriptionConverter,
        descriptionRestaurant,
        altShop,
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
    } = CardText();

    const imagesGammelSide = useMemo(() => {
        const images = [];
        images.push(addImportImg("mitGammelSide/", "home.jpg"));
        images.push(addImportImg("mitGammelSide/", "about.jpg"));
        images.push(addImportImg("mitGammelSide/", "portfolio.jpg"));
        images.push(addImportImg("mitGammelSide/", "contacts.jpg"));
        return images;
    }, []);

    const imagesMernShop = useMemo(() => {
        const images = [];
        images.push(addImportImg("Mern_shop/", "addProduct.jpg"));
        images.push(addImportImg("Mern_shop/", "auth_admin.jpg"));
        images.push(addImportImg("Mern_shop/", "auth.jpg"));
        images.push(addImportImg("Mern_shop/", "hoved.jpg"));
        images.push(addImportImg("Mern_shop/", "mobile_hoved.jpg"));
        images.push(addImportImg("Mern_shop/", "product.jpg"));
        return images;
    }, []);

    const imagesChat = useMemo(() => {
        const images = [];
        images.push(addImportImg("React_Chat_Socket/", "login.jpg"));
        images.push(addImportImg("React_Chat_Socket/", "chat.jpg"));
        return images;
    }, []);

    const imagesWorldBaristaCup = useMemo(() => {
        const images = [];
        images.push(addImportImg("world-barista-cup/", "hoved.jpg"));
        images.push(addImportImg("world-barista-cup/", "paginnation.jpg"));
        images.push(addImportImg("world-barista-cup/", "search-mobil.jpg"));
        return images;
    }, []);

    const imagesTodoListAngular = useMemo(() => {
        const images = [];
        images.push(addImportImg("todo-list-angular/", "main.jpg"));
        images.push(addImportImg("todo-list-angular/", "addTodo.jpg"));
        images.push(addImportImg("todo-list-angular/", "editTodo.jpg"));
        images.push(addImportImg("todo-list-angular/", "database.jpg"));
        images.push(addImportImg("todo-list-angular/", "server.jpg"));
        return images;
    }, []);
    const imagesTodoListVue = useMemo(() => {
        const images = [];
        images.push(addImportImg("todo-list-vue/", "main.jpg"));
        images.push(addImportImg("todo-list-vue/", "addTodo.jpg"));
        images.push(addImportImg("todo-list-vue/", "editTodo.jpg"));
        return images;
    }, []);
    const imagesTodoListBlazor = useMemo(() => {
        const images = [];
        images.push(addImportImg("todo-list-blazor/", "main.jpg"));
        images.push(addImportImg("todo-list-blazor/", "addTodo.jpg"));
        images.push(addImportImg("todo-list-blazor/", "editTodo.jpg"));
        return images;
    }, []);

    const imagesPosts = useMemo(() => {
        const images = [];
        images.push(addImportImg("Posts/", "main.jpg"));
        images.push(addImportImg("Posts/", "login.jpg"));
        images.push(addImportImg("Posts/", "registration.jpg"));
        images.push(addImportImg("Posts/", "createPost.jpg"));
        images.push(addImportImg("Posts/", "singlePost.jpg"));
        images.push(addImportImg("Posts/", "singlePost__comments.jpg"));
        images.push(addImportImg("Posts/", "server.jpg"));
        images.push(addImportImg("Posts/", "server_2.jpg"));
        images.push(addImportImg("Posts/", "database_users.jpg"));
        images.push(addImportImg("Posts/", "database_posts.jpg"));
        images.push(addImportImg("Posts/", "database_comments.jpg"));
        images.push(addImportImg("Posts/", "database_ChildrenComments.jpg"));
        return images;
    }, []);

    function addImportImg(folder: string, imgName: string) {
        return require(`../../img/Cards/${folder}${imgName}`);
    }

    const contentCard = useCallback(() => {
        const data: ICardContent[] = [];

        function createContentCard(id, src, title, alt, description, link) {
            function Slide(id, src, title, alt, description, link) {
                (this.id = id),
                    (this.src = src),
                    (this.title = title),
                    (this.alt = alt);
                this.description = description;
                this.link = link;
            }

            const slideData: ICardContent = new Slide(
                id,
                src,
                title,
                alt,
                description,
                link
            );

            data.push(slideData);
        }

        new createContentCard(
            1,
            kursusLessons,
            titleTask,
            altTask,
            descriptionTask,
            "https://serhiiikin.github.io/Serhii-Ikin-lesson-13/"
        );

        new createContentCard(
            2,
            kursusHtmlProject,
            titleProject,
            altProject,
            descriptionProject,
            "https://serhiiikin.github.io/ProjectKursus/app/"
        );

        new createContentCard(
            3,
            imagesGammelSide,
            titleGammelSide,
            altGammelSide,
            descriptionGammelSide,
            "https://serhiiikin.github.io/Portfolio/SerhiiIkinPortfolio/"
        );

        new createContentCard(
            4,
            converter,
            titleConverter,
            altConverter,
            descriptionConverter,
            "https://serhiiikin.github.io/Currency_converter/"
        );

        new createContentCard(
            5,
            restaurant,
            titleManagement,
            altRestaurant,
            descriptionRestaurant,
            "https://serhiiikin.github.io/ManagementRestaurant/"
        );

        new createContentCard(
            6,
            imagesChat,
            titleChat,
            altChat,
            descriptionChat,
            "https://github.com/SerhiiIkin/Chat_SocketServer"
        );

        new createContentCard(
            7,
            imagesMernShop,
            titleMern,
            altShop,
            descriptionMern,
            "https://mern-shop.onrender.com"
        );

        new createContentCard(
            8,
            detteWebsted,
            titledetteWebsted,
            altdetteWebsted,
            descriptiondetteWebsted,
            "https://mypage-portfolio.vercel.app/"
        );

        new createContentCard(
            9,
            imagesWorldBaristaCup,
            titleWorldBaristaCup,
            altWorldBaristaCup,
            descriptionWorldBaristaCup,
            "https://serhiiikin.github.io/world-barista-cup/src/"
        );

        new createContentCard(
            10,
            imagesTodoListAngular,
            titleTodoListAngular,
            altodoListAngular,
            descriptionTodoListAngular,
            "https://github.com/SerhiiIkin/angular-todo-list"
        );

        new createContentCard(
            11,
            imagesTodoListVue,
            titleTodoListVue,
            altodoListVue,
            descriptionTodoListVue,
            "https://github.com/SerhiiIkin/vue-todolist"
        );
        new createContentCard(
            12,
            imagesTodoListBlazor,
            titleTodoListBlazor,
            altodoListBlazor,
            descriptionTodoListBlazor,
            "https://github.com/SerhiiIkin/blazor-todolist"
        );
        new createContentCard(
            13,
            imagesPosts,
            titlePosts,
            altPosts,
            descriptionPosts,
            "https://github.com/SerhiiIkin/Posts"
        );

        return data;
    }, [
        altChat,
        altConverter,
        altGammelSide,
        altProject,
        altRestaurant,
        altShop,
        altTask,
        altWorldBaristaCup,
        altdetteWebsted,
        altodoListAngular,
        altodoListVue,
        descriptionChat,
        descriptionConverter,
        descriptionGammelSide,
        descriptionMern,
        descriptionProject,
        descriptionRestaurant,
        descriptionTask,
        descriptionTodoListAngular,
        descriptionTodoListVue,
        descriptionWorldBaristaCup,
        descriptiondetteWebsted,
        imagesChat,
        imagesGammelSide,
        imagesMernShop,
        imagesTodoListAngular,
        imagesTodoListVue,
        imagesWorldBaristaCup,
        titleChat,
        titleConverter,
        titleGammelSide,
        titleManagement,
        titleMern,
        titleProject,
        titleTask,
        titleTodoListAngular,
        titleTodoListVue,
        titleWorldBaristaCup,
        titledetteWebsted,
        imagesPosts,
        titlePosts,
        altPosts,
        descriptionPosts,
        altodoListBlazor,
        descriptionTodoListBlazor,
        imagesTodoListBlazor,
        titleTodoListBlazor,
    ]);

    return contentCard;
}

export default CardData;
