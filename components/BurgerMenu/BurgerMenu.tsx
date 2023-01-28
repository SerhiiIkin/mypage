import classNames from "classnames";
import styles from "./BurgerMenu.module.scss";

function BurgerMenu({ active, onMenuClick }) {
    return (
        <button
            onClick={onMenuClick}
            className={classNames(styles.btn, active ? styles.active : "")}>
            <span></span>
        </button>
    );
}
export default BurgerMenu;
