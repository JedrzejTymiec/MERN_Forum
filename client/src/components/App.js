import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppNavbar from './nav/Navbar';
import PostForm from './posts/CreatePost';
import PostsList from './posts/PostsList';
import EditPost from './posts/EditPost';
import Discussion from './posts/Discussion';
import MainPage from './subpages/MainPage';
import About from './subpages/About'
import Contact from './subpages/Contact'
import UserRegisterForm from './userLoginAndRegistration/UserRegisterForm';
import SidebarNav from './nav/SidebarNav';
import UserList from './userLoginAndRegistration/UserList';
import Login from './userLoginAndRegistration/Login';
import Authentication from './userLoginAndRegistration/Authentication';
import UserProfile from './userLoginAndRegistration/Profile';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: false
    }
  }

  logInOut = () => {
    this.setState({
      isLogged: !this.state.isLogged
    })
  }
  
  render() {
    return (
      <Router>
        <AppNavbar isLogged={this.state.isLogged} logInOut={this.logInOut} />
        <div className="app-body">
        <SidebarNav />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/about" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/posts-list" component={PostsList} />
            <Route path="/log-in/" render={
              () => <Login isLogged={this.state.isLogged} logInOut={this.logInOut}/>
            } />
            <Route path="/register/" component={UserRegisterForm} />
            <Authentication>
              <Route path="/create-article" component={PostForm} />
              <Route path="/edit-post/:id" component={EditPost} />
              <Route path="/discussion/:id" component={Discussion} />
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
