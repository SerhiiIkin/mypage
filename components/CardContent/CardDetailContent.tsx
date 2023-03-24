import Image from "next/image";
import { ICardContent } from "../../modules/modules";
import CardText from "./CardText";
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

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            {!Array.isArray(src) && (
                <div className={styles.imgContainer}>
                    <Image src={src} quality="50" priority alt={alt} />
                </div>
            )}
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
                                <div className={styles.imgContainer}>
                                    <Image
                                        key={index}
                                        src={img}
                                        quality="50"
                                        alt={alt}
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            )}

            <p className="mt-4">{description}</p>
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
