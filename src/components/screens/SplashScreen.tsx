import styles from "./SplashScreen.module.scss";
import {Link} from "react-router-dom";

export default function SplashScreen() {
    return <>
        <h1 className={styles.title}>Mailmon</h1>
        <div className={styles.subtitle}>Accelerate your business with mail made simple.</div>

        <div className={styles.buttonGroup}>
            <Link to={"/login"} className={styles.button}>
                Login
            </Link>
            <Link to={"/signup"} className={styles.button}>
                Sign Up
            </Link>
        </div>
    </>
}