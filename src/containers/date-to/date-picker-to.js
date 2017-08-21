import {connect} from "react-redux";
import {changeTo} from "../../actions/change-dates";
import DateTimePicker from "../../components/controls/datetime-picker/datetime-picker";

const mapStateToProps = state => ({value: state.dateTo});

const mapDispatchToProps = dispatch => ({
    onChange(value) {
        dispatch(changeTo(value));
    }
});

const DatePickerTo = connect(mapStateToProps, mapDispatchToProps)(DateTimePicker);

export default DatePickerTo;