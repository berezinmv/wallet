import React from "react";
import ControlWrapper from "../control-wrapper/control-wrapper";
import "./checkbox.css";

const createOnChange = onChange => (event: Event) => onChange(event.target.checked);

const Checkbox = ({value, onChange, label}) => (
    <ControlWrapper label={label}>
        <input type="checkbox" className="checkbox-control" checked={value || false}
               onChange={onChange && createOnChange(onChange)}/>
    </ControlWrapper>
);

export default Checkbox;