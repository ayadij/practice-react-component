import React from "react";
import "./SuggestedLinks.css";
import logo from "./logo.svg";

// type Props = {
//   title: string;
//   linkExternal?: string;
//   linkClass?: string;
//   document?: string;
//   newTab?: boolean;
// };

class SuggestedLinks extends React.Component {
  render() {
    return (
      // Takes SuggestedLinks[]
      <div className="suggestedLinks">
        <div className="heading">
          <div className="title">
            <h3>Suggested Links</h3>
          </div>
        </div>

        <div className="linkItem">
          <div className="linkIcon">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="linkTitle">
            <h3>Link Title</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedLinks;
