import Image from "../Image/Image";

import { ICardContent } from "../../modules/modules";
import CardText from "./CardText";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import { Pagination, Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

function CardDetailContent({
    src,
    alt,
    title,
    styles,
    description,
    link,
}: ICardContent) {
    const { linkText } = CardText();
    const Pic = dynamic(() => import("../../components/Image/Image"), {
        suspense: true,
    });

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            {!Array.isArray(src) && <Image src={src} quality="90" alt={alt} />}
            {Array.isArray(src) && (
                <Swiper
                    spaceBetween={150}
                    slidesPerView={1}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
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
                    modules={[Pagination, Autoplay]}>
                    {src.map((img, index) => {
                        return (
                            <SwiperSlide className="py-10" key={index}>
                                <Suspense fallback={<Loader />}>
                                    <Pic
                                        key={index}
                                        src={img}
                                        quality="90"
                                        alt={alt}
                                    />
                                </Suspense>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}

            <p>{description}</p>
            <a
                className={styles.link}
                target="_blank"
                href={link}
                rel="noreferrer">
                {linkText}
            </a>
        </div>
    );
}
export default CardDetailContent;
