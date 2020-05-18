import React from "react";

class Avatar extends React.Component {
  onClick = () => {
    localStorage.removeItem("jwt-token");
  };

  render() {
    if (this.props.user === undefined) {
      return <div></div>;
    }
    return (
      <div className="nav-avatar">
        <a href={"/profile/" + this.props.user._id} onClick={this.onClick}>
          <img className="avatar" alt="avatar" src={this.props.user.avatar} />
        </a>
      </div>
    );
  }
}

export default Avatar;
