import React from 'react';
import axios from 'axios';
import { getJwt } from './../../helpers/jwt'
import { withRouter } from 'react-router-dom';

class Authentication extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: undefined
        }
    }

    componentDidMount() {
        const jwt = getJwt();
        if(!jwt) {
            this.props.history.push('/log-in');
        }
        const config = { headers: {
            "x-auth-token": jwt
        }}
        axios.get('/auth', config)
        .then(res => {
            this.setState({
                user: res.data
            })
        }).catch(error => {
            console.log(error)
        });
    };

    render() {
        if(this.state.user === undefined) {
            return (
                <div><h1>Loading...</h1></div>
            );
        }

        return(
            <div className="subpage-container">
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(Authentication);