import {Mail} from "./types.ts";
import MailCard from "./MailCard.tsx";
import styles from "./MailList.module.scss";

interface MailListProps {
    mailItems: Mail[]
}
export default function MailList({mailItems}: MailListProps) {
    return <div>
        <div className={styles.container}>
            {mailItems.map(mail => (
                <MailCard key={mail.id} mail={mail} />
            ))}
        </div>
    </div>
}