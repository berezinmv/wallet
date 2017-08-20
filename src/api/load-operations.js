import {request} from "./request";

export const createUrl = (user_id: string, from: string, to: string) =>
    `/users/${user_id}/transactions?datetime_from=${from}&datetime_to=${to}`;

const loadOperations = (user_id: string, from: string, to: string) =>
    request(createUrl(user_id, from, to), "GET");

export default loadOperations;