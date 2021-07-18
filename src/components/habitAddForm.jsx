import React, { Component } from "react";

class HabitAddForm extends Component {
  state = { name: "" };

  handleAdd = () => {
    this.props.onAdd(this.name);
  };

  render() {
    return (
      <>
        <input className="add-input" placeholder="Habit"></input>
        <button className="add-button" onClick={this.handleAdd}>
          Add
        </button>
      </>
    );
  }
}

export default HabitAddForm;
