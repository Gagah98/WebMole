import React, { Component } from 'react'
import Nav from './Nav'
import Home from './Home'
import CV from './CV'
import Footer from './Footer'


class App extends Component {
    render() {
        return (
            <div>
            <Nav />
            <Home />
            <CV />
            <Footer />
            </div>
        )
    }

}

export default App