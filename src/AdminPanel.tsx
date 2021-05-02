import React, { useState } from 'react';
import IProduct from './types';

const AdminPanel = ({ storeItems, addItem, deleteItem }) => {
    const [newName, setNewName] = useState('');
    const [newMake, setNewMake] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const handleNewItem = (e) => {
        e.preventDefault();
        console.log(newMake);
        console.log(newName);
        console.log(newPrice);
        console.log(newDescription);
        const newItem = {
            'name': newName,
            'make': newMake,
            'price': Number.parseInt(newPrice),
            'description': newDescription,
        };
        addItem(newItem);
    }
    const renderStoreItems = (): JSX.Element[] => {
        return storeItems.map((storeItem: IProduct, i: number) => (
            <>
                <li 
                key={i}>
                {storeItem.name}
                <button onClick={() => deleteItem(storeItem.id)}>Delete</button>
                </li>
            </>
        ))
    }
    const addItemForm = (): JSX.Element => {
        return (<>
            <form onSubmit={handleNewItem}>
                <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                <input type="text" placeholder="Make" value={newMake} onChange={(e) => setNewMake(e.target.value)} />
                <input type="text" placeholder="Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
                <input type="text" placeholder="Description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                <input type="submit" value="Add"/>
            </form>
        </>)
    }
    return (
        <>
            <h1>Admin Panel</h1>
            <h3>Add new items: </h3>
            {addItemForm()}
            <h3>All items in store: </h3>
            {renderStoreItems()}
        </>
    )
}

export default AdminPanel