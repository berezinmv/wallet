import React from "react";
import InputText from "../input-text/input-text";
import "./input-email.css";
import classNames from "classnames";
import inputEmailValidator from "./input-email-validator";


/**
 * Email input
 * @param value        - input value
 * @param onChange     - callback on value change
 * @param label        - input label
 * @param className    - css class
 * @param placeholder  - input placeholder
 * @param validator    - validation function
 * @constructor
 */
const InputEmail = ({value, onChange, label, className, placeholder = "example@abc.com", validator = inputEmailValidator}) => (
    <InputText className={classNames("input-email-control", className)} type="email" value={value}
               onChange={onChange}
               label={label} placeholder={placeholder} validator={validator}/>
);

export default InputEmail;