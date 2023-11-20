import {Link, useLocation} from "react-router-dom";
import styles from "./NavBar.module.scss";

export default function NavBar() {
    const { pathname } = useLocation();
    const isLoggedIn = true;

    return <nav>
        <ul className={styles.navItems}>
            {!isLoggedIn ? (
                <>
                    <Link to="/login" className={`${styles.navItem} ${pathname === "/login" ? styles.active : ""}`}>Login</Link>
                    <Link to="/signup" className={`${styles.navItem} ${pathname === "/signup" ? styles.active : ""}`}>Sign Up</Link>
                </>
            ) : null}

            {isLoggedIn ? (
                <>
                    <Link to="/mail" className={`${styles.navItem} ${pathname === "/mail" ? styles.active : ""}`}>Mail</Link>
                    <Link to="/logout" className={`${styles.navItem} ${pathname === "/signup" ? styles.active : ""}`}>Logout</Link>
                </>
            ) : null}
        </ul>
    </nav>
}