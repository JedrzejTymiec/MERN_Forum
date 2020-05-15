import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            users: []
        }
    }

    componentDidMount() {
        axios.get('/users/')
        .then(res => {
            this.setState({
                users: res.data
            })
        }).catch(error => console.log(error));
    }

    userList = () => {
        return this.state.users.map((res, i) => {
            return (
                <tr>
                    <th>{i + 1}</th>
                    <td>{res.name}</td>
                    <td>{res.email}</td>
                    <td>{res.date}</td>
                </tr>
            )
        })
    }

    render() {
        return(
                <div className="subpage-container">
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Since</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.userList()}
                        </tbody>
                    </Table>
                </div>
        )
    }
}

export default UserList;