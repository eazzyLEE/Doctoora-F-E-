import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "bcc300c30e2770f26488",
      clientSecret: "c4cda16892451ff4bafaadcb0ecf45e88cb08e3b",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentWillUpdate() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.message === "Not Found") {
          // Show alert
          alert("User  not found", "alert alert-danger");
        } else if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;
    const repoItems = repos.map(repo => (
      <div key={repo.id} className="card card-body mb-2">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src={repo.avatar_url} alt="" />
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-block mb-4"
            >
              View Profile
            </a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">
              Public Repos: {repo.public_repos}
            </span>
            <span class="badge badge-secondary">
              Public Gists: {repo.public_gists}
            </span>
            <span class="badge badge-success">Followers: {repo.followers}</span>
            <span class="badge badge-0info">Following: {repo.following}</span>
            <br />
            <ul class="list-group">
              <li class="list-group-item">Company: {repo.company}</li>
              <li class="list-group-item">Website/Blog: {repo.blog}</li>
              <li class="list-group-item">Location: {repo.location}</li>
              <li class="list-group-item">Member Since: {repo.created_at}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>
              <a
                href={repo.html_url}
                className="text-info"
                rel="noopener noreferrer"
                target="_blank"
              >
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="mb-4">Latest Github repos</h3>
        {repoItems}
      </div>
    );
  }
}

export default Github;
