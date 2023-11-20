import styles from "./Header.module.scss";
import NavBar from "./Navbar.tsx";
import {Link} from "react-router-dom";

export default function Header() {

    return <header className={styles.header}>
        <Link to="/" className={styles.title}>
            <h1>Mailmon</h1>
        </Link>
        <NavBar />
    </header>
}