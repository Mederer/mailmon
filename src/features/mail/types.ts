export type Mail = {
    id: string;
    recipient: string;
    carrier: string;
    status: string;
    shippingMethod: string;
    weight: number;
    height: number;
    width: number;
    length: number;
    notes: string;
}