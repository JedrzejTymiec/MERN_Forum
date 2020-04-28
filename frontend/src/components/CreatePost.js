import React from 'react';
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import axios from 'axios';

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: "",
            title: "",
            content: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        //e.preventDefault()

        const post = {
            author: this.state.author,
            title: this.state.title,
            content: this.state.content
        }
        
        console.log(post);

        axios.post('/posts', post)
        .then(res => console.log(res.data))

        this.setState({
            author: "",
            title: "",
            content: ""
        })

        this.props.history.push('/posts-list')
    }

    render() {
        return(
            <div className="form-container">
                <Form onSubmit={this.onSubmit} className="form">
                    <FormGroup className="mx-auto">
                        <Label for="author">Author</Label>
                        <Input type="text" id="author" name="author" placeholder="Author:" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup className="mx-auto">
                        <Label for="title">Title</Label>
                        <Input type="text" id="title" name="title" placeholder="Title:" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup className="mx-auto">
                        <Label for="Content">Content</Label>
                        <Input type="textarea" id="content" name="content" placeholder="Content:" onChange={this.onChange} />
                    </FormGroup>
                    <Col className="text-center"><Button type="submit">Submit</Button></Col>
                </Form>
            </div>
        )
    }
}

export default PostForm;
