import React, {Component} from "react";
import UserList from "./containers/user-list/user-list";
import UserForm from "./containers/user-form/user-form";
import OperationList from "./containers/operation-list/operation-list";
import "./app.css";
import DatePickerFrom from "./containers/date-from/date-picker-from";
import DatePickerTo from "./containers/date-to/date-picker-to";

export default class App extends Component {

    render() {
        return (
            <div className="application">
                <div className="application__user-list">
                    <UserList/>
                </div>
                <div className="application__user-form">
                    <UserForm/>
                </div>
                <div className="application__operations-list">
                    <div className="application__dates">
                        <div className="application__date-from">
                            <DatePickerFrom/>
                        </div>
                        <div className="application__date-to">
                            <DatePickerTo/>
                        </div>
                    </div>
                    <OperationList/>
                </div>
            </div>
        );
    }
}