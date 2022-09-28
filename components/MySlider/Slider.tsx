import classNames from "classnames";
import { MouseEvent, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { ISlider } from "../../modules/modules";

import styles from "./Slider.module.scss";

function Slider(props) {
    const {
        pagination = false,
        buttons = false,
        auto = 0,
        slideData,
        currentIndex,
        setIndex,
        children,
    }: ISlider = props;

    function onPrevBtnClick(event: MouseEvent<HTMLButtonElement>) {
        setIndex(currentIndex - 1);
    }

    function onNextBtnClick(event: MouseEvent<HTMLButtonElement>) {
        setIndex(currentIndex + 1);
    }

    function onPaginationClick(event: MouseEvent<HTMLButtonElement>) {
        const numBtn = +event.currentTarget.textContent!;

        slideData.forEach((d) => {
            const { id } = d;
            if (id === numBtn) {
                setIndex(id - 1);
            }
        });
    }

    useEffect(() => {
        if (auto >= 2000) {
            const nextSlide = setInterval(() => {
                setIndex(currentIndex + 1);
            }, auto);
            return () => clearInterval(nextSlide);
        }
    }, [auto, currentIndex, setIndex]);

    useEffect(() => {
        if (currentIndex < 0) {
            setIndex(slideData.length - 1);
        } else if (currentIndex > slideData.length - 1) {
            setIndex(0);
        }
    }, [currentIndex, slideData.length, setIndex, slideData]);

    const drag = useSwipeable({
        onSwipedLeft: () => setIndex(currentIndex + 1),
        onSwipedRight: () => setIndex(currentIndex - 1),
        trackMouse: true,
    });

    return (
        <section className={styles.slider} {...drag}>
            {children}

            {buttons && (
                <>
                    <button onClick={onPrevBtnClick} className={styles.prev}>
                        &#60;
                    </button>
                    <button onClick={onNextBtnClick} className={styles.next}>
                        &#62;
                    </button>
                </>
            )}

            {pagination && (
                <article className={styles.pagination}>
                    {slideData.map((slide, slideId) => (
                        <button
                            onClick={onPaginationClick}
                            className={classNames(
                                styles.cycle,
                                currentIndex === slideId && styles.activeCycle
                            )}
                            key={slide.id}>
                            {slideId + 1}
                        </button>
                    ))}
                    <button
                        onClick={onPrevBtnClick}
                        className={styles.prevPagination}>
                        &#60;
                    </button>
                    <button
                        onClick={onNextBtnClick}
                        className={styles.nextPagination}>
                        &#62;
                    </button>
                </article>
            )}
        </section>
    );
}
export default Slider;
