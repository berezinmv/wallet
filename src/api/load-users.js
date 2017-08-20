import {request} from "./request";

export const createUrl = (offset: number, limit: number) => `/users?offset=${offset}&limit=${limit}`;

const loadUsers = (offset: number, limit: number) => request(createUrl(offset, limit), "GET");

export default loadUsers;