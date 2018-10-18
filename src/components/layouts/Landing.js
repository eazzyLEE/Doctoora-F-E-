import React, { Component } from "react";
import Github from "../Github";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // this.onKeyUp = this.onKeyUp.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };
    //this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  // handleKeyUp(e) {
  //   this.setState({ username: e.target.value });
  // }

  render() {
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="container searchContainer">
                <div className="search card card-body">
                  <h1>Search GitHub Users</h1>
                  <p className="lead">
                    Enter a username to fetch a user profile and repos
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      id="searchUser"
                      className="form-control"
                      placeholder="GitHub Username..."
                      value={this.state.username}
                      onChange={this.onChange}
                    />
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
                <br />
                <div id="profile" />
                {this.state.username ? (
                  <Github username={this.state.username} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
