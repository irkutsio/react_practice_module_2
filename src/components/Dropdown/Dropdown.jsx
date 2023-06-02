import React, { Component } from 'react';
import './Dropdown.css';

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown_toggle"
          onClick={this.toggle}
          // onMouseOver={this.toggle} // событие при ховере
        >
          {visible ? 'Скрыть' : 'Показать'}
        </button>

        {visible && <div className="Dropdown_menu"></div>}
      </div>
    );
  }
}

// show = () => {
//     this.setState({ visible: true });
//   };

//   hide = () => {
//     this.setState({ visible: false });
//   };
