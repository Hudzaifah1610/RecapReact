import React, { Component } from "react";
import { Button, Form, Input } from "../components/Form";

class FormContainer extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Input
          type="email"
          name="email"
          onChange={this.props.onChange}
          value={this.props.username}
        />
        <Input
          type="password"
          name="password"
          onChange={this.props.onChange}
          value={this.props.password}
        />
        <Button textButton="Kirim" />
      </Form>
    );
  }
}

export default FormContainer;
