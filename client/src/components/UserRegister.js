import React from 'react';
import UserRegisterForm from './UserRegisterForm';

class UserRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    render() {
        return(
            <div>
                <UserRegisterForm name={this.state.name} email={this.state.email} password={this.state.password} />
            </div>
        )
    }
}

export default UserRegister;