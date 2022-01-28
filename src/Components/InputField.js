import React from "react"

function InputField({ addItemToGroceryList }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Add a grocery item"
            >
            </input>
            <button type="button" onClick={addItemToGroceryList}>Add</button>
        </div>
    )
}

export default InputField;

