import {  useState } from "react";
import MySlider from "../../components/MySlider/Slider";
import HeaderText from "../Header/HeaderText";
import SlideContent from "../../components/CardContent/CardContent";
import Slide from "../../components/MySlider/Slide";

import styles from "./Portfolio.module.scss";
import CardContent from "../../store/CardData";


function Portfolio() {
    const slideData = CardContent()
    const { portfolio } = HeaderText();
    const [currentIndex, setCurrentIndex] = useState(0);

    function setIndex(data: number) {
        setCurrentIndex(data);
    }

    return (
        <section className="bg-gray-800">
            <div className={styles.wrapper}>
                <h1 className={styles.h1}>{portfolio}</h1>
                <MySlider
                    buttons
                    pagination
                    currentIndex={currentIndex}
                    setIndex={setIndex}
                    slideData={slideData()}>
                    {slideData().map((slide, slideId) => {
                        const { id, src, title, alt } = slide;
                        return (
                            <Slide
                                key={id}
                                slideId={slideId}
                                currentIndex={currentIndex}
                                slideData={slideData()}>
                                <SlideContent
                                    id={id}
                                    src={src}
                                    title={title}
                                    alt={alt}
                                    styles={styles}
                                />
                            </Slide>
                        );
                    })}
                </MySlider>
            </div>
        </section>
    );
}
export default Portfolio;
