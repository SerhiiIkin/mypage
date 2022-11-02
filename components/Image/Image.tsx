import dynamic from "next/dynamic";
import { Suspense } from "react";
import { IImage } from "../../modules/modules";
import Loader from "../Loader/Loader";

function Image({ quality, alt, src, styles, onImgClick }: IImage) {
    const MyImg = dynamic(() => import("next/image"), {
        suspense: true,
    });
    return (
        <Suspense fallback={<Loader />}>
            <MyImg
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
