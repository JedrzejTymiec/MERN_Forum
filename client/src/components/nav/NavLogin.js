import React from 'react';
import { getJwt } from './../../helpers/jwt';
import axios from 'axios';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class NavLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: undefined
        }
    }

    onClick = () => {
        localStorage.removeItem('jwt-token');
        this.props.logInOut();
    }

    render() {       
        if(this.props.isLogged) {
            return( 
                <div className="nav-user">
                    <a href="#" onClick={this.onClick}><img className="avatar" src={this.props.user.avatar}/></a>
                </div>
            )
        } else {
            return(
                <div>
                    <Button href="/log-in/" className="mr-2">Log in</Button>
                    <Button href="/register/" className="mr-2">Sign up</Button>
                </div>
            )
        } 
    }
}

export default withRouter(NavLogin);