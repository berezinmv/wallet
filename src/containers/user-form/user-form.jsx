import React from "react";
import {connect} from "react-redux";
import InputText from "../../components/controls/input-text/input-text";
import InputEmail from "../../components/controls/input-email/input-email";
import Checkbox from "../../components/controls/checkbox/checkbox";
import type {State} from "../../reducers/state";
import Button from "../../components/controls/button/button";
import {saveUser} from "../../actions/user-modal/save-user";
import {closeUserModal} from "../../actions/user-modal/close-user-modal";
import {changeUserModalField} from "../../actions/user-modal/change-user-modal-field";

const mapStateToProps = (state: State) => {
    const {user} = state.userModal;
    return {user};
};

const mapDispatchToProps = dispatch => ({
    onSave() {
        dispatch(saveUser());
    },

    onCancel() {
        dispatch(closeUserModal());
    },

    onChange(field: string, value) {
        dispatch(changeUserModalField(field, value));
    }
});

const createOnChange = (onChange, field: string) => value => onChange(field, value);

const UserForm = connect(mapStateToProps, mapDispatchToProps)(({user, onSave, onCancel, onChange}) =>
    user
        ?
        <div className="user-form">
            <InputText value={user.user_name} onChange={createOnChange(onChange, "user_name")}
                       label="Name of the user"/>
            <InputText value={user.user_custom} onChange={createOnChange(onChange, "user_custom")}
                       label="Custom parameter for user identification"/>
            <InputEmail value={user.email} onChange={createOnChange(onChange, "email")} label="Email"/>

            {!(user.user_id == null)
                ? <Checkbox value={user.enabled} onChange={createOnChange(onChange, "enabled")}
                            label="Whether or not this user is enabled"/>
                : <span/>}

            <Button onClick={onSave} label="Save"/>
            &nbsp;
            <Button onClick={onCancel} label="Close"/>
        </div>
        : null
);

export default UserForm;