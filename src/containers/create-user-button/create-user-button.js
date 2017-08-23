import {connect} from "react-redux";
import type {State} from "../../reducers/state";
import Button from "../../components/controls/button/button";
import {createUser} from "../../actions/user-modal/create-user";

const mapStateToProps = (state: State) => ({
    label: "Create new user"
});

const mapDispatchToProps = dispatch => ({
    onClick() {
        dispatch(createUser())
    }
});

const CreateUserButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default CreateUserButton;