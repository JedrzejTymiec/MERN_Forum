import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import axios from 'axios';
import CommentsComponent from './CommentsComponent';

class PostDiscussion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            author: "",
            title: "",
            content: "",
            date: ""
        }
    }

    componentWillMount() {
        axios.get('/posts/' + this.props.match.params.id)
        .then(res => {
            this.setState({
                id: res.data._id,
                author: res.data.author,
                title: res.data.title,
                content: res.data.content,
                date: res.data.date
            })
        })
    }

    deletePost = () => {
        axios.delete("/posts/" + this.state.id)
        .then((res) => {
            console.log("Post deleted!")
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                <div className="discussion-container p-3">
                    <Card className="mx-auto">
                        <CardBody>
                            <CardTitle><h5>{this.state.title}</h5></CardTitle>
                            <CardText>
                                <p>{this.state.content}</p>
                                <footer className="post-footer">
                                    <p>Opublikowano: {this.state.date} by {this.state.author}</p>
                                    <div>
                                        <Button href="/" onClick={this.deletePost} className="float-right"><i class="fa fa-trash-o"></i></Button>
                                        <Button href={"/edit-post/" + this.state.id} className="mr-2 float-right">Edit Post</Button>
                                    </div>
                                </footer>
                                <CommentsComponent postID={this.state.id} />
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default PostDiscussion;