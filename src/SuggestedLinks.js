import React from "react";
import "./SuggestedLinks.scss";

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
            <div />
          </div>
          <div className="linkTitle">
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedLinks;

// "suggestedLinks": [
//   {
//     "type": "links",
//     "value": {
//       "title": "Home",
//       "link_external": "http://www.sendoutcards.com",
//       "link_class": null,
//       "document": null
//     },
//     "id": "5dc693f0-cbc3-409c-bdb2-90b7704f89d7"
//   }
// ]
