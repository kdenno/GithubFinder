import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {

  }
  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit} className="form">
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
      </div>
    );
  }
}

export default Search;
