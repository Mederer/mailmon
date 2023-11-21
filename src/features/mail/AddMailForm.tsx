import {SubmitHandler, useForm} from "react-hook-form";
import styles from "./AddMailForm.module.scss";

type Inputs = {
    recipient: string;
    carrier: string;
    shippingMethod: string;
    height: number;
    width: number;
}

export default function AddMailForm() {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const shippingMethods = ["express", "standard"];

    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => console.log(data);

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formField}>
            <label>Recipient</label>
            <input type="text" {...register("recipient")}/>
        </div>
        <div className={styles.formField}>
            <label>Shipping Method</label>
            <select {...register("shippingMethod")}>
                {shippingMethods.map((method) => <option key={method} value={method}>{method}</option>)}
            </select>
        </div>
        <div className={styles.formGroup}>
            <div className={styles.formField}>
                <label>Height</label>
                <input type="text" {...register("height")}/>
            </div>
        </div>
        <div className={styles.formField}>
            <input type="submit" value="Submit"/>
        </div>
    </form>
}