import React, {Component} from 'react';
import {
    Navbar,
    Button,
    NavbarBrand,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
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
                <Navbar color="dark" dark>
                        <NavbarBrand href="/">Forum</NavbarBrand>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText><i class="fas fa-search"></i></InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Search" />
                        </InputGroup>
                            <div>
                                <Button href="/log-in/" className="mr-2">Log in</Button>
                                <Button href="/register/">Sign up</Button>
                            </div>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;
