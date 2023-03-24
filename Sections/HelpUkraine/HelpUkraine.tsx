import Converter from "../../components/Converter";
import HelpUkraineText from "./helpUkraineText";
import Image from "next/image";
import donateForm from "../../img/Section_HelpUkraine/donateform.jpg";
import becreftFrom from "../../img/Section_HelpUkraine/bekreftform.jpg";

function HelpUkraine() {
    const { title, description, step1, step2, step3, subtitle, link } =
        HelpUkraineText();
    return (
        <section className="p-2">
            <Converter />
            <article>
                <h1 className="text-lg font-bold">{title}</h1>
                <p>{description}</p>
            </article>
            <article>
                <p className="pb-2">{step1}</p>
                <a
                    href="https://donatello.to/divertito"
                    target="_blank"
                    title="Відкриється в новому вікні"
                    className=" bg-blue-400 p-2 rounded  xl:hover:bg-yellow-300"
                    rel="noopener noreferrer">
                    {link}
                </a>
                <p className="pt-2">{step2}</p>
                <details>
                    <summary>
                        <span className="cursor-pointer p-1 rounded hover:bg-blue-400">
                            {subtitle}
                        </span>
                    </summary>
                    <Image src={donateForm} alt="donateform" />
                </details>
                <p>{step3} </p>
                <details>
                    <summary>
                        <span className="cursor-pointer p-1 rounded hover:bg-blue-400">
                            {subtitle}
                        </span>
                    </summary>
                    <Image src={becreftFrom} alt="becreftFrom" />
                </details>
            </article>
        </section>
    );
}

export default HelpUkraine;
