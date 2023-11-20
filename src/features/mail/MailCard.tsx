import {Mail} from "./types.ts";
import styles from "./MailCard.module.scss";

interface MailCardProps {
    mail: Mail
}
export default function MailCard({mail}: MailCardProps) {

    return <div className={styles.container}>
        <div className={styles.row}>
            <span>{mail.recipient}</span>
            <span>{mail.id}</span>
        </div>

        <div className={styles.row}>
            <span>{mail.carrier}</span>
        </div>

        <div className={styles.row}>
            <span>{mail.shippingMethod}</span>
        </div>
    </div>
}