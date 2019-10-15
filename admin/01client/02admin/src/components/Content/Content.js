import React from "react";
import { Layout } from "antd";
import "./Content.css";
import { Redirect, Route, Switch } from "react-router-dom";
import User from "../../views/user/User";
import Product from "../../views/product/Product";
import UserQuery from "../../views/user/query/Query";
import TeacherQuery from "../../views/teacher/query/Query";
import TeacherAdd from "../../views/teacher/add/Add";
const { Content } = Layout;
export default class MyContent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Content className="contentBox">
        <Switch>
          <Route exact path={"/teacher/query"} component={TeacherQuery} />
          <Route exact path={"/teacher/add"} component={TeacherAdd} />
          <Route exact path={"/user/query"} component={UserQuery} />
          <Route exact path={"/product"} component={Product} />
        </Switch>
      </Content>
    );
  }
}
