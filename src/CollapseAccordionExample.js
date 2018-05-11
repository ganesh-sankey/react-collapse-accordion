import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap';
import ListGroupCollapseAccordion from './ListGroupCollapseAccordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const listItems = [
  {
    title: 'Title 1',
    description: 'It is description of Title 1'
  },
  {
    title: 'Title 2',
    description: 'It is description of Title 2'
  },
  {
    title: 'Title 3',
    description: 'It is description of Title 3'
  }
];

class CollapseAccordionExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAccordion: false,
      dropdownOpen: false
    };
  }

  toggle = (listItem) => {
    this.setState({
      collapse: this.state.collapse === listItem ? null : listItem
    });
  }

  toggleDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleCollapseBehaviour = (isAccordion) => {
    this.setState({
      isAccordion: isAccordion
    });
  }

  render() {
    return (
      <div>
        <Container>
          {
            listItems.map((listItem) =>
              <ListGroupCollapseAccordion
                listItem={listItem}
                isOpen={this.state.collapse === listItem}
                toggle={() => this.toggle(listItem)}
                isAccordion={this.state.isAccordion}/>
          )}

          <div>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
              <DropdownToggle caret>
                Change Collapse Behaviour
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.toggleCollapseBehaviour(false)}>Default(Collapse)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.toggleCollapseBehaviour(true)}>Accordion</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            {this.state.isAccordion?'Accordion':'Default(Collapse)'}
          </div>
        </Container>
        </div>
    );
  }
}

export default CollapseAccordionExample;