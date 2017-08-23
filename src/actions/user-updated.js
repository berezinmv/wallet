import type {User} from "../domain/user";
import createAction from "./create-action";

export const USER_UPDATED = "USER_UPDATED";

export const userUpdated = (user: User) => createAction(USER_UPDATED, {user});