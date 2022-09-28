import { useCallback } from "react";
import { ICardContent } from "../modules/modules";
import CardText from "../components/CardContent/CardText";

import kursusHtmlProject from "../img/Cards/kursus-project-eng.jpg";
import kursusLessons from "../img/Cards/kursus-lessons-project.jpg";
import shop from "../img/Cards/shop.jpg";
import converter from "../img/Cards/Currency_converter.jpg";
import restaurant from "../img/Cards/ManagementRestaurant.jpg";

import addProduct from "../img/Cards/Mern_shop/addProduct.jpg";
import auth_admin from "../img/Cards/Mern_shop/auth_admin.jpg";
import auth from "../img/Cards/Mern_shop/auth.jpg";
import hoved from "../img/Cards/Mern_shop/hoved.jpg";
import mobile_hoved from "../img/Cards/Mern_shop/mobile_hoved.jpg";
import product from "../img/Cards/Mern_shop/product.jpg";

import login from "../img/Cards/React_Chat_Socket/login.jpg";
import chat from "../img/Cards/React_Chat_Socket/chat.jpg";

import homeGammelSide from "../img/Cards/mitGammelSide/home.jpg";
import aboutGammelSide from "../img/Cards/mitGammelSide/about.jpg";
import portfolioGammelSide from "../img/Cards/mitGammelSide/portfolio.jpg";
import contactsGammelSide from "../img/Cards/mitGammelSide/contacts.jpg";

import detteWebsted from "../img/Cards/detteWebsted.jpg"

function CardData() {
    const {
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
    } = CardText();

    const imagesGammelSide = useCallback(
        () => [
            homeGammelSide,
            aboutGammelSide,
            portfolioGammelSide,
            contactsGammelSide,
        ],
        []
    );

    const imagesMernShop = useCallback(
        () => [hoved, addProduct, auth_admin, auth, mobile_hoved, product],
        []
    );

    const imagesChat = useCallback(() => [login, chat], []);

    const contentCard = useCallback(() => {
        const data: ICardContent[] = [];

        function createContentCard(id, src, title, alt, description, link) {
            function Slide(id, src, title, alt, description, link) {
                this.id = id,
                this.src = src,
                this.title = title,
                this.alt = alt;
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

        new createContentCard(1, shop, titleShop, altShop, descriptionShop, "https://serhiiikin.github.io/shop/");
        new createContentCard(
            2,
            restaurant,
            titleManagement,
            altRestaurant,
            descriptionRestaurant,
            "https://serhiiikin.github.io/ManagementRestaurant/"
        );
        new createContentCard(
            3,
            converter,
            titleConverter,
            altConverter,
            descriptionConverter,
            "https://serhiiikin.github.io/Currency_converter/"
        );
        new createContentCard(
            4,
            kursusHtmlProject,
            titleProject,
            altProject,
            descriptionProject,
            "https://serhiiikin.github.io/ProjectKursus/app/"
        );
        new createContentCard(
            5,
            kursusLessons,
            titleTask,
            altTask,
            descriptionTask,
            "https://serhiiikin.github.io/Serhii-Ikin-lesson-13/"
        );
        new createContentCard(
            6,
            imagesMernShop(),
            titleMern,
            altShop,
            descriptionMern,
            "https://github.com/SerhiiIkin/MERN_shop"
        );
        new createContentCard(
            7,
            imagesChat(),
            titleChat,
            altChat,
            descriptionChat,
            "https://github.com/SerhiiIkin/Chat_SocketServer"
        );
        new createContentCard(
            8,
            imagesGammelSide(),
            titleGammelSide,
            altGammelSide,
            descriptionGammelSide,
            "https://serhiiikin.github.io/Portfolio/SerhiiIkinPortfolio/"
        );
        new createContentCard(
            9,
            detteWebsted,
            titledetteWebsted,
            altdetteWebsted,
            descriptiondetteWebsted,
            "https://mypage-portfolio.vercel.app/"
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
        descriptionChat,
        descriptionConverter,
        descriptionGammelSide,
        descriptionMern,
        descriptionProject,
        descriptionRestaurant,
        descriptionShop,
        descriptionTask,
        imagesChat,
        imagesGammelSide,
        imagesMernShop,
        titleChat,
        titleConverter,
        titleGammelSide,
        titleManagement,
        titleMern,
        titleProject,
        titleShop,
        titleTask,
    ]);

    return contentCard;
}

export default CardData;
