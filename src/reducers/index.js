import {combineReducers} from "redux";
import users from "./users";
import selectedUser from "./selected-user";
import operations from "./operations";

const reducers = combineReducers({users, selectedUser, operations});

export default reducers;