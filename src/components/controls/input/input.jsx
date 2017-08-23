import React from "react";
import ControlWrapper from "../control-wrapper/control-wrapper";
import "./input.css";
import classNames from "classnames";

const createOnChange = onChange => (event: Event) => onChange && onChange(event.target.value);

/**
 * Input
 * @param type         - input type
 * @param className    - css class
 * @param value        - input value
 * @param onChange     - callback on value change
 * @param placeholder  - input placeholder
 * @param label        - input label
 * @param validator    - validation function
 * @constructor
 */
const Input = ({type = "text", className, value, onChange, placeholder, label, validator}) => (
    <ControlWrapper label={label} errorMessage={validator && validator(value)}>
        <input className={classNames("input-control", className)} type={type} value={value}
               onChange={createOnChange(onChange)} placeholder={placeholder}/>
    </ControlWrapper>
);

export default Input;