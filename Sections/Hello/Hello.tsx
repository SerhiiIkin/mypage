import profilePic from "../../img/Section_Hello/profilePic.jpg";
import HelloText from "./HelloText";
import Form from "../../components/Form/Form";
import Image from "next/image";

import styles from "./Hello.module.scss";

function Hello() {
    const { textAbout } = HelloText();
    

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <article className={styles.textContainer}>
                    <p className={styles.text}>{textAbout}</p>
                    <Form />
                </article>
                <article className={styles.imgContainer}>
                    <Image
                        src={profilePic}
                        alt="Author of picture"
                        className={styles.img}
                        priority
                    />
                </article>
            </div>
        </section>
    );
}
export default Hello;
