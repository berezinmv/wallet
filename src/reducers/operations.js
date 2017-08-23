import {RECEIVE_OPERATIONS} from "../actions/fetch-operations";
import type {Operation} from "../domain/operation";

const operations = (state: Array<Operation> = [], action) => {
    switch (action.type) {
        case RECEIVE_OPERATIONS:
            return action.payload.operations;
    }

    return state;
};

export default operations;