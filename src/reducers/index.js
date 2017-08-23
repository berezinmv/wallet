import {combineReducers} from "redux";
import users from "./users";
import selectedUser from "./selected-user";
import operations from "./operations";
import fetchingOperations from "./fetching-operations";
import dateFrom from "./date-from";
import dateTo from "./date-to";
import userModal from "./user-modal";
import operationModal from "./operation-modal";
import usersPage from "./users-page";
import usersSearch from "./users-search";

const reducers = combineReducers({
    users,
    usersPage,
    usersSearch,
    selectedUser,
    operations,
    fetchingOperations,
    dateFrom,
    dateTo,
    userModal,
    operationModal
});

export default reducers;