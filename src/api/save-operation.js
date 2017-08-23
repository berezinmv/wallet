import {request} from "./request";

export const createUrl = (user_id) => `/users/${user_id}/recharge`;

const saveOperation = (user_id: string, operation: { comment: string, amount: number }) =>
    request(createUrl(user_id), "POST", operation).then(({amount}) => ({user_id, balance: amount}));

export default saveOperation;