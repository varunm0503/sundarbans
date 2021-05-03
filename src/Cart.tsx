import React from 'react';

const Cart = ({ cartItems }) => {
    const renderCartItems = (): JSX.Element[] => {
        return cartItems.map(cartItem => (
            <div>
                <h4>{cartItem.name}</h4>
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