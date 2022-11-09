import classNames from "classnames";

import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.bg}>
            <div className={styles.wrapper}>
                <h2 className={styles.h2}>Contacts</h2>
                <div className={styles.linksWrapper}>
                    <a
                        className={classNames(styles.ico, styles.mail)}
                        target="_blank"
                        href="mailto:messileonl@gmail.com"
                        rel="noreferrer">
                        messileonl@gmail.com
                    </a>

                    <a
                        className={classNames(styles.ico, styles.facebook)}
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100007424714728"
                        rel="noreferrer">
                        Facebook
                    </a>

                    <a
                        className={classNames(styles.ico, styles.phone)}
                        target="_blank"
                        href="tel:+4550246519"
                        rel="noreferrer">
                        +4550246519
                    </a>

                    <a
                        className={classNames(styles.ico, styles.linkedin)}
                        target="_blank"
                        href="https://www.linkedin.com/in/serhii-ikin-608054227/"
                        rel="noreferrer">
                        Linkedin
                    </a>

                    <a
                        className={classNames(styles.ico, styles.telegram)}
                        target="_blank"
                        href="https://t.me/IkinSerhii"
                        rel="noreferrer">
                        Telegram
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
