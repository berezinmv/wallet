import React from "react";
import Datetime from "react-datetime";
import moment from "moment";
import ControlWrapper from "../control-wrapper/control-wrapper";
import classNames from "classnames";
import "react-datetime/css/react-datetime.css";
import "./datetime-picker.css";

const createOnChange = (onChange) => value => {
    if (typeof value === "string") {
        return;
    }
    onChange(value.utc().format());
};

const DateTimePicker = ({value, defaultValue, onChange, label, className, validator}) => (
    <ControlWrapper label={label} errorMessage={validator && validator(value)}>
        <Datetime className={classNames("datetime-picker-control", className)} value={value && moment(value)}
                  defaultValue={defaultValue} onChange={onChange && createOnChange(onChange)}/>
    </ControlWrapper>
);

export default DateTimePicker;