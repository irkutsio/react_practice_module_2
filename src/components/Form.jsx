import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    tag: '',
    // experience: 'junior',
    // licence: false,
  };

  handleChange = evt => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
    // console.log(this.state)
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  // handleLicenceChange = e => {
  //   console.dir(e.currentTarget.checked);
  //   this.setState({ licence: e.currentTarget.checked });
  // };

  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Прозвище{' '}
          <input
            name="tag"
            type="text"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <br />
        <button type="submit">Submit</button>

        {/* <p>Ваш уровень: </p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          senior
        </label> */}

        {/* <input
          type="checkbox"
          name="licence"
          checked={this.state.licence}
          onChange={this.handleLicenceChange}
        /> */}
      </form>
    );
  }
}
