import {RECEIVE_OPERATIONS, REQUEST_OPERATIONS} from "../actions/fetch-operations";

const fetchingOperations = (state: boolean = false, action) => {
    switch (action.type) {
        case REQUEST_OPERATIONS:
            return true;
        case RECEIVE_OPERATIONS:
            return false;
    }

    return state;
};

export default fetchingOperations;