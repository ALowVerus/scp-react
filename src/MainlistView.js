import React, { Component } from 'react';
import axios from 'axios';

class MainlistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_scip_index: 20,
      last_scip_index: 55,
      scips: [],
    };
  }

  componentDidMount() {
    this.updateView();
  }

  updateView() {

    axios
      .get(
          this.props.db_address + "pages?" +
            "first_scip_index=" + this.state.first_scip_index +
            "&last_scip_index=" + this.state.last_scip_index,
          {headers: {"Access-Control-Allow-Origin": "*"}}
      )
      .then(response => {
        this.setState({scips: response.data})
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="MainlistView">
        <div className="col-md-12">
          <h1>Mainlist Articles</h1>
        </div>
        <ul className="list-group">
          {this.state.scips.map(function(scip){
            let scip_number = scip.url.substr(28)
            return (
              <a href={scip.url} key={scip_number}>
                <li className="list-group-item">
                    SCP-{scip_number} is at {scip.url}
                </li>
              </a>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default MainlistView
