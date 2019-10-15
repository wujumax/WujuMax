import React from "react";
import { Link } from "react-router-dom";
import "./Query.css";
import { Row, Col, Input, Icon, Tooltip, Button, message } from "antd";
export default class Query extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="userView">
        <h1>用户查询</h1>
      </div>
    );
  }
}
