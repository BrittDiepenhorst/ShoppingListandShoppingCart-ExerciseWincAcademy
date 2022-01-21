import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"


class Container extends Component {
    constructor(props) {
        super(props)
        this.clickItem = this.clickItem.bind(this);
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

    clickItem(item) {
        console.log(`Clicked ${item.id}: ${item.title}`);

    };

    render() {
        return (
            <div>
                <ShoppingCart
                    key={this.state.shoppingListItems.id}
                    items={this.state.shoppingListItems}
                    clickItem={this.clickItem}
                />

                <GroceryList
                    key={this.state.groceryItems.id}
                    items={this.state.groceryItems}
                    clickItem={this.clickItem}
                />
            </div>
        )
    }
}

export default Container;