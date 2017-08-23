import React from "react";

const Column = ({children, hidden}) => (
    <div className="column-layout__column" style={{visibility: hidden ? "hidden" : undefined}}>
        {children}
    </div>
);

export default Column;