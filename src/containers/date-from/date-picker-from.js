import {connect} from "react-redux";
import {changeFrom} from "../../actions/change-dates";
import DateTimePicker from "../../components/controls/datetime-picker/datetime-picker";

const mapStateToProps = state => ({value: state.dateFrom});

const mapDispatchToProps = dispatch => ({
    onChange(value) {
        dispatch(changeFrom(value));
    }
});

const DatePickerFrom = connect(mapStateToProps, mapDispatchToProps)(DateTimePicker);

export default DatePickerFrom;