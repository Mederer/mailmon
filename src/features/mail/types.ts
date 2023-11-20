export type Mail = {
    id: string;
    status: "received" | "delivered";
    type: "express" | "standard";
}