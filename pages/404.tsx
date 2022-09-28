import Link from "next/link";
import LayoutIndex from "../components/LayoutIndex/LayoutIndex";
import styles from "../styles/404.module.scss";

function NotFounded() {
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
                    <h2>We cant find that page</h2>
                  
                    <Link href="/" rel="noreferrer noopener">
                        Home
                    </Link>
                </div>
            </div>
        </LayoutIndex>
    );
}
export default NotFounded;
