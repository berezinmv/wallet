import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import getSelectedUser from "../../utils/get-selected-user";
import {editUser} from "../../actions/user-modal/edit-user";
import Button from "../../components/controls/button/button";

const mapStateToProps = (state: State) => ({
    label: "Edit user",
    disabled: getSelectedUser(state) == null
});

const mapDispatchToProps = dispatch => ({
    onClick() {
        dispatch(editUser())
    }
});

const EditUserButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default EditUserButton;