import React from "react"
import List from "./List"

function GroceryList({ items, onItemClick }) {
    return (
        console.log(items),
        <List
            key={items.id}
            items={items}
            clickitem={onItemClick}
        />
    )
}

export default GroceryList;