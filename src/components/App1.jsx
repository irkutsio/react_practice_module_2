import React, { Component } from 'react';
import { Form } from './Form';

export class App1 extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  formSubmitHandler = data => {
    console.log(data);
  };



  //   handleNameCgange = event => {
  //     this.setState({ name: event.currentTarget.value });
  //     console.log(event.currentTarget.value);
  //   };

  //   handleTagCgange = event => {
  //     this.setState({ tag: event.currentTarget.value });
  //     console.log(event.currentTarget.value);
  //   };

  render() {
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}
