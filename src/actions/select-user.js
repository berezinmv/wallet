import createAction from "./create-action";
import {dispatchAndFetchOperations} from "./fetch-operations";

export const SELECT_USER = "SELECT_USER";

export const selectUser = (user_id: string) => dispatchAndFetchOperations(createAction(SELECT_USER, {user_id}));