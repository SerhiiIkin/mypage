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
import angular from "../../img/Section_Skills/angular.svg";
import cSharp from "../../img/Section_Skills/csharp.svg";
import bootstrap from "../../img/Section_Skills/bootstrap.svg";
import blazor from "../../img/Section_Skills/blazor.svg";
import docker from "../../img/Section_Skills/docker.svg";
import jest from "../../img/Section_Skills/jest-js.svg";
import postgresql from "../../img/Section_Skills/postgresql.svg";

function SkillsData() {
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
    data.push(new createSkill(webpack, "Webpack"));
    data.push(new createSkill(nodejs, "Node Js"));
    data.push(new createSkill(react, "React"));
    data.push(new createSkill(redux, "Redux/Toolkit"));
    data.push(new createSkill(typescript, "Typescript"));
    data.push(new createSkill(tailwindcss, "Tailwindcss"));
    data.push(new createSkill(nextjs, "Next Js"));
    data.push(new createSkill(angular, "Angular"));
    data.push(new createSkill(cSharp, "C#"));
    data.push(new createSkill(bootstrap, "Bootstrap"));
    data.push(new createSkill(blazor, "Blazor"));
    data.push(new createSkill(docker, "Docker"));
    data.push(new createSkill(jest, "Jest"));
    data.push(new createSkill(postgresql, "Postgresql"));

    return data;
}

export default SkillsData;
