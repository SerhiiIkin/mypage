import Img from "next/image";
import { IImage } from "../../modules/modules";


function Image({ quality, alt, src, styles, onImgClick }: IImage) {
    

    return <Img onClick={onImgClick} src={src} className={styles}   quality={quality}  alt={alt} />;
}
export default Image;
