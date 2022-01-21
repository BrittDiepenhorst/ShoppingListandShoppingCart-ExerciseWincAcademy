import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"


class Container extends Component {
    constructor(props) {
        super(props)
        this.onItemClick = this.onItemClick.bind(this);
        this.state = {
            groceryItems: [
                { id: 1, title: 'Apples' },
                { id: 2, title: 'Carton of milk' }
            ],
            shoppingListItems: [
                { id: 3, title: 'Bananas' }
            ]
        }
    }

    onItemClick(item) {
        console.log(`Clicked ${item.id}: ${item.title}`);
    }

    render() {
        return (
            <div>
                <ShoppingCart
                    key={this.state.shoppingListItems.id}
                    items={this.state.shoppingListItems}
                    clickitem={this.onItemClick}
                // clickitem={this.state.onItemClick}
                />

                <GroceryList
                    key={this.state.groceryItems.id}
                    items={this.state.groceryItems}
                    clickitem={this.onItemClick}
                // clickitem={this.state.onItemClick}
                />
            </div>
        )
    }
}

export default Container;