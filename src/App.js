import React, { Component } from 'react'
import Popup from "reactjs-popup";
import Nav from './Nav'
import Home from './Home'
import CV from './cv'
import Footer from './Footer'
import PortfolioList from './PortfolioList'

import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


  const contentStyle = {
    background: "#8CBFFF",
    width: "100%",
    border: "none"
  };


class App extends Component {
    render() {
        return (
          
            <div>
              <Router>
                <Nav />
              <Popup
      modal
      overlayStyle={{ background: "#8CBFFF" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>

    <Switch>
          <Route exact path="/">
          <Home />
            <CV />
          </Route>
          <Route path="/portfolio">
            <PortfolioList />
          </Route>
          <Route path="/blog">
          </Route>
        </Switch>

            <Footer />
            </Router>
            </div>
        )
    }

}

export default App