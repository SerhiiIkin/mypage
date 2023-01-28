import { Suspense } from "react";
import { IImage } from "../../modules/modules";
import Loader from "../Loader/Loader";
import dynamic from "next/dynamic";

function Image({ quality, alt, src, styles, onImgClick, priority }: IImage) {
    const Pic = dynamic(() => import("next/image"), {
        suspense: true,
    });

    return (
        <Suspense fallback={<Loader />}>
            <Pic
                onClick={onImgClick}
                src={src}
                className={styles}
                quality={quality}
                alt={alt}
                priority={priority}
            />
        </Suspense>
    );
}
export default Image;
