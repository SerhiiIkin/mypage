import styles from "./Hello.module.scss";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import profilePic from "../../img/Section_Hello/profilePic.jpg";
import HelloText from "./HelloText";
import Loader from "../../components/Loader/Loader";

function Hello() {
    const ProfilePic = dynamic(() => import("../../components/Image/Image"), {
        suspense: true,
    });
    const { hello, greeting, textAbout, btnMessage } = HelloText();

    return (
        <section className="bg-gray-800">
            <div className={styles.wrapper}>
                <article className="pr-2 pb-4">
                    <h1 className="text-3xl lg:text-5xl pb-2">{hello}</h1>
                    <h2 className="text-3xl lg:text-5xl pb-2">{greeting}</h2>
                    <p className="mb-5 text-xl lg:text-2xl">{textAbout}</p>
                    <a
                        href="https://t.me/IkinSerhii"
                        target="_blank"
                        className={styles.link}
                        rel="noreferrer">
                        {btnMessage}
                    </a>
                </article>
                <article className="mx-auto max-h-[50vh] sm:max-h-[80vh] flex">
                    <Suspense fallback={<Loader />}>
                        <ProfilePic
                            src={profilePic}
                            alt="Author of picture"
                            styles="object-contain"
                        />
                    </Suspense>
                </article>
            </div>
        </section>
    );
}
export default Hello;
