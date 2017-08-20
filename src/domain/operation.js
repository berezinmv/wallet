export type Operation = {
    operation_id: number;
    transaction_id: number;
    coupon_id: number;
    coupon_code: string;
    transaction_type: string;
    comment: string;
    date: string;
    amount: number;
    sum: number;
    currency: string;
    status: string;
    user_balance: number;
    user_id: string;
};