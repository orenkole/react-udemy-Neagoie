import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HeaderComponent from './components/header-component/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/shop" component={ShopPage} />
        <Route exact={true} path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
