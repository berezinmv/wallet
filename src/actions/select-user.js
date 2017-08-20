import createAction from "./create-action";

export const SELECT_USER = "SELECT_USER";

export const selectUser = (user_id: string) => createAction(SELECT_USER, {user_id});