import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

class SidebarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar-nav">
        <Nav vertical>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/posts-list/">Posts List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/users-list/">Registred Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact/">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about/">About</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default SidebarNav;
