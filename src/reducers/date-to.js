import {CHANGE_TO} from "../actions/change-dates";

const dateTo = (state: string = "2017-08-20T00:00:00Z", action) => {
    switch (action.type) {
        case CHANGE_TO:
            return action.payload.dateTo;
    }

    return state;
};

export default dateTo;