import React, { Component } from 'react'

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="homepage-header">
          <h3>WARNING: THE FOUNDATION DATABASE IS</h3>
          <h1>CLASSIFIED</h1>
          <h4>ACCESS BY UNAUTHORIZED PERSONNEL IS<br />
          STRICTLY PROHIBITED</h4>
          <h4>PERPETRATORS WILL BE TRACKED, LOCATED, AND DETAINED</h4>
        </div>
        <div className="container card">
          <div className="card-body">
            Hi! Im ALowVerus, and Im trying to create a port of the Foundation
            website off the WikiDot site.
          </div>
          <div className="row card-body" >
          <h3 className="col-md-12">Goals:</h3>
            <div className="col-md-12 card">
                Complete port of Wikidot site votes, comments, tags, and other data
            </div>
            <div className="col-md-6 card">
                Smooth page transitions
            </div>
            <div className="col-md-6 card">
                Full user login functionality
            </div>
            <div className="col-md-6 card">
                Full sandbox functionality
            </div>
            <div className="col-md-6 card">
                Retention of Wikidot markup functionality
            </div>
          </div>
          <div className="card-body">
            <p>
              The Rails API repo is available at:
            </p>
            <h5>
              <a href="https://github.com/ALowVerus/scp-rails-api" target="_blank" rel="noopener noreferrer">
                "https://github.com/ALowVerus/scp-rails-api"
              </a>
            </h5>
            <p>
              The React front-end repo is available at:
            </p>
            <h5>
              <a href="https://github.com/ALowVerus/scp-react" target="_blank" rel="noopener noreferrer">
                "https://github.com/ALowVerus/scp-react"
              </a>
            </h5>
            <p>
              Progress is tracked at Trello:
            </p>
            <h5>
              <a href="https://trello.com/b/xosE6utC/scp-website" target="_blank" rel="noopener noreferrer">
                "https://trello.com/b/xosE6utC/scp-website"
              </a>
            </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
