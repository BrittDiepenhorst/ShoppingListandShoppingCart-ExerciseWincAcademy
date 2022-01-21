import React from "react"

function ListItem({ item, clickItem }) {
    return (
        <li
            key={item.id}
            className="list-item"
            onClick={clickItem}
            value={item.title}
        ><div>{item.title}</div>
        </li>
    )
};

export default ListItem;