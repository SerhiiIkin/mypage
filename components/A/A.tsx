import Link from "next/link";
import { ILink } from "../../modules/modules";

function A({ href, text, pStyles, aStyles, children,as }: ILink ) {
    return (
        <p className={pStyles}>
            <Link href={href} as={as}>
                <a className={aStyles}>{text} {children }</a>
            </Link>
        </p>
    );
}
export default A;
