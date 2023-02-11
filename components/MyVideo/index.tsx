import Multilanguage from "../Multilanguage";
import styles from "./index.module.scss";

function MyVideo() {
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
            <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/yv31AS3ihlU"
                title="YouTube video player"
                allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    );
}
export default MyVideo;
