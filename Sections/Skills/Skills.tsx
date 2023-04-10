import Skill from "../../components/Skill/Skill";
import SkillsData from "./SkillsData";

function Skills() {
    const skills = SkillsData();

    return (
        <section className="container py-4 px-2 gap-x-2 gap-y-6 mx-auto  grid grid-cols-3  ss:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 ">
            {skills
                .reverse()
                .map((skill) => (
                    <Skill key={skill.text} src={skill.src} text={skill.text} />
                ))}
        </section>
    );
}
export default Skills;
