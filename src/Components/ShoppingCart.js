import React from "react"
import List from "./List"

function ShoppingCart({ items, onItemClick, onEmptyClick }) {
    return (
        <div className="shopping-cart">
            <h1>Shopping cart</h1>
            <button type="button" onClick={onEmptyClick}>Empty Cart</button>
            <List
                key={items.id}
                items={items}
                onItemClick={onItemClick}
                showQuantities={true}
            />
        </div>
    );
}

export default ShoppingCart;