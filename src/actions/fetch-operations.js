import createAction from "./create-action";
import type {Operation} from "../domain/operation";
import loadOperations from "../api/load-operations";

export const REQUEST_OPERATIONS = "REQUEST_OPERATIONS";

export const RECEIVE_OPERATIONS = "RECEIVE_OPERATIONS";

export const requestOperations = (user_id: string, from: string, to: string) =>
    createAction(REQUEST_OPERATIONS, {user_id, from, to});

export const receiveOperations = (user_id: string, operations: Array<Operation>, from: string, to: string) =>
    createAction(RECEIVE_OPERATIONS, {user_id, operations, from, to});

export const fetchOperations = (user_id: string, from: string, to: string) =>
    dispatch => {

        dispatch(requestOperations(user_id, from, to));

        return loadOperations(user_id, from, to)
            .then(responseData => dispatch(receiveOperations(user_id, responseData, from, to)));
    };