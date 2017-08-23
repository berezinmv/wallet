import {request} from "./request";

export const createUrl = (offset: number, limit: number, idOrName: string) =>
    `/users?offset=${offset}&limit=${limit}${idOrName ? `&user_requisites=${idOrName}` : ""}`;

const loadUsers = (offset: number, limit: number, idOrName: string) =>
    request(createUrl(offset, limit, idOrName), "GET");

export default loadUsers;