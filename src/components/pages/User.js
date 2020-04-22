import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repo";
import GithubContext from "../../context/github/githuContext";

const User = (props) => {
  const githubContext = useContext(GithubContext);
  useEffect(()=> {
    // get user name from url
    const username = props.match.params.login;
    githubContext.getUser(username);
    githubContext.getRepos(username);
    // eslint-disable-next-line
  }, []);
  
  const { loading, repos, user } = githubContext;

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
    } = user;
   

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
User.propTypes = {
  loading: PropTypes.bool,
  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  getRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};
export default User;
