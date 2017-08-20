import React from "react";
import {connect} from "react-redux";
import OperationList from "../operation-list/operation-list";

const mapStateToProps = state => ({user_id: state.selectedUser});

const UserForm = connect(mapStateToProps)(({user_id}) =>
    <OperationList user_id={user_id}/>
);

export default UserForm;