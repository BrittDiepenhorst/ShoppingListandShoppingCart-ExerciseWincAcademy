import React from "react"
import List from "./List"
import InputField from "./InputField"

function GroceryList({ items, clickItem, handleSubmit }) {
    return (
        console.log(items),
        <div>
            <InputField
                type="text"
                onSubmit={handleSubmit}
            />
            <List
                key={items.id}
                items={items}
                clickItem={clickItem}
            />
        </div>
    )
}

export default GroceryList;