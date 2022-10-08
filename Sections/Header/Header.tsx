import React, { MouseEvent, useCallback, useState } from "react";
import { dk, eng, ukr } from "../../store/Slices/languageSlice";
import HeaderText from "./HeaderText";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import A from "../../components/A/A";
import classNames from "classnames";
import { useRouter } from "next/router";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

import styles from "./Header.module.scss";

interface ILinkNavBar {
    text: string;
    href: string;
}

function Header() {
    const dispatch = useAppDispatch();
    const text = HeaderText();
    const language = useAppSelector((state) => state.language.language);
    const { route } = useRouter();
    const [active, setActive] = useState(false);

    function onBurgerMenuClick() {
        setActive((prev) => !prev);
    }

    function onLanguageBtnClick(event: MouseEvent<HTMLButtonElement>) {
        const lang = event.currentTarget.dataset.lang;
        switch (lang) {
            case "UKR":
                dispatch(ukr(lang));
                break;
            case "ENG":
                dispatch(eng(lang));
                break;
            case "DK":
                dispatch(dk(lang));
                break;
        }
    }

    const navBarLinks = useCallback(() => {
        const home: ILinkNavBar = {
            text: text?.home,
            href: "/",
        };
        const about: ILinkNavBar = {
            text: text?.about,
            href: "/about",
        };
        const portfolio: ILinkNavBar = {
            text: text?.portfolio,
            href: "/portfolio",
        };

        return [home, about, portfolio];
    }, [text?.about, text?.home, text?.portfolio]);

    const btnsLanguage = useCallback(() => {
        const ukr = "UKR";
        const eng = "ENG";
        const dk = "DK";
        return [ukr, eng, dk];
    }, []);

    return (
        <header className={styles.header}>
            <h1 className={styles.authorName}>{text.fullName}</h1>
            <span className=" hidden sm:inline"></span>
            <nav
                onClick={() => setActive(false)}
                className={classNames(active ? styles.showMenu : styles.nav)}>
                {navBarLinks().map((link) => {
                    if (route === link.href)
                        return (
                            <span key={link.href} className={styles.span}>
                                {link.text}
                            </span>
                        );
                    return (
                        <A
                            key={link.href}
                            pStyles={styles.pLink}
                            href={link.href}
                            text={link.text}></A>
                    );
                })}
            </nav>
            <div>
                {btnsLanguage().map((btn) => (
                    <button
                        key={btn}
                        onClick={onLanguageBtnClick}
                        data-lang={btn}
                        disabled={language === btn}
                        className={classNames(
                            styles.btn,
                            language === btn ? styles.active : ""
                        )}>
                        {btn}
                    </button>
                ))}
            </div>
            <BurgerMenu active={active} onBurgerMenuClick={onBurgerMenuClick} />
        </header>
    );
}
export default Header;
