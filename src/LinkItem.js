import React from "react";
import logo from "./logo.svg";
import "./SuggestedLinks.css";

class LinkItem extends React.Component {
  render() {
    return (
      <div className="linkItem">
        <div className="linkIcon">
          <img src={logo} className="linkItemIcon" alt="logo" />
        </div>
        <div className="linkTitle">
          <h3>Link Title</h3>
        </div>
      </div>
    );
  }
}

export default LinkItem;
