import React from "react";
import ListItem from "./list-item";
import "./list.css";

const List = ({items = [], getId, getName, selectedId, onClick, renderItem}) => (
    <div className="list">
        <ul>
            {items.map((item) => <ListItem key={`list_item_${getId(item)}`} onClick={onClick && (() => onClick(item))}
                                           selected={selectedId === getId(item)} item={item} renderItem={renderItem}/>)}
        </ul>
    </div>
);

export default List;