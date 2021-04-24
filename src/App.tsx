import React from 'react';
import './App.css';
import AdminPanel from './AdminPanel';
import StoreFront from './Storefront';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
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
            <AdminPanel></AdminPanel>
          </Route>
          <Route path="/storefront">
            <StoreFront></StoreFront>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
