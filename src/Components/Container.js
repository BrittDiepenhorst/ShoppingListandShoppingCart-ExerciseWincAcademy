import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"
import '../Container.css'

class Container extends Component {
    constructor(props) {
        super(props)
        this.clickItem = this.clickItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.handleSumbit = this.handleSubmit.bind(this);
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
        console.log(`Clicked ${item.id}: ${item.title}`)
        this.setState({
            shoppingListItems: [...this.state.shoppingListItems, item]
        })
    };

    emptyCart() {
        this.setState(() => {
            return {
                shoppingListItems: []
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            shoppingListItems: [...this.state.shoppingListItems, event.target.value]
        })
    }

    render() {
        return (
            <div className="shopping">
                <div>
                    <h1>Grocery list</h1>
                    <GroceryList
                        key={this.state.groceryItems.id}
                        items={this.state.groceryItems}
                        clickItem={this.clickItem}
                        handleSubmit={this.handleSubmit}
                    />
                </div>

                <div>
                    <h1>Shopping cart</h1>
                    <button type="button" onClick={this.emptyCart}>Empty Cart</button>
                    <ShoppingCart
                        key={this.state.shoppingListItems.id}
                        items={this.state.shoppingListItems}
                        clickItem={this.clickItem}
                    />
                </div>
            </div>
        )
    }
}

export default Container;