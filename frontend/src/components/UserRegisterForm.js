import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class UserRegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className="subpage-container">
                <Form >
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" name="name" placeholder="Name:" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="email" id="email" name="email" placeholder="E-mail:" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" id="password" name="password" placeholder="Password:" />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default UserRegisterForm;