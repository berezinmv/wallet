import React from "react";
import {connect} from "react-redux";
import UserForm from "../user-form/user-form";
import Modal from "../../components/modal/modal";
import {closeUserModal} from "../../actions/user-modal/close-user-modal";

const mapStateToProps = (state: State) => ({
    isOpen: state.userModal.user != null,
    contentLabel: "User modal",
    children: <UserForm/>
});

const mapDispatchToProps = dispatch => ({
    onRequestClose() {
        dispatch(closeUserModal())
    }
});

const UserModal = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default UserModal;