import Image from "next/image";

import styles from "./Skill.module.scss";

function Skill({ text, src }) {
    return (
        <div className={styles.wrapper}>
            <p className="pb-2">{text}</p>
            <Image src={src} quality="50" alt={"Icon of skill"} />
        </div>
    );
}
export default Skill;
