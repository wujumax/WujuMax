import React from "react";
import { Redirect } from "react-router-dom";
export default class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return localStorage.getItem("user") === null ? (
      <Redirect to="/login" />
    ) : (
      <Redirect to="/teacher/add" />
    );
  }
}
