import classNames from "classnames";
import { useState } from "react";
import Image from "../Image/Image";

import styles from "./ImageWithZoom.module.scss";

function ImageWithZoom({ src, alt }) {
    const [active, setActive] = useState(false);

    function onImgClick() {
        setActive((prev) => !prev);
        document.body.style.overflow = active ? "" : "hidden";
    }

    return (
        <div
            onClick={onImgClick}
            className={classNames(active ? styles.imgContainer : "")}>
            <div
                className={classNames(
                    !active ? "cursor-zoom-in" : "cursor-zoom-out",
                    active ? styles.imgWrapper : ""
                )}>
                <Image src={src} alt={alt} />
            </div>
        </div>
    );
}

export default ImageWithZoom;
