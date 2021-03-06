import { Switch, Route } from 'react-router';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './conponents/header/Header.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
