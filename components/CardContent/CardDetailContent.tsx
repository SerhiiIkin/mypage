import Image from "../Image/Image";

import { ICardContent } from "../../modules/modules";
import CardText from "./CardText";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

function CardDetailContent({
    src,
    alt,
    title,
    styles,
    description,
    link,
}: ICardContent) {
    const { linkText } = CardText();
    const Pic = dynamic(() => import("../../components/Image/Image"), {
        suspense: true,
    });

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.imgWrapper}>
                {!Array.isArray(src) && (
                    <Image src={src} quality="90" alt={alt} />
                )}
                {Array.isArray(src) &&
                    src.map((img, index) => (
                        <>
                            <Suspense fallback={<Loader />}>
                                <Pic
                                    key={index}
                                    src={img}
                                    quality="90"
                                    alt={alt}
                                />
                            </Suspense>
                        </>
                    ))}
            </div>

            <p>{description}</p>
            <a
                className={styles.link}
                target="_blank"
                href={link}
                rel="noreferrer">
                {linkText}
            </a>
        </div>
    );
}
export default CardDetailContent;
