import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class UserRegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Form>
                    <FormGroup>
                        <Label></Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label></Label>
                        <Input />
                    </FormGroup>
                    <FormGroup>
                        <Label></Label>
                        <Input />
                    </FormGroup>
                    <Button></Button>
                </Form>
            </div>
        )
    }
}

export default UserRegisterForm;