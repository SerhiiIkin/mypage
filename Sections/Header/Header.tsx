import React, {
    MouseEvent,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";
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
    const { language } = useAppSelector((state) => state.language);
    const { route } = useRouter();
    const [active, setActive] = useState(false);
    const [tokenLocal, setTokenLocal] = useState("");

    useEffect(() => {
        const browserLanguage = navigator.language;

        switch (browserLanguage) {
            case "da":
                dispatch(dk("DK"));
                break;
            case "da-DK":
                dispatch(dk("DK"));
                break;
            case "en-US":
                dispatch(eng("ENG"));
                break;
            case "uk-UA":
                dispatch(ukr("UKR"));
                break;

            default:
                dispatch(eng("ENG"));
                break;
        }
        const localToken = localStorage.getItem("token")?.length
            ? localStorage.getItem("token").includes("expiry")
                ? JSON.parse(localStorage.getItem("token"))
                : localStorage.getItem("token")
            : "";
        if (localToken && !localToken.expiry) {
            setTokenLocal(localToken);
        }
    }, []);

    function onMenuClick() {
        if (window.innerWidth < 800) {
            setActive((prev) => !prev);
        }
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

    const navBarLinks = useMemo(() => {
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
        let dashboard: ILinkNavBar;

        if (tokenLocal) {
            dashboard = {
                text: "Dashboard",
                href: "/dashboard",
            };
            return [home, about, portfolio, dashboard];
        }

        return [home, about, portfolio];
    }, [text?.about, text?.home, text?.portfolio, tokenLocal]);

    const btnsLanguage = useMemo(() => {
        const ukr = "UKR";
        const eng = "ENG";
        const dk = "DK";
        return [ukr, eng, dk];
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.containerName}>
                <h1 data-text={text.fullName} className={styles.authorName}>
                    {text.fullName}
                </h1>
            </div>
            <nav
                onClick={onMenuClick}
                className={classNames(active ? styles.showMenu : styles.nav)}
            >
                {navBarLinks.map((link) => {
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
                            text={link.text}
                        ></A>
                    );
                })}
            </nav>

            <div className={styles.btns}>
                {btnsLanguage.map((btn) => (
                    <button
                        type="button"
                        key={btn}
                        onClick={onLanguageBtnClick}
                        data-lang={btn}
                        disabled={language === btn}
                        className={classNames(
                            styles.btn,
                            language === btn ? styles.active : ""
                        )}
                    >
                        {btn}
                    </button>
                ))}
            </div>

            <BurgerMenu active={active} onMenuClick={onMenuClick} />
        </header>
    );
}
export default Header;
