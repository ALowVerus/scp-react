import React, { Component } from 'react';
import axios from 'axios';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerHTML: ""
    };
  }

  componentDidMount() {
    axios
      .get(
          this.props.db_address + "pages?url=" + this.props.url,
          {headers: {"Access-Control-Allow-Origin": "*"}}
      )
      .then(response => {
        this.setState({ innerHTML: response.data.html });
        console.log(response);
      })
      .catch(error => {
        this.setState({ innerHTML: "ERROR 404: Page not found." })
        console.log(error);
      })
  }

  render() {
    return (
      <div className="Page">
        <div className="container" dangerouslySetInnerHTML={{__html:this.state.innerHTML}} />
      </div>
    )
  }
}

export default Page
