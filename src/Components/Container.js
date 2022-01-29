import React, { Component } from "react"
import ShoppingCart from "./ShoppingCart"
import GroceryList from "./GroceryList"
import '../Container.css'

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: 'Apples' },
                { id: 2, title: 'Carton of milk' },
                { id: 3, title: 'Kiwis' },
                { id: 4, title: 'Cheese' },
                { id: 5, title: 'Eggs' },
            ],
            shoppingListItems: [
                { id: 6, title: 'Bananas', amount: 1 },
                { id: 7, title: 'Bread', amount: 2 },
            ],
        };
    }

    clickItemWontModify(item) {
        console.log(`Clicked ${item.id}: ${item.title} but I wont modify anything!`)
    }

    addAmountToItem = (item, amount) => {
        this.setState({
            shoppingListItems: this.state.shoppingListItems.map((listItem) => {
                if (listItem.title === item.title) {
                    return {
                        id: listItem.id,
                        title: listItem.title,
                        amount: listItem.amount + amount,
                    };
                }
                return listItem;
            }),
        });
    };

    addGroceryItemToCart = (item) => {
        console.log(`addGroceryItemToCart: ${item.title}`);
        if (
            this.state.shoppingListItems
                .map((item) => item.title)
                .includes(item.title)
        ) {
            this.addAmountToItem(item, 1);
        } else {
            this.setState({
                shoppingListItems: [
                    ...this.state.shoppingListItems,
                    {
                        id: item.id,
                        title: item.title,
                        amount: 1,
                    },
                ],
            });
        }
    };

    emptyCart = () => {
        this.setState({
            shoppingListItems: [],
        });
    };

    addItemToGroceryList = (title) => {
        this.setState({
            groceryItems: [
                ...this.state.groceryItems,
                {
                    id: this.state.groceryItems.length +
                        this.state.shoppingListItems.length +
                        1,
                    title: title,
                    amount: 1,
                },
            ],
        });
    };

    render() {
        return (
            <div className="container">
                <div>
                    <GroceryList
                        key={this.state.groceryItems.id}
                        items={this.state.groceryItems}
                        onItemClick={this.addGroceryItemToCart}
                        onItemAdd={this.addItemToGroceryList}
                    />
                </div>

                <div>
                    <ShoppingCart
                        key={this.state.shoppingListItems.id}
                        items={this.state.shoppingListItems}
                        onItemClick={this.clickItemWontModify}
                        onEmptyClick={this.emptyCart}
                    />
                </div>
            </div>
        )
    }
}

export default Container;