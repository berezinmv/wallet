import React from "react";
import classNames from "classnames";

const ListItem = ({onClick, getName, selected, item, renderItem}) => (
    <li className={classNames("list__item", {"selected": selected})}
        onClick={() => !selected && onClick && onClick()}>
        {renderItem && renderItem(item) || getName && getName(item)}
    </li>
);

export default ListItem;