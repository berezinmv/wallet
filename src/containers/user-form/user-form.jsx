import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({user_id: state.selectedUser});

const UserForm = connect(mapStateToProps)(({user_id}) =>
    <div className="user-form">

    </div>
);

export default UserForm;