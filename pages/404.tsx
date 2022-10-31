import LayoutIndex from "../components/LayoutIndex/LayoutIndex";
import Multilanguage from "../components/Multilanguage";
import HeaderText from "../Sections/Header/HeaderText";
import A from "../components/A/A";

import styles from "../styles/404.module.scss";

function NotFounded() {
    const { home } = HeaderText();
    const cantFind = Multilanguage(
        "Ми не можемо знайти цю сторінку",
        "We cant find that page",
        "Vi kan ikke finde den side"
    );

    return (
        <LayoutIndex>
            <div className={styles.wrapper}>
                <h1>404</h1>
                <div className={styles.cloak__wrapper}>
                    <div className={styles.cloak__container}>
                        <div className={styles.cloak}></div>
                    </div>
                </div>
                <div className={styles.info}>
                    <h2>{cantFind}</h2>
                    <A href="/" text={home} pStyles="block sm:hidden" />
                </div>
            </div>
        </LayoutIndex>
    );
}
export default NotFounded;
