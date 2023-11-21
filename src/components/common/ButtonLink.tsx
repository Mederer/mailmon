import {Link} from "react-router-dom";
import React from "react";
import styles from "./ButtonLink.module.scss";

interface ButtonLinkProps {
    to: string;
    children: React.ReactNode;
    minWidth: number;
}
export default function ButtonLink({to, children, minWidth}: ButtonLinkProps) {
    const additionalStyles = {
        minWidth: `${minWidth}rem`
    }

    return <Link to={to} className={styles.button} style={additionalStyles}>
        {children}
    </Link>
}