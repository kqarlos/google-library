import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </StoreProvider>
      </div>
    </Router>
  );
}


export default App;
