import React from 'react';
import Product from './Product';
import IProduct from './types';

const ProductListing = (props: {prodList: IProduct[]}) => {
    const getProdList = (): JSX.Element[] => {
        return props.prodList.map((prod: IProduct, i: number) => (
            <>
                <Product
                key={i}
                id={prod.id}
                name={prod.name}
                make={prod.make}
                price={prod.price}
                description={prod.description}>
                </Product>
                {props.prodList.length === i+1
                 ? null
                 : <hr key={'line' + i} />}
            </>
        ))
    }
    return (
        <>
            <h2>Viewing {props.prodList.length} products</h2>
            {getProdList()}
        </>
    )
}

export default ProductListing;