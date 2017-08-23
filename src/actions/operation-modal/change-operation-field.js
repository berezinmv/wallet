import createAction from "../create-action";

export const CHANGE_OPERATION_FIELD = "CHANGE_OPERATION_FIELD";

export const changeOperationField = (field: string, value) => createAction(CHANGE_OPERATION_FIELD, {field, value});