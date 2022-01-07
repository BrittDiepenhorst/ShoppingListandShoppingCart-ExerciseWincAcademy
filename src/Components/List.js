import React, { Component } from "react"
import ListItem from "./ListItem"

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: 'Apples' },
                { id: 2, title: 'Carton of milk' }
            ]
        }
    }

    onItemClick(item) {
        console.log(`Clicked ${item.id}: ${item.title}`);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.groceryItems.map((item) => (
                        <ListItem
                            key={item.id}
                            item={item}
                            clickItem={() => this.onItemClick(item)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default List;