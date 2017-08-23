import React from "react";
import Input from "../input/input";
import "./input-text.css";
import classNames from "classnames";

/**
 * Text input
 * @param type         - input type
 * @param value        - input value
 * @param onChange     - callback on value change
 * @param placeholder  - input placeholder
 * @param label        - input label
 * @param className    - css class
 * @param validator    - validation function
 * @constructor
 */
const InputText = ({type = "text", value, onChange, placeholder, label, className, validator}) => (
    <Input className={classNames("input-text-control", className)} type={type} value={value} onChange={onChange}
           placeholder={placeholder} label={label} validator={validator}/>
);

export default InputText;