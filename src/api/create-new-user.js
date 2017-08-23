import type {User} from "../domain/user";
import {request} from "./request";

export const url = "/users";

const createNewUser = (user: User) => request(url, "POST", user);

export default createNewUser;