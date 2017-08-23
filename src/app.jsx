import React, {Component} from "react";
import UserList from "./containers/user-list/user-list";
import OperationList from "./containers/operation-list/operation-list";
import "./app.css";
import DatePickerFrom from "./containers/date-from/date-picker-from";
import DatePickerTo from "./containers/date-to/date-picker-to";
import ColumnLayout from "./components/column-layout/column-layout";
import Panel from "./components/panel/panel";
import PanelHeader from "./components/panel/panel-header";
import PanelContent from "./components/panel/panel-content";
import UsersColumn from "./containers/users-column/users-column";
import UserColumn from "./containers/user-column/user-column";
import OperationsColumn from "./containers/operations-column/operations-column";
import UserModal from "./containers/user-modal/user-modal";
import EditUserButton from "./containers/edit-user-button/edit-user-button";
import CreateUserButton from "./containers/create-user-button/create-user-button";
import UserInformation from "./containers/user-information/user-information";
import CreateOperationButton from "./containers/create-operation-button/create-operation-button";
import OperationModal from "./containers/operation-modal/operation-modal";
import PanelFooter from "./components/panel/panel-footer";
import UsersPager from "./containers/users-pager/users-pager";
import PanelToolbar from "./components/panel/panel-toolbar";
import UsersSearchInput from "./containers/users-search-input/users-search-input";

export default class App extends Component {

    render() {
        return (
            <div className="application">
                <ColumnLayout>
                    <UsersColumn>
                        <Panel className="application__panel application__users">
                            <PanelHeader>
                                <h3>List of users</h3>
                            </PanelHeader>
                            <PanelToolbar>
                                <EditUserButton/>
                                &nbsp;
                                <CreateUserButton/>
                                <UsersSearchInput/>
                            </PanelToolbar>
                            <PanelContent>
                                <UserList/>
                            </PanelContent>
                            <PanelFooter>
                                <UsersPager/>
                            </PanelFooter>
                        </Panel>
                    </UsersColumn>
                    <UserColumn>
                        <Panel className="application__panel">
                            <PanelHeader>
                                <h3>User information</h3>
                            </PanelHeader>
                            <PanelContent>
                                <UserInformation/>
                            </PanelContent>
                        </Panel>
                    </UserColumn>
                    <OperationsColumn>
                        <Panel className="application__panel">
                            <PanelHeader>
                                <h3>List of operations</h3>
                            </PanelHeader>
                            <PanelToolbar>
                                <CreateOperationButton/>
                                <div className="application__dates">
                                    <div className="application__date-from">
                                        <DatePickerFrom/>
                                    </div>
                                    <div className="application__date-to">
                                        <DatePickerTo/>
                                    </div>
                                </div>
                            </PanelToolbar>
                            <PanelContent>
                                <OperationList/>
                            </PanelContent>
                        </Panel>
                    </OperationsColumn>
                </ColumnLayout>
                <UserModal/>
                <OperationModal/>
            </div>
        );
    }
}