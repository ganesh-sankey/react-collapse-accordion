import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

class ListGroupCollapseAccordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collapse: false };
  }

  toggle = () => {
    if(this.props.isAccordion) {
      this.props.toggle(this.props.listItem);
    } else {
      this.setState({ collapse: !this.state.collapse });
    }
  }

  render() {
    const listItem = this.props.listItem;
    return (
      <ListGroupItem>
        <div>
          <p onClick={this.toggle}>
            <strong>{listItem.title}</strong>
          </p>
          <Collapse isOpen={this.props.isAccordion?this.props.isOpen:this.state.collapse}>
            {listItem.description}
          </Collapse>
        </div>
      </ListGroupItem>
    );
  }
}

export default ListGroupCollapseAccordion;