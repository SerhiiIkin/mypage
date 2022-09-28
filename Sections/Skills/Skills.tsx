import Skill from "../../components/Skill/Skill";
import html from "../../img/Section_Skills/html.svg";
import css from "../../img/Section_Skills/css.svg";
import js from "../../img/Section_Skills/js.svg";
import jquery from "../../img/Section_Skills/jquery.svg";
import gulp from "../../img/Section_Skills/gulp.svg";
import github from "../../img/Section_Skills/github.svg";
import scss from "../../img/Section_Skills/sass.svg";
import figma from "../../img/Section_Skills/figma.svg";
import vscode from "../../img/Section_Skills/vsc.svg";
import pixelPerfect from "../../img/Section_Skills/pixelPerfect.png";
import react from "../../img/Section_Skills/react.svg";
import redux from "../../img/Section_Skills/redux.svg";
import webpack from "../../img/Section_Skills/webpack.svg";
import nodejs from "../../img/Section_Skills/nodejs.svg";
import typescript from "../../img/Section_Skills/typescript.svg";
import tailwindcss from "../../img/Section_Skills/tailwindcss.svg";
import nextjs from "../../img/Section_Skills/nextjs.svg";

import { useCallback } from "react";

function Skills() {
    const skills = useCallback(() => {
        const data = [];

        function createSkill(src, text) {
            this.src = src;
            this.text = text;
        }

        data.push(new createSkill(html, "HTML"));
        data.push(new createSkill(css, "CSS"));
        data.push(new createSkill(js, "JS"));
        data.push(new createSkill(jquery, "JQuery"));
        data.push(new createSkill(gulp, "Gulp"));
        data.push(new createSkill(github, "GitHub"));
        data.push(new createSkill(scss, "Scss"));
        data.push(new createSkill(figma, "Figma"));
        data.push(new createSkill(vscode, "Vs Code"));
        data.push(new createSkill(pixelPerfect, "Pixel Perfect"));
        data.push(new createSkill(react, "React"));
        data.push(new createSkill(redux, "Redux / Toolkit"));
        data.push(new createSkill(webpack, "Webpack"));
        data.push(new createSkill(nodejs, "Node Js"));
        data.push(new createSkill(typescript, "Typescript"));
        data.push(new createSkill(tailwindcss, "Tailwindcss"));
        data.push(new createSkill(nextjs, "Next Js"));

        return data;
    }, []);

    return (
        <section className="container flex flex-wrap p-4 mx-auto ">
            {skills().map((skill) => (
                <Skill key={skill.text} src={skill.src} text={skill.text} />
            ))}
        </section>
    );
}
export default Skills;
