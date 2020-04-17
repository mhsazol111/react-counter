import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">
          Counters <span className="badge badge-info">{this.props.activeCounters}</span>
        </span>
      </nav>
    );
  }
}

export default NavBar;
