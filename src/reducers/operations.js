import {RECEIVE_OPERATIONS} from "../actions/fetch-operations";
import type {Operation} from "../domain/operation";

export type Operations = Array<Operation>;

const operations = (state: Operations = [], action) => {
    switch (action.type) {
        case RECEIVE_OPERATIONS:
            return action.payload.operations;
    }

    return state;
};

export default operations;