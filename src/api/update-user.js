import type {User} from "../domain/user";
import {request} from "./request";

export const createUrl = user_id => `/users/${user_id}`;

const updateUser = (user: User) => request(createUrl(user.user_id), "PUT", {...user, user_id: undefined});

export default updateUser;