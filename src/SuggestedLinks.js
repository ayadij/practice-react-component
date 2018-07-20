import React from "react";
import "./SuggestedLinks.css";
import LinkItem from "./LinkItem";

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
          link_external={"http://www.sentoucards.com"}
          link_class={"home-link"}
        />
        <LinkItem
          title={"Campaign Store"}
          link_external={"http://www.sentoucards.com"}
          link_class={"campaign-store-link"}
        />
        <LinkItem
          title={"Download"}
          link_external={"http://www.sentoucards.com"}
          link_class={"download-link"}
        />
        <LinkItem
          title={"Send a Card"}
          link_external={"http://www.sentoucards.com"}
          link_class={"send-a-card-link"}
        />
      </div>
    );
  }
}

export default SuggestedLinks;
