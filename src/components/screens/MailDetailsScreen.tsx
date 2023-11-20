import {useParams} from "react-router-dom";

export default function MailDetailsScreen() {
    const { id } = useParams();

    return <>
        <h1>Mail Details</h1>
        <p>This is the mail details for id {id}.</p>
    </>
}