import { useRouter } from "next/router";
import LayoutIndex from "../../components/LayoutIndex/LayoutIndex";
import CardData from "../../components/CardContent/CardData";
import CardDetailContent from "../../components/CardContent/CardDetailContent";

import styles from "./projectDetail.module.scss";
import NotFounded from "../404";

function ProjectDetail() {
    const router = useRouter();
    const { id } = router.query;
    const dataCard = CardData();
    const selectedCard = dataCard().filter((data) => data.id === +id)[0];

    if (isNaN(+id) || +id > dataCard().length) return <NotFounded />

    return (
        <LayoutIndex>
            <CardDetailContent
                description={selectedCard?.description}
                src={selectedCard?.src}
                title={selectedCard?.title}
                alt={selectedCard?.alt}
                styles={styles}
                link={selectedCard?.link}
            />
        </LayoutIndex>
    );
}
export default ProjectDetail;
