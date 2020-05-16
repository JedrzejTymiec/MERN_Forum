import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';
import NavLogin from './NavLogin';
import { getJwt } from './../../helpers/jwt';
import axios from 'axios';

class AppNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            user: undefined
        }
    }

    componentDidMount() {
        const jwt= getJwt();
            axios.get('/auth', {headers: {"x-auth-token": jwt}})
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
            .catch(error => {
            console.log(error);
        })
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
                            <InputGroupText><i className="fas fa-search"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Search" />
                    </InputGroup>
                    <NavLogin isLogged={this.props.isLogged} logInOut={this.props.logInOut} user={this.state.user}/>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;
