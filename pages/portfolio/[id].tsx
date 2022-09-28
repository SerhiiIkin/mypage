import { useRouter } from "next/router";
import LayoutIndex from "../../components/LayoutIndex/LayoutIndex";
import CardData from "../../store/CardData";
import CardDetailContent from "../../components/CardContent/CardDetailContent";

import styles from "./projectDetail.module.scss"

function ProjectDetail() {
    const router = useRouter();
    const { id } = router.query;
    const dataCard = CardData();
    const selectedCard = dataCard().filter(
        (data) => data.id === +id
    )[0];

    return (
        <LayoutIndex>
            <CardDetailContent
                description={selectedCard?.description}
                src={selectedCard?.src}
                title={selectedCard?.title}
                alt={selectedCard?.alt}
                styles={styles}
            />
        </LayoutIndex>
    );
}
export default ProjectDetail;
