import classNames from "classnames";
import styles from "./BurgerMenu.module.scss";

function BurgerMenu({ active, onBurgerMenuClick }) {
    return (
        <button
            onClick={onBurgerMenuClick}
            className={classNames(styles.btn, active ? styles.active : "")}>
            <span></span>
        </button>
    );
}
export default BurgerMenu;
