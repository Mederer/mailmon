import {Mail} from "../../features/mail/types.ts";
import MailCard from "../../features/mail/MailCard.tsx";

export default function MailScreen() {
    const mailItems: Mail[] = [
        {
           id: "fhslfjsjf",
           type: "express",
           status: "delivered"
        },
        {
            id: "fhslfjsjf",
            type: "standard",
            status: "received"
        },
    ]

    return <>
        <h1>MailScreen</h1>
        {mailItems.map(mail => (
            <MailCard mail={mail} />
        ))}
    </>
}