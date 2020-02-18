import React from 'react'
import logo from './img/webmole_icon.png'

const nav = () => {
    return (
        <nav>
 <a href="/home"> <img id="logo" src={logo} alt="webmole logo"></img> </a>
  <a href="/portfolio" className="nav-link">portfolio</a>
  <a href="/blog" className="nav-link">blog</a>
  <a href="/contact" className="nav-link">contact</a>
</nav>
    )
}

export default nav;