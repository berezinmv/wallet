import React from "react";
import "./button.css";
import appendClassName from "../../../utils/append-classname";

/**
 * Button
 * @param label      - button label
 * @param onClick    - click handler
 * @param disabled   - disabled state
 * @param className  - css class
 * @constructor
 */
const Button = ({label, onClick, disabled, className}) => (
    <button className={appendClassName("button-control", className)} onClick={onClick} disabled={disabled}>
        {label}
    </button>
);

export default Button;