import classNames from "classnames";
import { ISlideData } from "../../modules/modules";
import styles from "./Slider.module.scss";

function Slide({ currentIndex, slideData, children, slideId }: ISlideData) {
    const slideStyle = () => {
        if (currentIndex === slideId) return styles.active;
        if (currentIndex === 0 && slideId === slideData.length - 1)
            return styles.prevSlide;
        if (currentIndex === slideData.length - 1 && slideId === 0)
            return styles.nextSlide;
        if (slideId > currentIndex) return styles.nextSlide;
        if (slideId < currentIndex) return styles.prevSlide;
    };

    return (
        <article className={classNames(styles.slide, slideStyle())}>
            {children}
        </article>
    );
}
export default Slide;
