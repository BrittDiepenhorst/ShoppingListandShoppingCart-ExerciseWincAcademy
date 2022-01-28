import React from "react"

function InputField({ handleSubmit }) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a grocery item"
                    // value={event.target.value}
                    onSubmit={handleSubmit}
                // key={item.id}
                >
                </input>
            </form>
        </div>
    )
}

export default InputField;