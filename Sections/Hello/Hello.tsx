import styles from "./Hello.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import profilePic from "../../img/Section_Hello/profilePic.jpg";
import HelloText from "./HelloText";
import Loader from "../../components/Loader/Loader";
import Form from "../../components/Form/Form";

function Hello() {
    const ProfilePic = dynamic(() => import("../../components/Image/Image"), {
        suspense: true,
    });
    const {  textAbout } = HelloText();

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <article className={styles.textContainer}>
                    <p className={styles.text}>{textAbout}</p>
                    <Form/>
                </article>
                <article className={styles.imgContainer}>
                    <Suspense fallback={<Loader />}>
                        <ProfilePic
                            src={profilePic}
                            alt="Author of picture"
                            styles={styles.img}
                        />
                    </Suspense>
                </article>
            </div>
        </section>
    );
}
export default Hello;
