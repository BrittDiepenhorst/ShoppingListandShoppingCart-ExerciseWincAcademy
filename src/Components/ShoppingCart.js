import React from "react"
import List from "./List"

function ShoppingCart({ items, clickItem }) {
    return (
        <List
            key={items.id}
            items={items}
            clickItem={clickItem}
        />
    )
}

export default ShoppingCart;