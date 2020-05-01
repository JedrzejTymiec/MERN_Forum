import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container,
    Button
} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Forum</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/create-article">Create Article</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/posts-list/">Posts List</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact/">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about/">About</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                            <Button href="/register/">Sign up</Button>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;
