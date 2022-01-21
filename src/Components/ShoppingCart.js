import React from "react"
import List from "./List"

function ShoppingCart({ items, onItemClick }) {
    return (
        <List
            key={items.id}
            items={items}
            clickitem={onItemClick}
        />
    )
}

export default ShoppingCart;