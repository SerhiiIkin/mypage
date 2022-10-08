import LayoutIndex from "../../components/LayoutIndex/LayoutIndex";
import Multilanguage from "../../components/Multilanguage";

import CardContent from "../../components/CardContent/CardContent";
import CardData from "../../components/CardContent/CardData";

import styles from "./index.module.scss";

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
                <div className="grid grid-cols-1 gap-y-4 gap-x-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
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
