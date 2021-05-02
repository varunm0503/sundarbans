import React from 'react';
import IProduct from './types';

const Product: React.FC<IProduct> = ({id, name, make, price, description}) => {
    return (
        <>
            <h3>{name}</h3>
            <h4>{make} — {price}</h4>
            {description
             ? <p>{description}</p>
             : <p>No description available for {name}</p>}
        </>
    )
}

export default Product