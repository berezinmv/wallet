import createAction from "./create-action";

export const ADD_USER = "ADD_USER";

export const addUser = (name: string) => createAction(ADD_USER, {name});
