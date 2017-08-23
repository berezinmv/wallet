import createAction from "./create-action";
import type {Operation} from "../domain/operation";
import loadOperations from "../api/load-operations";

export const REQUEST_OPERATIONS = "REQUEST_OPERATIONS";

export const RECEIVE_OPERATIONS = "RECEIVE_OPERATIONS";

export const requestOperations = (user_id: string, from: string, to: string) =>
    createAction(REQUEST_OPERATIONS, {user_id, from, to});

export const receiveOperations = (user_id: string, operations: Array<Operation>, from: string, to: string) =>
    createAction(RECEIVE_OPERATIONS, {user_id, operations, from, to});

export const fetchOperations = (user_id: string, dateFrom: string, dateTo: string) =>
    (dispatch, getState) => {

        dispatch(requestOperations(user_id, dateFrom, dateTo));

        return loadOperations(user_id, dateFrom, dateTo)
            .then(responseData => {
                const state = getState();
                if (state.dateFrom === dateFrom && state.dateTo === dateTo && state.selectedUser === user_id) {
                    dispatch(receiveOperations(user_id, responseData, dateFrom, dateTo));
                }
            });
    };

export const dispatchAndFetchOperations = (action) =>
    (dispatch, getState) => {
        dispatch(action);
        const {selectedUser, dateFrom, dateTo} = getState();
        return dispatch(fetchOperations(selectedUser, dateFrom, dateTo));
    };