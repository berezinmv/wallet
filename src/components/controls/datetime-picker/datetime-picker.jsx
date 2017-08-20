import React from "react";
import Datetime from "react-datetime";
import ControlWrapper from "../control-wrapper/control-wrapper";
import appendClassName from "../../../utils/append-classname";
import "./datetime-picker.css";

const createOnChange = (onChange) => value => {
    if (typeof value === "string") {
        return;
    }
    onChange(value);
};

const DateTimePicker = ({value, onChange, label, className, validator}) => (
    <ControlWrapper label={label} errorMessage={validator && validator(value)}>
        <Datetime className={appendClassName("datetime-picker-control", className)} value={value}
                  onChange={onChange && createOnChange(onChange)}/>
    </ControlWrapper>
);

export default DateTimePicker;