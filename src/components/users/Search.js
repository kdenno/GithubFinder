import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githuContext";
import AlertContext from "../../context/alert/alertContenxt";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext  = useContext(AlertContext);

  const {clearUsers, searchUser, users} = githubContext;
    const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text ==="") {
      // trigger alert
    alertContext.raiseAlert("Enter Search Term", "light");
    } else {
      searchUser(text);
      // reset form
      setText('');
    }
  };

    return (
      <div className="container">
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Seach user...."
            value={text}
            onChange={onChange}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Search"
          />
        </form>
        {users.length > 0 ? (
          <button
            className="btn btn-clear btn-block"
            onClick={clearUsers}
          >
            Clear
          </button>
        ) : null}
      </div>
    );

}

export default Search;
