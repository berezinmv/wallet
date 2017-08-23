import type {Action} from "../actions/action";
import {SEARCH_CHANGE} from "../actions/search-change";

const usersSearch = (state = "", action: Action) => {
    switch (action.type) {
        case SEARCH_CHANGE:
            return action.payload.text;
    }

    return state;
};

export default usersSearch;