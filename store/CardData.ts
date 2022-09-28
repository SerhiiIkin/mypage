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
    } = CardText();

    const imagesMernShop = () => {
        const images = [];

        images.push(hoved,addProduct, auth_admin, auth, mobile_hoved, product);

        return images;
    };

    const imagesChat = () => {
        const images = [];

        images.push(login, chat);

        return images;
    };

    const contentCard = useCallback(() => {
        const data: ICardContent[] = [];

        function createContentCard(id, src, title, alt, description) {
            function Slide(id, src, title, alt, description) {
                (this.id = id),
                    (this.src = src),
                    (this.title = title),
                    (this.alt = alt);
                this.description = description;
            }

            const slideData: ICardContent = new Slide(
                id,
                src,
                title,
                alt,
                description
            );

            data.push(slideData);
        }

        new createContentCard(1, shop, titleShop, altShop, descriptionShop);
        new createContentCard(
            2,
            restaurant,
            titleManagement,
            altRestaurant,
            descriptionRestaurant
        );
        new createContentCard(
            3,
            converter,
            titleConverter,
            altConverter,
            descriptionConverter
        );
        new createContentCard(
            4,
            kursusHtmlProject,
            titleProject,
            altProject,
            descriptionProject
        );
        new createContentCard(
            5,
            kursusLessons,
            titleTask,
            altTask,
            descriptionTask
        );
        new createContentCard(
            6,
            imagesMernShop(),
            titleMern,
            altShop,
            descriptionMern
        );
        new createContentCard(
            7,
            imagesChat(),
            titleChat,
            altChat,
            descriptionChat
        );

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

export default CardData;
