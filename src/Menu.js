import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
    <a href="/"> <li onClick={close}>Home</li> </a>
    <a href="/portfolio"> <li onClick={close}>Portfolio</li> </a>
    <a href="/blog"> <li onClick={close}>Blog</li> </a>
    <a href="/contact"><li onClick={close}>Contact</li> </a>
    </ul>
  </div>
);