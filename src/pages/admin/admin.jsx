import React from "react";
import Memory from "../../utils/memoryUtil";
import Store from "../../utils/storeUtil";
import Topic from "../topic/topic";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import { Layout, Menu} from "antd";
import "./admin.css";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const { Header, Footer} = Layout;

Memory.user = Store.getUser();

export default class Admin extends React.Component {

      constructor(props){
            super(props)
            this.state={
                  key: '/topic'
            }
      }


  render() {

    return (
      <Layout className="layout">
        <Header className="header">
          <div className="logo">moral machine</div>

          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="/topic" onClick={this.onClickMenu}>
                <span>题目</span>
            </Menu.Item>
          </Menu>
        </Header>
        <div className='content'>
            <BrowserRouter>
              <Switch>
                <Route path="/topic" component={Topic}></Route>
                <Redirect to="/topic"></Redirect>
              </Switch>
            </BrowserRouter>
        </div>
        <Footer style={{ textAlign: "center" }}>Created by moralmachine</Footer>
      </Layout>
    );
  }
}
