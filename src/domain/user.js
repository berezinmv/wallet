export type User = {
    user_id: string;
    user_name: string;
    user_custom: string;
    email: string;
    register_date: string;
    balance: number;
    wallet_amount: number;
    wallet_currency: string;
    enabled?: boolean;
}