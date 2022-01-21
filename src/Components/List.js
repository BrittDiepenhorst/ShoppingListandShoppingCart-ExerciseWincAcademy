import React, { Component } from "react"
import ListItem from "./ListItem"

class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            clickItem={() => { this.props.clickItem(item) }}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;