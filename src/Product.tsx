import React, { useState } from 'react';

const Product = ({ id, name, make, price, description, addToCartFn }) => {
    const [qty, setQty] = useState(1);
    return (
        <>
            <h3>{name}</h3>
            <h4>{make} — {price}</h4>
            {description
             ? <p>{description}</p>
             : <p>No description available for {name}</p>}
            <input 
             type="number"
             name="qtySelector" 
             value={qty} 
             onChange={(e) => setQty(Number.parseInt(e.target.value))}
             min="1"
             style={{ width: '4em', textAlign: 'center' }} />
            <button onClick={() => addToCartFn({
                id, name, make, price, description, 'quantity': qty
            })}>Add {qty} to Cart</button>
        </>
    )
}

export default Product