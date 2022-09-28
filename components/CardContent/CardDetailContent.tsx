import Image from "../Image/Image";

import { ICardContent } from "../../modules/modules";

function CardDetailContent({
    src,
    alt,
    title,
    styles,
    description,
}: ICardContent) {

    

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{title}</h2>
            {!Array.isArray(src) && <Image src={src} quality="90" alt={alt} />}
            {Array.isArray(src) && src.map((img, index) => <Image key={index} src={img} quality="90" alt={alt} />)}
            <p>{description}</p>
        </div>
    );
}
export default CardDetailContent;
