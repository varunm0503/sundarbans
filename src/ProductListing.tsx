import React from 'react';
import Product from './Product';
import { IProduct } from './types';

const ProductListing = ({ prodList, addToCart }) => {
    const getProdList = (): JSX.Element[] => {
        return prodList.map((prod: IProduct, i: number) => (
            <div key={i}>
                <Product
                key={i}
                id={prod.id}
                name={prod.name}
                make={prod.make}
                price={prod.price}
                description={prod.description}
                addToCartFn={addToCart} />
                {prodList.length === i+1
                 ? null
                 : <hr key={'line' + i} />}
            </div>
        ))
    }
    return (
        <>
            <div
             style={{ display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 3,}}>
                <h2>Viewing {prodList.length} products</h2>
                
                {getProdList()}
            </div>
            
        </>
    )
}

export default ProductListing;