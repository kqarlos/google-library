import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from './utils/GlobalState';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Nav from './components/Nav';


function App() {


  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/:nomatch" component={Search} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}


export default App;
