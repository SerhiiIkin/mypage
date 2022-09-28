import Multilanguage from "../../components/Multilanguage";

function HeaderText() {
    const fullName = Multilanguage("Сергій Ікін", "Serhii Ikin", "Serhii Ikin");
    const home = Multilanguage("Домашня", "Home", "Hjem");
    const about = Multilanguage("Про мене", "About me", "Om mig");
    const portfolio = Multilanguage("Портфоліо", "Portfolio", "Portefølje");

    return {
        fullName,
        home,
        about,
        portfolio,
    };
}
export default HeaderText;
