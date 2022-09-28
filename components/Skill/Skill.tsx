import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import styles from "./Skill.module.scss";

function Skill({ text, src }) {
    const Pic = dynamic(() => import("../Image/Image"), {
        suspense: true,
    });
    return (
        <div className={styles.wrapper}>
            <p className="pb-2">{text}</p>
            <Suspense fallback={<Loader />}>
                <Pic src={src} styles="" quality="50" alt={"Icon of skill"} />
            </Suspense>
        </div>
    );
}
export default Skill;
