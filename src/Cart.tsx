import React from 'react';
import { usePreviousState } from './hooks/usePreviousState';
import { ICartItem } from './types';

const Cart = ({ cartItems, removeFromCart }) => {
    const prevCart = usePreviousState(cartItems) || [];
    const renderChanges = (): JSX.Element => {
        return (
            <div>
                <h5>Previous</h5>

            </div>
        )
    }
    const renderCartItems = (cartItems: Array<ICartItem>): JSX.Element[] => {
        return cartItems.map(cartItem => (
            <div key={'cart'+cartItem.id}>
                <span>
                    <h4>{cartItem.name}</h4>
                    <button onClick={() => removeFromCart(cartItem.id)}>remove</button>
                </span>
                <p>{cartItem.make}</p>
                <p>{cartItem.quantity} x Rs. {cartItem.price}</p>
            </div>
        ))
    }
    console.log('Prev cart: ')
    console.log(prevCart)
    console.log(`cartItems is ${typeof cartItems}, prevCart is ${typeof prevCart}`)
    return (
        <>
            <div
             style={{ display: 'flex', 
                    flexDirection: 'column',
                    flexGrow: 2}}>
                <h3>Cart</h3>
                {renderCartItems(cartItems)}
                {renderCartItems(prevCart)}
                
            </div>
        </>
    )
}

export default Cart;