import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import getSelectedUser from "../../utils/get-selected-user";
import {addNewOperation} from "../../actions/operation-modal/add-new-operation";
import Button from "../../components/controls/button/button";

const mapStateToProps = (state: State) => ({
    label: "Add operation",
    disabled: getSelectedUser(state) == null
});

const mapDispatchToProps = dispatch => ({
    onClick() {
        dispatch(addNewOperation());
    }
});

const CreateOperationButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default CreateOperationButton;