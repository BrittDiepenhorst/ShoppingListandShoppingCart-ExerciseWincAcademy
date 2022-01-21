import React from "react"

function ListItem({ item, onItemClick }) {
    return (
        <li
            key={item.id}
            className="list-item"
            onClick={onItemClick}
            value={item.title}
        >{item.title}
        </li>
    )
}

export default ListItem;