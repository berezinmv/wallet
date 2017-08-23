import {connect} from "react-redux";
import {changeTo} from "../../actions/change-dates";
import DateTimePicker from "../../components/controls/datetime-picker/datetime-picker";
import type {State} from "../../reducers/state";

const mapStateToProps = (state: State) => ({value: state.dateTo, label: "To"});

const mapDispatchToProps = dispatch => ({
    onChange(value) {
        dispatch(changeTo(value));
    }
});

const DatePickerTo = connect(mapStateToProps, mapDispatchToProps)(DateTimePicker);

export default DatePickerTo;