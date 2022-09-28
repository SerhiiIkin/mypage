import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loader from "../Loader/Loader";
import Multilanguage from "../Multilanguage";
import styles from "./index.module.scss";

function MyVideo() {
    const MyVideo = dynamic(() => import("./Video"), {
        suspense: true,
    });
    const title = Multilanguage(
        "Відео про мене",
        "Video about me",
        "Video om mig"
    );
    const description = Multilanguage(
        "Я зняв відео про мене, щоб розповісти коротко та швидко, хто є я.",
        "I made a video about me, where I tell briefly and quickly, who I am.",
        "Jeg lavede en video om mig, hvor jeg fortæller kort og hurtigt, hvem jeg er."
    );

    return (
        <div className={styles.videoContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Suspense fallback={<Loader />}>
                <MyVideo styles={styles.video} />
            </Suspense>
        </div>
    );
}
export default MyVideo;
