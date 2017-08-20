import React, {Component} from "react";
import UserList from "./containers/user-list/user-list";
import UserForm from "./containers/user-form/user-form";

export default class App extends Component {

    render() {
        return (
            <div className="application">
                <UserList/>
                <UserForm/>
            </div>
        );
    }
}