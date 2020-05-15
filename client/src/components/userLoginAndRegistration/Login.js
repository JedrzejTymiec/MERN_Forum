import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class UserRegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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

        }

    render() {
        return(
            <div className="subpage-container">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="email" id="email" name="email" placeholder="E-mail:" value={this.state.email} onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" name="password" placeholder="Password:" value={this.state.password} onChange={this.onChange} />
                    </FormGroup>
                    <Button type="submit">Log in</Button>
                </Form>
            </div>
        )
    }
}

export default UserRegisterForm;