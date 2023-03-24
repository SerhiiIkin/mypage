import { StaticImageData } from "next/image";
import { Dispatch, ReactElement, SetStateAction } from "react";

export interface LanguageState {
    language: string;
}

export interface TextState {
    ukr: string;
    eng: string;
    dk: string;
}

export interface ICardContent {
    id?: number;
    src?: StaticImageData | StaticImageData[]
    title?: string;
    description?: string;
    alt?: string;
    styles?: any;
    link?: string;
}

export interface IBankData {
    cc: string,
    exchangedate: string,
    r030: number,
    rate: number,
    txt:string
}

export interface ILink {
    href: string;
    text: string;
    pStyles?: string;
    aStyles?: string;
    children?: JSX.Element;
    as?:string
}

export interface IImage {
    quality?: string;
    alt: string;
    src: StaticImageData;
    styles?: string;
    onImgClick?: () => void;
    priority?: boolean
}

export interface ISlider {
    pagination?: boolean;
    buttons?: boolean;
    auto?: number;
    slideData: ICardContent[];
    currentIndex: number;
    children: ReactElement;
    setIndex(data: number): void;
    itemsPerPage :number
}

export interface ISlideData {
    currentIndex: number;
    slideData: ICardContent[];
    children: ReactElement;
    slideId: number;
}

export interface IFormIsHuman {
    isMatch: (value: boolean) => void;
    openCheckBox: boolean;
    setOpenCheckBox: Dispatch<SetStateAction<boolean>>;
}