import * as React from 'react';
import styles from '../styles/components/suggestedLinks.scss';
import LinkItem from './LinkItem';

type SuggestedLink = {
  id: string;
  type: string;
  value: Link;
};

type Link = {
  title: string;
  link_external?: string;
  link_class?: string;
  document?: string;
};

type Props = {
  links?: SuggestedLink[];
  title?: string;
};

class SuggestedLinks extends React.Component<Props, {}> {
  render() {
    return (
      // Takes SuggestedLinks[]
      <div className={styles.suggestedLinks}>
        <div className={styles.heading}>
          <div className={styles.title}>
            <h3>Suggested Links</h3>
          </div>
        </div>

        {this.props.links &&
          this.props.links.map((link, index) => {
            return (
              <LinkItem
                key={index}
                title={link.value.title}
                link_external={link.value.link_external}
                link_class={link.value.link_class}
                document={link.value.document}
              />
            );
          })}
      </div>
    );
  }
}

export default SuggestedLinks;
