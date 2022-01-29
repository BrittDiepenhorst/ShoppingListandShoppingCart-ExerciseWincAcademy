import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList({ items, onItemClick, onItemAdd }) {
    return (
        console.log(items),
        <div className="grocery-list">
            <h1>Shopping list</h1>
            <InputField
                onSubmit={onItemAdd} />

            <List
                key={items.id}
                items={items}
                onItemClick={onItemClick} />
        </div>
    );
}

export default GroceryList;