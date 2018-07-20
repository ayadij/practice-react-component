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

        <LinkItem />
        <LinkItem />
        <LinkItem />
        <LinkItem />
      </div>
    );
  }
}

export default SuggestedLinks;
