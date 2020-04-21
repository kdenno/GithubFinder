import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text == "") {
      // trigger alert
      this.props.triggerAlert("Enter Search Term", "light");
    } else {
      // add text to props
      this.props.searchUser(this.state.text);
      // reset form
      this.setState({ text: "" });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Seach user...."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            className="btn btn-dark btn-block"
            value="Search"
          />
        </form>
        {this.props.showClearBtn ? (
          <button
            className="btn btn-clear btn-block"
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        ) : null}
      </div>
    );
  }
}

export default Search;
