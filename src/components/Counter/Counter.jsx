import React, { Component } from 'react';
import './Counter.css';
import { Controler } from './Controls';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  //   hadlerIncrement = () => {
  //     this.setState({
  //       value: 8, // перезаписали значение
  //     });
  //   };

  hadlerIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handlerDescrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter_value">{this.state.value}</span>

        <Controler
          onIncrement={this.hadlerIncrement}
          onDecrement={this.handlerDescrement}
        />
      </div>
    );
  }
}

export default Counter;
