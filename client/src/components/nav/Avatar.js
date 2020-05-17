import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: undefined,
    };
  }

  onClick = () => {
    localStorage.removeItem("jwt-token");
    this.props.logInOut();
  };

  render() {
    if (this.props.user === undefined) {
      return <div></div>;
    }
    return (
      <div className="nav-avatar">
        <a href="/profile:id" onClick={this.onClick}>
          <img className="avatar" alt="avatar" src={this.props.user.avatar} />
        </a>
      </div>
    );
  }
}

export default Avatar;
