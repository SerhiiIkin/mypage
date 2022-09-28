import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Multilanguage(ukr, eng?, dk?) {
    const lang = useSelector((state: RootState) => state.language.language);

    function LanguageItem(ukr, eng, dk) {
        this.ukr = ukr;
        this.eng = eng;
        this.dk = dk;
    }

    if (!eng && !dk) {
        eng = ukr;
        dk = ukr;
    }

    const text = new LanguageItem(ukr, eng, dk);

    switch (lang) {
        case "UKR":
            return text.ukr;

        case "ENG":
            return text.eng;

        case "DK":
            return text.dk;
        default:
            return text.dk;
    }
}
export default Multilanguage;
