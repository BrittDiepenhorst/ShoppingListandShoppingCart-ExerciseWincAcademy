import React from "react"
import List from "./List"

function ShoppingCart({ items, clickItemWontModify }) {
    return (
        <div className="shopping-cart">
            <List
                key={items.id}
                items={items}
                clickItem={clickItemWontModify}
            />

        </div>
    )
}

export default ShoppingCart;