import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MainlistView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thousands: "",
      hundreds: 0,
      scips: [],
    };
  }

  componentDidMount() {
    this.updateView(0, 0);
  }

  updateThousands(input_thousands) {
    this.setState({
      thousands: input_thousands,
    });
    console.log(input_thousands.toString() + " " + this.state.hundreds.toString())
    this.updateView(input_thousands, this.state.hundreds)
  }

  updateHundreds(input_hundreds) {
    this.setState({
      hundreds: input_hundreds,
    });
    console.log(this.state.thousands.toString() + " " + input_hundreds.toString())
    this.updateView(this.state.thousands, input_hundreds);
  }

  updateView(input_thousands, input_hundreds) {
    let first_scip_index = input_thousands.toString() + input_hundreds.toString() + "00";
    let last_scip_index = input_thousands.toString() + input_hundreds.toString() + "99";
    axios
      .get(
          this.props.db_address + "pages?" +
            "first_scip_index=" + first_scip_index +
            "&last_scip_index=" + last_scip_index,
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
      <div className="MainlistView row">
        <div className="col-md-12">
          <h1>Mainlist Articles</h1>
        </div>
        <div className="col-3">
          <h3>Series:</h3>
          <ul className="list-group">
            {["", 1, 2, 3, 4].map((thousand) => (
              <li className="list-group-item" key={thousand}
              onClick={() => this.updateThousands(thousand)}>
                {thousand}000
              </li>
            ))}
          </ul>
        </div>
        <div className="col-3">
          <h3>Centile:</h3>
          <ul className="list-group">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((hundred) => (
              <li className="list-group-item" key={hundred}
              onClick={() => this.updateHundreds(hundred)}>
                {hundred}00
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <h3>SCiP:</h3>
          <ul className="list-group page-limited set-height">
            {this.state.scips.map(function(scip){
              if (scip !== null) {
                let scip_number = scip.url.substr(28);
                let encoded_url = encodeURIComponent(scip.url);
                return (
                  <Link to={"/page/" + encoded_url} key={scip_number}>
                    <li className="list-group-item">
                      SCP-{scip_number}
                    </li>
                  </Link>
                )
              }
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default MainlistView
