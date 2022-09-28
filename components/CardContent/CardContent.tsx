import Image from "../Image/Image";
import A from "../A/A";
import Multilanguage from "../Multilanguage";
import Arrow from "../Arrow/Arrow";
import { ICardContent } from "../../modules/modules";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

function CardContent({ id, src, alt, title, styles }: ICardContent) {
    const linkText = Multilanguage("Більше", "More", "Mere");
    const Pic = dynamic(() => import("../../components/Image/Image"), {
        suspense: true,
    });

    if (Array.isArray(src)) src = src[0];

    return (
        <div className={styles.content}>
            <div className={styles.imgContainer}>
                <Suspense fallback={<Loader />}>
                    <Pic src={src} quality="50" alt={alt} />
                </Suspense>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.h2}>{title}</h2>
                <div className={styles.linkContainer}>
                    <A
                        href={"/portfolio/[id]"}
                        as={`/portfolio/${id}`}
                        aStyles={styles.link}
                        text={linkText}>
                        <Arrow />
                    </A>
                </div>
            </div>
        </div>
    );
}
export default CardContent;
