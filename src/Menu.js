import React from "react";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}>Home</li>
      <li onClick={close}>Portfolio</li>
      <li onClick={close}>Blog</li>
      <li onClick={close}>Contact</li>
    </ul>
  </div>
);