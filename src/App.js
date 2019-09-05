import React, { Component } from "react";
import List from "./container/List";
import Form from "./container/Form";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          email: "Hudzev@gmail.com",
          password: "1610"
        },
        {
          email: "Hudjev@gmail.com",
          password: "1610"
        }
      ]
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeText(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, data, password } = this.state;
    if (email === undefined || email === "" ) {
      alert("Email kosong");
    } else {
      data.push({ email, password });
      this.setState({
        data,
        email: "",
        password: ""
      });
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <List data={this.state.data} />
        <Form
          onChange={this.onChangeText}
          username={email}
          password={password}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}
