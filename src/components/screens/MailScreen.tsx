import styles from "./MailScreen.module.scss";
import ButtonLink from "../common/ButtonLink.tsx";

export default function MailScreen() {
    // const mailItems: Mail[] = [
    //     {
    //         id: "1",
    //         recipient: "John Doe",
    //         carrier: "AusPost",
    //         status: "Shipped",
    //         shippingMethod: "Express",
    //         weight: 1.5,
    //         height: 10,
    //         width: 8,
    //         length: 12,
    //         notes: "Fragile, handle with care",
    //     },
    //     {
    //         id: "2",
    //         recipient: "Jane Smith",
    //         carrier: "StarTrack",
    //         status: "In Transit",
    //         shippingMethod: "Standard",
    //         weight: 2.3,
    //         height: 15,
    //         width: 6,
    //         length: 14,
    //         notes: "Signature required upon delivery",
    //     },
    //     {
    //         id: "3",
    //         recipient: "Bob Johnson",
    //         carrier: "AusPost",
    //         status: "Delivered",
    //         shippingMethod: "Priority",
    //         weight: 3.8,
    //         height: 12,
    //         width: 10,
    //         length: 16,
    //         notes: "Left at front door",
    //     },
    // ]

    return <div className={styles.container}>
        <h2 className="pageTitle">Mail</h2>
        <div className={styles.stats}></div>
        <div className={styles.buttonGroup}>
            <ButtonLink to="/mail/new" minWidth={21.8}>Add Mail</ButtonLink>
        </div>
    </div>
}