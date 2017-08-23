import {connect} from "react-redux";
import {changeFrom} from "../../actions/change-dates";
import DateTimePicker from "../../components/controls/datetime-picker/datetime-picker";
import type {State} from "../../reducers/state";

const mapStateToProps = (state: State) => ({value: state.dateFrom, label: "From"});

const mapDispatchToProps = dispatch => ({
    onChange(value) {
        dispatch(changeFrom(value));
    }
});

const DatePickerFrom = connect(mapStateToProps, mapDispatchToProps)(DateTimePicker);

export default DatePickerFrom;