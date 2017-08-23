import React from "react";

const PanelToolbar = ({children}) => (
    <div className="panel__toolbar">
        {children}
        <hr/>
    </div>
);

export default PanelToolbar;