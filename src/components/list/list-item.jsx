import React from "react";

const ListItem = ({label, onClick}) => (
    <li onClick={onClick}>{label}</li>
);

export default ListItem;