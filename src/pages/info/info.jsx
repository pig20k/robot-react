import React from "react";
import { Form, Input, Button, Select } from "antd";
import store from "../../utils/storeUtil";
import { createBrowserHistory } from "history";
const { Option } = Select;
const history = createBrowserHistory();

export default class Info extends React.Component {
  onFinish = result => {
    console.log(result);
    history.push('/topic')
    history.go()
  };

  render() {
    return (
      <div>
        <Form name="info" onFinish={this.onFinish}>
          <Form.Item name="area">
            <Select>
              <Option value="Guangzhou">广州</Option>
              <Option value="Shenzhen">深圳</Option>
            </Select>
          </Form.Item>
          <Form.Item name="age">
            <Input placeholder="输入年龄"></Input>
          </Form.Item>
          <Form.Item name="education">
            <Input placeholder="输入学历"></Input>
          </Form.Item>
          <Form.Item name="submit">
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
