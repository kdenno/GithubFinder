import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githuContext";

const Users = () => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };
  const githubContext = useContext(GithubContext);
  const {users,loading} = githubContext;

  let UserData = <Spinner />;
  if (!loading) {
    UserData = users.map((user) => (
      <UserItem key={user.id} user={user} />
    ));
  }

  return (
    <div className="container" style={userStyle}>
      {UserData}
    </div>
  );
};

export default Users;
