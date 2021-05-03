import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
    const renderCartItems = (): JSX.Element[] => {
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
    return (
        <>
            <div
             style={{ display: 'flex', 
                    flexDirection: 'column',
                    flexGrow: 2}}>
                <h3>Cart</h3>
                {renderCartItems()}
            </div>
        </>
    )
}

export default Cart;