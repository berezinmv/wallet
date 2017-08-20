import {RECEIVE_OPERATIONS, REQUEST_OPERATIONS} from "../actions/fetch-operations";
import type {Operation} from "../domain/operation";

export type Operations = {
    [user_id: string]: {
        data: Array<Operation>;
        from: string;
        to: string;
        isFetching: boolean;
    };
};

export const onRequestOperations = (state: Operations, action) => {
    const {user_id, from, to} = action.payload;
    return {...state, [user_id]: {data: undefined, from, to, isFetching: true}};
};

export const onReceiveOperations = (state: Operations, action) => {
    const {user_id, operations, from, to} = action.payload;
    const oldOperationInfo = state[user_id];
    if (!oldOperationInfo || (oldOperationInfo.from === from && oldOperationInfo.to === to && oldOperationInfo.isFetching)) {
        return {...state, [user_id]: {data: operations, from, to, isFetching: false}};
    }
    return state;
};

const operations = (state: Operations = {}, action) => {
    switch (action.type) {
        case REQUEST_OPERATIONS:
            return onRequestOperations(state, action);
        case RECEIVE_OPERATIONS:
            return onReceiveOperations(state, action);
    }

    return state;
};

export default operations;