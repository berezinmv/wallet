import React from "react";
import {connect} from "react-redux";
import List from "../../components/list/list";
import {selectUser} from "../../actions/select-user";
import type {State} from "../../reducers/state";
import type {User} from "../../domain/user";
import "./user-list.css";

const mapStateToProps = (state: State) => ({
    items: state.users,
    selectedId: state.selectedUser,
    renderItem: ({user_name, email}) => (
        <div className="user-list-item">
            <div>{user_name} ({email})</div>
        </div>
    ),
    getId: (user: User) => user.user_id,
    getName: (user: User) => user.user_name
});

const mapDispatchToProps = dispatch => ({
    onClick(user: User) {
        dispatch(selectUser(user.user_id));
    }
});

const UserList = connect(mapStateToProps, mapDispatchToProps)(List);

export default UserList;