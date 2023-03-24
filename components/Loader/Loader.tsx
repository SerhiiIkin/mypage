import classNames from "classnames";
import styles from "./Loader.module.scss";

function Loader({className}:{className?:string}) {
    return (
        <div className={classNames(styles.lds_spinner, className)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
export default Loader;
