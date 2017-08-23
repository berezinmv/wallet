import {connect} from "react-redux";
import {searchChange} from "../../actions/search-change";
import InputText from "../../components/controls/input-text/input-text";

const mapStateToProps = (state: State) => ({
    value: state.usersSearch,
    placeholder: "Search"
});

const mapDispatchToProps = dispatch => ({
    onChange(text) {
        dispatch(searchChange(text))
    }
});

const UsersSearchInput = connect(mapStateToProps, mapDispatchToProps)(InputText);

export default UsersSearchInput;