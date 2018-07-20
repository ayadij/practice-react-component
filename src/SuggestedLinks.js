import React from "react";
import "./SuggestedLinks.css";
import LinkItem from "./LinkItem";

import logo from "./logo.svg";
import play from "./play.png";
import download from "./download.png";
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

        <LinkItem
          title={"Home"}
          link_external={"https://www.sendoutcards.com/"}
          link_class={"play"}
        />
        <LinkItem
          title={"Campaign Store"}
          link_external={"https://www.sendoutcards.com/app/campaign-store"}
          link_class={"logo"}
        />
        <LinkItem
          title={"Download"}
          link_external={"https://www.sendoutcards.com/"}
          link_class={"download"}
        />
        <LinkItem
          title={"Send a Card"}
          link_external={"https://www.sendoutcards.com/"}
          link_class={"play"}
        />
      </div>
    );
  }
}

export default SuggestedLinks;
