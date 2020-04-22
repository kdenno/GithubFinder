import React, { useState } from "react";

const Search = ({triggerAlert, searchUser, showClearBtn, clearUsers}) => {
    const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text ==="") {
      // trigger alert
    triggerAlert("Enter Search Term", "light");
    } else {
      // add text to props
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
        {showClearBtn ? (
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
