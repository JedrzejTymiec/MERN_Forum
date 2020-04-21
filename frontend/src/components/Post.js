import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import axios from 'axios';
import CommentsComponent from './CommentsComponent';

class Post extends React.Component {

    deletePost = () => {
        axios.delete("/posts/" + this.props.obj._id)
        .then((res) => {
            console.log("Post deleted!")
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return(
            <div>
                <div className="p-3">
                    <Card className="mx-auto">
                        <CardBody>
                            <CardTitle><h5>{this.props.obj.title}</h5></CardTitle>
                            <CardText>
                                <p>{this.props.obj.content}</p>
                                <footer className="post-footer">
                                    <p>Opublikowano: {this.props.obj.date}</p>
                                    <div>
                                        <Button href="/" onClick={this.deletePost} className="float-right"><i class="fa fa-trash-o"></i></Button>
                                        <Button href={"/edit-post/" + this.props.obj._id} className="mr-2 float-right">Edit Post</Button>
                                    </div>
                                </footer>
                                <CommentsComponent postID={this.props.obj._id} />
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Post;