import {CHANGE_FROM} from "../actions/change-dates";

const dateFrom = (state: string = "2016-10-14T00:00:00Z", action) => {
    switch (action.type) {
        case CHANGE_FROM:
            return action.payload.dateFrom;
    }

    return state;
};

export default dateFrom;