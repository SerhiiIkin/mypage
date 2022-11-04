import classNames from "classnames";
import { useState, useEffect } from "react";
import styles from "./Notification.module.scss";

interface NotificationProps {
    textNotification: string;
    isOpen: boolean;
}

function Notification({ textNotification, isOpen }: NotificationProps) {
    const [isOpenWindon, setIsOpenWindon] = useState(false);

    useEffect(() => {
        setIsOpenWindon(isOpen);

        setTimeout(() => {
            setIsOpenWindon(false);
        }, 5000);
    }, [isOpen]);

    function closeNotificationWindow() {
        setIsOpenWindon(false);
    }

    return (
        <div
            className={classNames(
                styles.body,
                isOpenWindon && styles.isOpen
            )}>
            <button
                onClick={closeNotificationWindow}
                type="button"
                className={styles.btn}>
                X
            </button>
            <div>{textNotification}</div>
        </div>
    );
}

export default Notification;
