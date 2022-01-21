import React from "react"
import ListItem from "./ListItem"

function List({ items, onItemClick }) {
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        onItemClick={() => { item.onItemClick(item) }}
                    // clickitem={() => item.shoppingListItems.onItemClick(item.shoppingListItems.id)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default List;