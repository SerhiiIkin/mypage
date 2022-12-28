import dynamic from "next/dynamic";
import { Suspense, useMemo } from "react";
import { IImage } from "../../modules/modules";
import Loader from "../Loader/Loader";
import Img from "next/image";

function Image({ quality, alt, src, styles, onImgClick }: IImage) {
    return (
        <Suspense fallback={<Loader />}>
            <Img
                onClick={onImgClick}
                src={src}
                className={styles}
                quality={quality}
                alt={alt}
            />
        </Suspense>
    );
}
export default Image;
