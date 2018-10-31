import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Hubs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canons: [],
    };
  }

  componentDidMount() {
    axios
      .get(
          this.props.db_address + "pages?tag=hub",
          {headers: {"Access-Control-Allow-Origin": "*"}}
      )
      .then(response => {
        this.setState({canons: response.data})
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="MainlistView row">
        <div className="col-12 mx-auto">
          <h1>Canons</h1>
          <ul className="list-group">
            {this.state.canons.map(function(canon){
              let encoded_url = encodeURIComponent(canon.url);
              return (
                <Link to={process.env.PUBLIC_URL + "page/" + encoded_url} key={encoded_url}>
                  <li className="list-group-item">
                    {canon.url}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Hubs
