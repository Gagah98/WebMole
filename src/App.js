import React, { Component } from 'react'
import Popup from "reactjs-popup";
import Nav from './Nav'
import Home from './Home'
import CV from './cv'
import Footer from './Footer'

import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";


  const contentStyle = {
    background: "#8CBFFF",
    width: "100%",
    border: "none"
  };


class App extends Component {
    render() {
        return (
            <div>
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
            <Home />
            <CV />
            <Footer />
            </div>
        )
    }

}

export default App