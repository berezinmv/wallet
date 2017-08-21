import {combineReducers} from "redux";
import users from "./users";
import selectedUser from "./selected-user";
import operations from "./operations";
import fetchingOperations from "./fetching-operations";
import dateFrom from "./date-from";
import dateTo from "./date-to";

const reducers = combineReducers({
    users, selectedUser, operations, fetchingOperations, dateFrom, dateTo
});

export default reducers;