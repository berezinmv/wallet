import React from "react";
import ListItem from "./list-item";

const List = ({items = [], onClick}) => (
    <ul>
        {items.map(({id, name}) => <ListItem key={`list_item_${id}`} onClick={() => onClick(id)} label={name}/>)}
    </ul>
);

export default List;