import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { getJwt } from "./../helpers/jwt";

import AppNavbar from "./nav/Navbar";
import PostForm from "./posts/CreatePost";
import PostsList from "./posts/PostsList";
import EditPost from "./posts/EditPost";
import Discussion from "./posts/Discussion";
import MainPage from "./subpages/MainPage";
import About from "./subpages/About";
import Contact from "./subpages/Contact";
import UserRegisterForm from "./userLoginAndRegistration/UserRegisterForm";
import SidebarNav from "./nav/SidebarNav";
import UserList from "./userLoginAndRegistration/UserList";
import Login from "./userLoginAndRegistration/Login";
import Authentication from "./userLoginAndRegistration/Authentication";
import UserProfile from "./userLoginAndRegistration/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  loggedUser = () => {
    const jwt = getJwt();
    const config = {
      headers: {
        "x-auth-token": jwt,
      },
    };
    axios
      .get("/auth", config)
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.loggedUser();
  }

  render() {
    return (
      <Router>
        <AppNavbar user={this.state.user} />
        <div className="app-body">
          <SidebarNav />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/posts-list" component={PostsList} />
            <Route
              path="/log-in/"
              render={() => <Login loggedUser={this.loggedUser} />}
            />
            <Route path="/register/" component={UserRegisterForm} />
            <Authentication user={this.state.user}>
              <Route
                path="/create-article"
                render={() => <PostForm user={this.state.user} />}
              />
              <Route path="/edit-post/:id" component={EditPost} />
              <Route
                path="/discussion/:id"
                render={() => <Discussion user={this.state.user} />}
              />
              <Route path="/profile/:id" component={UserProfile} />
              <Route path="/users-list/" component={UserList} />
            </Authentication>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
