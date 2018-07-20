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
          <div className={this.props.link_class}>
            <a href={this.props.link_external}>{this.props.title}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkItem;
// ```
// "suggestedLinks": [
//   {
//     "type": "links",
//     "value": {
//       "title": "Home",
//       "link_external": "http:www.sendoutcards.com",
//       "link_class": null,
//       "document": null
//     },
//     "id": "5dc693f0-cbc3-409c-bdb2-90b7704f89d7"
//   }
// ]
// ```
