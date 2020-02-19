import React, { Component } from 'react'
import Nav from './Nav'
import Home from './Home'
import CV from './cv'

class App extends Component {
    render() {
        return (
            <div>
            <Nav />
            <Home />
            <CV />
            </div>
        )
    }

}

export default App