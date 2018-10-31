import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navlist from './navlist.json';
import brand from './images/foundation_brand.png';

class Navbar extends Component {
  checkActive(target) {
    if (target === this.props.page) {
      return "active"
    } else {
      return
    }
  }

  render() {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="navbar">
        <div className="container">
          <Link
          onClick={() => this.props.handleLinkClick("homepage")}
          to="/scp-react/">
            <div className="d-inline-flex flex-row">
              <div className="p-2 no-padding">
                <img className="navbar-icon" src={brand} alt="SCP Foundation" />
              </div>
              <div className="p-2 no-padding text-left">
                <h1 className="navbar-brand no-margin no-padding">SCP Foundation</h1><br />
                <h3 className="navbar-brand no-margin no-padding">Secure, Contain, Protect</h3>
              </div>
            </div>
          </Link>


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {navlist.map(function(link){
                return(
                  <li className="nav-item" key={link.id}>
                    <Link className={"nav-link " + this.checkActive(link.target)}
                    to={"/scp-react/" + link.target} onClick={() => this.props.handleLinkClick(link.target)}>
                      {link.name}
                    </Link>
                  </li>
                )
              }, this)}
            </ul>
          </div>
        </div>
        </nav>
        <div className="navbar-margin" />
      </div>
    );
  }
}

export default Navbar
