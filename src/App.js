import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.scss';
import Navbar from './Navbar.js';
import Homepage from './Homepage.js';
import MainlistView from './MainlistView.js';
import Hubs from './Hubs.js';
import Page from './Page.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      db_address: "http://localhost:3000/",
      page: "homepage",
    }
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(linkname) {
    this.setState({page: linkname});
  }

  render() {
    return (
      <div className="App">
        <Navbar page={this.state.page} handleLinkClick={this.handleLinkClick} />
        <Route render={({location}) => (
          <TransitionGroup className="Content container">
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" render={(props) => <div className="page"><Homepage /></div>} />
                <Route exact path="/mainlist" render={(props) => <div className="page"><MainlistView db_address={this.state.db_address} /></div>} />
                <Route exact path="/hubs" render={(props) => <div className="page"><Hubs db_address={this.state.db_address} /></div>} />
                <Route exact path="/page/:url" render={(props) => <div className="page"><Page db_address={this.state.db_address} url={props.match.params.url} /></div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;
