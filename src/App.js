import { Switch, Route } from 'react-router';

import HomePage from './pages/homepage/HomePage.component';
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" components></Route>
      </Switch>
    </div>
  );
}

export default App;
