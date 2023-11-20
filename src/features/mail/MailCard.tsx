import {Mail} from "./types.ts";

interface MailCardProps {
    mail: Mail
}
export default function MailCard({mail}: MailCardProps) {

    return <>
        <h1>{mail.id} {mail.type}</h1>
    </>
}