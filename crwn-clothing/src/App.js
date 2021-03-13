import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderComponent from './components/header-component/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop/" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
