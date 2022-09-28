import LayoutIndex from "../../components/LayoutIndex/LayoutIndex";
import Multilanguage from "../../components/Multilanguage";

import CardContent from "../../components/CardContent/CardContent";

import styles from "./index.module.scss";
import CardData from "../../store/CardData";

function Portfolio() {
    const projectsTitle = Multilanguage(
        "Мої проекти",
        "My projects",
        "Mine projekter"
    );

    const projects = CardData();

    return (
        <LayoutIndex>
            <section className="container mx-auto px-2">
                <h1 className="text-center text-xl lg:text-4xl pb-2">
                    {projectsTitle}
                </h1>
                <div className="flex flex-wrap">
                    {projects().map((project) => {
                        const { id, title, alt, src } = project;

                        return (
                            <CardContent
                                id={id}
                                key={id}
                                title={title}
                                alt={alt}
                                src={src}
                                styles={styles}
                            />
                        );
                    })}
                </div>
            </section>
        </LayoutIndex>
    );
}
export default Portfolio;
