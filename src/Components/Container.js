import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"
import '../Container.css'

class Container extends Component {
    constructor(props) {
        super(props)

        this.clickItem = this.clickItem.bind(this);
        this.clickItemWontModify = this.clickItemWontModify.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.addItemToGroceryList = this.addItemToGroceryList.bind(this);

        this.state = {
            groceryItems: [
                { id: 1, title: 'Apples' },
                { id: 2, title: 'Carton of milk' },
                { id: 4, title: 'Kiwis' }
            ],
            shoppingListItems: [
                { id: 3, title: 'Bananas' },
                { id: 5, title: 'Bread' }
            ]
        }
    }

    clickItem(item) {
        console.log(`Clicked ${item.id}: ${item.title}`)
        this.setState({
            shoppingListItems: [...this.state.shoppingListItems, item]
        })
    };

    clickItemWontModify(item) {
        console.log(`Clicked ${item.id}: ${item.title} but I wont modify anything!`)
    }

    emptyCart() {
        this.setState(() => {
            return {
                shoppingListItems: []
            }
        });
    }

    addItemToGroceryList = (event) => {
        this.setState({
            groceryItems: [...this.state.groceryItems, {
                id: this.state.groceryItems.length +
                    this.state.shoppingListItems.length +
                    1,
                title: event.target.value,
                amount: 1,
            }]
        })
        event.preventDefault();
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
                        addItemToGroceryList={this.addItemToGroceryList}
                    />
                </div>

                <div>
                    <h1>Shopping cart</h1>
                    <button type="button" onClick={this.emptyCart}>Empty Cart</button>
                    <ShoppingCart
                        key={this.state.shoppingListItems.id}
                        items={this.state.shoppingListItems}
                        clickItem={this.clickItemWontModify}
                    />
                </div>
            </div>
        )
    }
}

export default Container;