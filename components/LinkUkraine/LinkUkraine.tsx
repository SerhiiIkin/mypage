import Multilanguage from "../Multilanguage";

function LinkUkraine() {
    const helpUkraine = Multilanguage(
        "Допомогти Україні",
        "Help for Ukraine",
        "Hjælp for Ukraine"
    );

    return (
        <a href="helpUkraine" className="text-center bg-gradient-to-b from-yellow-400 to-blue-500 fixed top-0 left-0 w-full z-10">
            {helpUkraine}
        </a>
    );
}

export default LinkUkraine;
