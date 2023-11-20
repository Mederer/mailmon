import {Link, useLocation} from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function NavBar() {
    const { pathname } = useLocation();

    console.log(pathname)

    return <nav>
        <ul className={styles.navItems}>
            <Link to="/login" className={`${styles.navItem} ${pathname === "/login" ? styles.active : ""}`}>Login</Link>
            <Link to="/signup" className={`${styles.navItem} ${pathname === "/signup" ? styles.active : ""}`}>Sign Up</Link>
        </ul>
    </nav>
}