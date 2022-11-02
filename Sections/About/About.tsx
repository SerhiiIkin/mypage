import Image from "../../components/Image/Image";
import HeaderText from "../../Sections/Header/HeaderText";
import AboutText from "../../Sections/About/AboutText";
import ImageWithZoom from "../../components/ImageWithZoom/ImageWithZoom";

import myImg from "../../img/Section_About/myImg.jpg";
import frontEndBasicBevis from "../../img/Section_About/kursusbevis_en.jpg";
import frontEndProBevis from "../../img/Section_About/frond-end-pro_en.png";
import danskBevis from "../../img/Section_About/pd3.jpg";
import englishBevis from "../../img/Section_About/Serhii_Ikin_certificate_eng.jpg";

import styles from "./About.module.scss";

function About() {
    const { fullName } = HeaderText();
    const {
        developName,
        contacts,
        mypage,
        summary,
        summaryText,
        skills,
        skillsList,
        language,
        languageList,
        experience,
        strongServiceWork,
        serviceWorkTime,
        serviceWorkDescription,
        strongTransport,
        transportTime,
        transportDescription,
        strongAgriculture,
        agricultureTime,
        agricultureDescription,
        edication,
        strongEdication,
        edicationDescription,
        course,
        frontendBasis,
        frontendPro,
        quoteTitle,
        quoteText,
        dansk,
        english,
        downloadText,
        downloadLabelCV,
        downloadLabelAnsøgning,
    } = AboutText();

    function LanguageList({ languageList }) {
        return (
            <ul className="list-disc">
                {languageList.map((lang) => {
                    return <li key={lang}>{lang}</li>;
                })}
            </ul>
        );
    }

    function SkillsList({ skillsList }) {
        return (
            <ul className="list-disc">
                {skillsList.map((skill) => {
                    return <li key={skill}>{skill}</li>;
                })}
            </ul>
        );
    }

    function Contacts({ mypage }) {
        return (
            <ul>
                <li>
                    <a
                        target="_blank"
                        href="https://goo.gl/maps/JufpzTgudt54LfKM9"
                        rel="noreferrer">
                        Kibæk,Danmark
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://t.me/IkinSerhii">
                        +4550246519 (Telegram)
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="mailto:messileonl@gmail.com">
                        messileonl@gmail.com
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </li>
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/serhii-ikin-608054227/">
                        Linkedin Serhii Ikin
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </li>
                <li>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://serhiiikin.github.io/Portfolio/SerhiiIkinPortfolio/">
                        {mypage}
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </li>
            </ul>
        );
    }

    return (
        <section className={styles.wrapper}>
            <article className={styles.colOne}>
                <h1>{fullName}</h1>
                <h2>{developName}</h2>

                <h3>{contacts}</h3>
                <Contacts mypage={mypage}></Contacts>

                <h3>{summary}</h3>
                <p> {summaryText} </p>

                <h3> {skills} </h3>
                <SkillsList skillsList={skillsList}></SkillsList>

                <h3> {language} </h3>
                <LanguageList languageList={languageList}></LanguageList>
            </article>

            <article className={styles.colTwo}>
                <h3>{experience}</h3>
                <p>
                    <strong> {strongServiceWork}, </strong>
                    {serviceWorkTime}
                </p>

                <p> {serviceWorkDescription} </p>
                <p>
                    <strong> {strongTransport}, </strong>
                    {transportTime}
                </p>

                <p> {transportDescription} </p>
                <p>
                    <strong> {strongAgriculture}, </strong>
                    {agricultureTime}
                </p>
                <p> {agricultureDescription} </p>

                <h3> {edication} </h3>
                <strong> {strongEdication}, </strong>
                {edicationDescription}

                <h3> {course} </h3>
                <p> {frontendBasis} </p>

                <ImageWithZoom
                    src={frontEndBasicBevis}
                    alt="frontEndBasicBevis"
                />

                <p> {frontendPro} </p>
                <ImageWithZoom
                    src={frontEndProBevis}
                    alt="frontEndBasicBevis"
                />

                <strong> {quoteTitle} </strong>
                <q> {quoteText} </q>

                <p> {dansk} </p>
                <ImageWithZoom src={danskBevis} alt="frontEndBasicBevis" />

                <p> {english} </p>
                <ImageWithZoom src={englishBevis} alt="frontEndBasicBevis" />
            </article>

            <article className={styles.colThree}>
                <Image quality="50" alt="my pic" src={myImg} />
            </article>

            <article>
                <p>{downloadText}</p>
                <p className={styles.linkWrapper}>
                    <a
                        className={styles.linkCV}
                        target="_blank"
                        href="./СV_Serhii_Ikin_FrontEnd_Developer_dk.pdf">
                        {downloadLabelCV}
                    </a>
                    <a
                        className={styles.linkAn}
                        target="_blank"
                        href="./Ansøgning_frontend_udvikler.pdf">
                        {downloadLabelAnsøgning}
                    </a>
                </p>
            </article>
        </section>
    );
}
export default About;
