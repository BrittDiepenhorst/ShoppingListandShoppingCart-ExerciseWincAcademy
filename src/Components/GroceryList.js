import React from "react"
import List from "./List"

function GroceryList({ items, clickItem }) {
    return (
        console.log(items),
        <List
            key={items.id}
            items={items}
            clickItem={clickItem}
        />
    )
}

export default GroceryList;