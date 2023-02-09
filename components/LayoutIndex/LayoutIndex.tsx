import Head from "next/head";
import Footer from "../../Sections/Footer/Footer";
import Header from "../../Sections/Header/Header";
import ScrollToTop from "react-scroll-to-top";

import styles from "./LayoutIndex.module.scss";
import Chat from "../Chat/Chat";

function LayoutIndex({ children }) {
    return (
        <>
            <Head>
                <title>Serhii Ikin page</title>
                <meta name="description" content="Serhii Ikin page" />
                <meta name="keywords" content="Serhii,Ikin, react, next" />
            </Head>

            <Header />
            <main className={styles.main}>{children}</main>
            <ScrollToTop smooth className={styles.arrow} />
            <Footer />
        </>
    );
}
export default LayoutIndex;
