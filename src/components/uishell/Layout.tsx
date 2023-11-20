import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import styles from "./Layout.module.scss";

export default function Layout() {
    return <div className={styles.container}>
        <Header />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer />
    </div>
}