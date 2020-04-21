import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    // get user name from url
    const username = this.props.match.params.login;
    this.props.getUser(username); // after getting user, user will be returned to this component as a prop
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;
    const {loading} = this.props;

    
    return <div>{name}</div>;
  }
}
export default User;
