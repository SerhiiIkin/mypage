import React, { MouseEvent, useState } from "react";
import { dk, eng, ukr } from "../../store/Slices/languageSlice";
import HeaderText from "./HeaderText";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import A from "../../components/A/A";
import classNames from "classnames";
import { useRouter } from "next/router";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

import styles from "./Header.module.scss";

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

    return (
        <header className={styles.header}>
            <h1 className={styles.authorName}>{text.fullName}</h1>
            <span className=" hidden sm:inline"></span>
            <nav
                onClick={() => setActive(false)}
                className={classNames(active ? styles.showMenu : styles.nav)}>
                {route === "/" ? (
                    <span className={styles.span}>{text?.home}</span>
                ) : (
                    <A pStyles={styles.pLink} href={"/"} text={text?.home}></A>
                )}
                {route === "/about" ? (
                    <span className={styles.span}>{text?.about}</span>
                ) : (
                    <A
                        pStyles={styles.pLink}
                        href={"/about"}
                        text={text?.about}></A>
                )}
                {route === "/portfolio" ? (
                    <span className={styles.span}>{text?.portfolio}</span>
                ) : (
                    <A
                        pStyles={styles.pLink}
                        href={"/portfolio"}
                        text={text?.portfolio}></A>
                )}
            </nav>
            <div>
                <button
                    onClick={onLanguageBtnClick}
                    data-lang="UKR"
                    disabled={language === "UKR"}
                    className={classNames(
                        `${styles.btn} ${
                            language === "UKR" ? styles.active : ""
                        } `
                    )}>
                    UKR
                </button>
                <button
                    onClick={onLanguageBtnClick}
                    data-lang="ENG"
                    disabled={language === "ENG"}
                    className={classNames(
                        `${styles.btn} ${
                            language === "ENG" ? styles.active : ""
                        } `
                    )}>
                    ENG
                </button>
                <button
                    onClick={onLanguageBtnClick}
                    data-lang="DK"
                    disabled={language === "DK"}
                    className={classNames(
                        `${styles.btn} ${
                            language === "DK" ? styles.active : ""
                        } `
                    )}>
                    DK
                </button>
            </div>
            <BurgerMenu active={active} onBurgerMenuClick={onBurgerMenuClick} />
        </header>
    );
}
export default Header;
