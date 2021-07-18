import React, { Component } from "react";
import "./app.css";
import Navbar from "./components/navbar";
import Habits from "./components/habits";

// function App() {
//   return <Habits/>;
// }

class App extends Component {
  state = {
    //totalCount: 0,
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  // state.habits에 한줄 추가에 id:max+1?, name:"입력받은값", count: 0 처리
  handleAdd = (habit) => {};

  // ... 기능 참고
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  handleIncrement = (habit) => {
    //let totalCount = this.state.totalCount;

    /* ...은 새로운 배열에 ...이후의 배열을 복사한다
      -> 이부분은 react의 state는 변경하면 좋지 않기때문에 새로운 배열에 껍데기를 만들고 처리한다.*/
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;

    this.setState({ habits }); // habits:habits는 동일한 인자라 habits 한개만 쓰면된다.
    //this.setState({ totalCount: totalCount + 1, habits }); // habits:habits는 동일한 인자라 habits 한개만 쓰면된다.
  };

  handleDecrement = (habit) => {
    //let totalCount = this.state.totalCount;

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
    //this.setState({ totalCount: totalCount < 0 ? 0 : totalCount - 1, habits });
  };

  handleDelete = (habit) => {
    // filter를 이용해서 배열에 특정부분을 제외처리한다.
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleReset = () => {};

  render() {
    //<Navbar totalCount={this.state.totalCount} />
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
