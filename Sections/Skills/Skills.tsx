import Skill from "../../components/Skill/Skill";
import SkillsData from "./SkillsData";
import styles from "./Skills.module.scss";

function Skills() {
    const skills = SkillsData();

    return (
        <section className={styles.skillsContainer}>
            {skills
                .reverse()
                .map((skill) => (
                    <Skill key={skill.text} src={skill.src} text={skill.text} />
                ))}
        </section>
    );
}
export default Skills;
