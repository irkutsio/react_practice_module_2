// // import Counter from './Counter/Counter';
// // import { Dropdown } from './Dropdown/Dropdown';
// // import { ColorPicker } from './ColorPicker/ColorPicker';
 import { ToDoList } from './ToDo/ToDo';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    todos: [
      {
        id: 'id-1',
        text: 'заниматься спортом',
        completed: true,
      },
      {
        id: 'id-2',
        text: 'пить много воды',
        completed: false,
      },
      {
        id: 'id-3',
        text: 'изменить жизнь к лучшему',
        completed: false,
      },
      {
        id: 'id-4',
        text: 'забить на все *уй',
        completed: true,
      },
    ],

    // inputValue: 'yuihkjl',
  };

  deleteToDo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  handleInputChange = event => {
    // console.log(event.currentTarget.value);
this.setState({ inputValue: event.currentTarget.value });
  };

  render() {
    const { todos } = this.state;

    const toDoCompletedCounts = todos.filter(todo => todo.completed)

    // const toDoCompletedCounts = todos.reduce(
    //   (todo, acc) => (todo.completed ? acc + 1 : acc),
    //   0
    // );

    return (
      <div>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        /> */}

        <div>
          <p>общее количество туду:{todos.length}</p>
          <p>количество выполненых:{toDoCompletedCounts.length}</p>
          <p></p>
        </div>
        <ToDoList todos={todos} onDeleteToDo={this.deleteToDo} />
      </div>
    );
  }
}

// // const colorPickerOption = [
// //   { hex: '#FFA07A', label: 'pink' },
// //   { hex: '#00FF00', label: 'green' },
// //   { hex: '#9400D3', label: 'violet' },
// //   { hex: '#4169E1', label: 'blue' },
// //   { hex: '#8B0000', label: 'red' },
// // ];

// //  {/* <Dropdown /> */}
// //       {/* <Counter initialValue={0}/> */}
// //       {/* <ColorPicker options={colorPickerOption} /> */}
