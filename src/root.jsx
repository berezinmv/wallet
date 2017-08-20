import React, {Component} from "react";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import reducers from "./reducers";
import App from "./app";
import {fetchUsers} from "./actions/fetch-users";

export default class Root extends Component {

    store = createStore(reducers, applyMiddleware(thunkMiddleware));

    render() {
        this.store.dispatch(fetchUsers(0, 10));
        return (
            <Provider store={this.store}>
                <App/>
            </Provider>
        );
    }
}