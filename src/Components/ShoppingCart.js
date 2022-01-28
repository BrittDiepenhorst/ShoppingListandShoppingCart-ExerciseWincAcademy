import React from "react"
import List from "./List"

function ShoppingCart({ items, clickItem }) {
    return (
        <div>
            <List
                key={items.id}
                items={items}
                clickItem={clickItem}
            />

        </div>
    )
}

export default ShoppingCart;