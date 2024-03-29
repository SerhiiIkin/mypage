import HeaderText from "../Header/HeaderText";
import SlideContent from "../../components/CardContent/CardContent";
import CardContent from "../../components/CardContent/CardData";

import styles from "./Portfolio.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper";


function Portfolio() {
    const slideData = CardContent();
    const { portfolio } = HeaderText();

    return (
        <section className="bg-gray-800">
            <div className={styles.wrapper}>
                <h1 className={styles.h1}>{portfolio}</h1>
                <Swiper
                    spaceBetween={150}
                    slidesPerView={1}
                    loop={true}
                    speed={1200}
                    grabCursor={true}
                    navigation={true}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 360,
                        slideShadows: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 5,
                        renderBullet: function (index, className) {
                            return (
                                '<span class="' +
                                className +
                                '">' +
                                (index + 1) +
                                "</span>"
                            );
                        },
                    }}
                    modules={[Pagination, Navigation, EffectCoverflow]}>
                    {slideData().reverse().map((slide) => {
                        const { id, src, title, alt } = slide;

                        return (
                            <SwiperSlide key={id}>
                                <SlideContent
                                    key={id}
                                    id={id}
                                    src={src}
                                    title={title}
                                    alt={alt}
                                    styles={styles}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}
export default Portfolio;
