import React from "react";
import { Menu } from "semantic-ui-react";

class Nav extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary style={{ background: "teal", border: "none" }}>
        <Menu.Item
          name="Home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          style={{ color: "white" }}
        />
        <Menu.Item
          name="About"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
          style={{ color: "white" }}
        />
        <Menu.Item
          name="Contact"
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
          style={{ color: "white" }}
        />
      </Menu>
    );
  }
}

export default Nav;
