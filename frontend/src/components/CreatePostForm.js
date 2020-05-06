import React from 'react';
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

class CreatePostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return(
            <div>
                <h3>Create new article!</h3><br/>
                <Form onSubmit={this.props.onSubmit} >
                    <FormGroup className="mx-auto">
                        <Label for="author">Author</Label>
                        <Input type="text" id="author" name="author" placeholder="Anonymous" onChange={this.props.onChange} />
                    </FormGroup>
                    
                    <FormGroup className="mx-auto">
                        <Label for="title">Title</Label>
                        <Input type="text" id="title" name="title" placeholder="Title:" onChange={this.props.onChange} />
                        <p className="validation-error">{this.props.titleError}</p>
                    </FormGroup>

                    <FormGroup className="mx-auto">
                        <Label for="Content">Content</Label>
                        <Input type="textarea" id="content" name="content" placeholder="Content:" onChange={this.onChange} />
                        <p className="validation-error">{this.props.contentError}</p>
                    </FormGroup>

                    <FormGroup>
                        <Input type="file" id="postImage" ref={ fileInput => this.fileInput = fileInput } onChange={this.props.selectedImage}/>
                    </FormGroup>

                    <Col className="text-center"><Button type="submit">Submit</Button></Col>
                </Form>
            </div>
        )
    }
}

export default CreatePostForm;