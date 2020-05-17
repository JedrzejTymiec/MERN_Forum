import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";
import Buttons from "./Buttons";
import Avatar from "./Avatar";

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark>
          <NavbarBrand href="/">Forum</NavbarBrand>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fas fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input placeholder="Search" />
          </InputGroup>
          {this.props.isLogged ? (
            <Avatar user={this.props.user} logInOut={this.props.logInOut} />
          ) : (
            <Buttons />
          )}
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
