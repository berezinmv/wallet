import createAction from "../create-action";

export const CHANGE_USER_MODAL_FIELD = "CHANGE_USER_MODAL_FIELD";

export const changeUserModalField = (field: string, value) => createAction(CHANGE_USER_MODAL_FIELD, {field, value});