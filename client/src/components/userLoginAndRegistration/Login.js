import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";

class UserRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    localStorage.removeItem("jwt-token");
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const logData = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post("/auth", logData).then((res) => {
      localStorage.setItem("jwt-token", res.data.token);
      this.props.loggedUser();
      this.props.history.push("/create-article");
    });
  };

  render() {
    return (
      <div className="subpage-container">
        <h1>You need to be logged in!</h1>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail:"
              value={this.state.email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password:"
              value={this.state.password}
              onChange={this.onChange}
            />
          </FormGroup>
          <Button type="submit">Log in</Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(UserRegisterForm);
