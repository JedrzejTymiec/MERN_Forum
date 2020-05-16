import React from 'react';
import axios from 'axios';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        axios.get('/user')
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default UserProfile;