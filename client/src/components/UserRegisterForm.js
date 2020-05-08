import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class UserRegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        
        axios.post('/users', user)
        .then(res => console.log(res.data))
        .then(this.setState({
            name: "",
            email: "",
            password: ""
        }))
    }

    render() {
        return(
            <div className="subpage-container">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" name="name" placeholder="Name:" value={this.state.name} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="email" id="email" name="email" placeholder="E-mail:" value={this.state.email} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" name="password" placeholder="Password:" value={this.state.password} onChange={this.onChange} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default UserRegisterForm;