import React from 'react';
// import './App.css';

import { connect } from 'react-redux';

import AdminPanel from './AdminPanel';
import StoreFront from './Storefront';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App({ appState, delItemAdmin, addItemAdmin, addItemCart, removeItemCart }) {
  return (
    <Router>
      <div className="App">
        <h1>Welcome</h1>
        <ul>
          <li><Link to="/">Go to Home</Link></li>
          <li><Link to="/admin">Go to admin panel</Link></li>
          <li><Link to="/storefront">Go to storefront</Link></li>
        </ul>
        <Switch>
          <Route exact path="/">At home</Route>
          <Route path="/admin">
            <AdminPanel
             storeItems={appState.storeItems}
             addItem={addItemAdmin}
             deleteItem={delItemAdmin}
            ></AdminPanel>
          </Route>
          <Route path="/storefront">
            <StoreFront
             storeItems={appState.storeItems}             
             cart={appState.cart}
             addToCart={addItemCart}
             removeFromCart={removeItemCart}></StoreFront>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  appState: state
});

const mapDispatchToProps = (dispatch) => ({
  delItemAdmin: (id) => dispatch({type: 'ADMIN/DELETE_ITEM', itemId: id}),
  addItemAdmin: (newItem) => dispatch({type: 'ADMIN/ADD_ITEM', newItem}),
  addItemCart: (newItem) => dispatch({type: 'CART/ADD_ITEM', newItem}),
  removeItemCart: (id) => dispatch({type: 'CART/REMOVE_ITEM', itemId: id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
