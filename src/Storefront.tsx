import React, { useState } from 'react';
import Cart from './Cart';
import { useInput } from './hooks/useInput';
import ProductListing from './ProductListing';
import Search from './Search';
import IProduct from './types';

const productList: IProduct[] = [
    {id: '1', name: 'Prod A', make: 'The best one', price: 42, description: 'The best product A in the market'},
    {id: '2', name: 'Prod B', make: 'Blue', price: 100},
    {id: '3', name: 'YAPA', make: 'Another', price: 90.101, description: 'Yet another product A'},
    {id: '4', name: 'Prod x', make: 'The unknown one', price: 24, description: ''},
    {id: '5', name: 'Prod y', make: 'Green', price: 10000.42, description: 'Buy me!'},
];

const StoreFront = (props: {}) => {
    const {value, onChange} = useInput('');
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
            <h1>Store Front</h1>
            <Search term={searchTerm} setTerm={setSearchTerm}></Search>
            <input
             type="text"
             name="search-form"
             value={value}
             onChange={onChange} />
             Search2: {value}
            <p>Searched for {searchTerm}</p>
            <ProductListing prodList={productList}></ProductListing>
            <Cart></Cart>
        </>
    );
}

export default StoreFront;