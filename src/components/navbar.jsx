import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div>
          <i className="navbar-logo fas fa-wine-bottle"></i>
          <span>Habit Tracker</span>
          <span className="navbar-count">{this.props.totalCount}</span>
        </div>
      </header>
    );
  }
}

export default Navbar;
