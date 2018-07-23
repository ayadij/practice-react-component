import * as React from "react";
import { ICONS } from "../../app/constants";
import Icon from "../../chrome/components/Icon";
import styles from "../styles/components/suggestedLinks.scss";
import { Courses } from "../containers/Training";

type Props = {
  title: string;
  link_external?: string;
  link_class?: string;
  document?: string;
};

class LinkItem extends React.Component<Props, {}> {
  render() {
    const { title, link_external, link_class, document } = this.props;
    return (
      <div className={styles.linkItem}>
        <div className={styles.linkIcon}>
          <Icon
            icon={
              link_external
                ? ICONS.CAMPAIGN
                : link_class
                  ? ICONS.STAR
                  : document
                    ? ICONS.DOCUMENT
                    : ICONS.DOCUMENT
            }
          />
        </div>
        <div className={styles.linkTitle}>
          <a
            href={
              link_external
                ? link_external
                : link_class
                  ? link_class
                  : document
                    ? document
                    : ""
            }
          >
            {this.props.title}
          </a>
        </div>
      </div>
    );
  }
}

export default LinkItem;
