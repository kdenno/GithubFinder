import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repo";

class User extends Component {
  componentDidMount() {
    // get user name from url
    const username = this.props.match.params.login;
    this.props.getUser(username); // after getting user, user will be returned to this component as a prop
    this.props.getRepos(username);
  }
  static propTypes = {
    loading: PropTypes.bool,
    getUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    getRepos: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      company,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    const { loading, repos } = this.props;

    if (loading) return <Spinner />;
    return (
      <div className="container">
        <Fragment>
          <Link to="/" className="btn btn-light">
            {" "}
            Back To Search{" "}
          </Link>
          Hireable:{" "}
          {hireable ? (
            <i className="fas fa-check text-success"></i>
          ) : (
            <i className="fas fa-times-circle text-danger"></i>
          )}
          <div className="card grid-2">
            <div className="all-center">
              <img
                src={avatar_url}
                className="round-img"
                alt=""
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              <p>
                <strong>Location: </strong> {location}
              </p>
            </div>

            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  {bio}
                </Fragment>
              )}
              <div>
                <a href={html_url} className="btn btn-dark my-1">
                  Visit Github Profile
                </a>
              </div>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Login: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong>
                      {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">
              Public repos: {public_repos}
            </div>
            <div className="badge badge-dark">Public Gists: {public_gists}</div>
          </div>
          <Repos repos={repos} />
        </Fragment>
      </div>
    );
  }
}
export default User;
