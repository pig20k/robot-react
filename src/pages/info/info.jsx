import React from "react";
import { Form, Input, Button, Select } from "antd";
import store from "../../utils/storeUtil";
import './info.css'
import { createBrowserHistory } from "history";
import storeUtil from "../../utils/storeUtil";
const { Option } = Select;
const history = createBrowserHistory();

export default class Info extends React.Component {
  onFinish = result => {
    console.log(result);
    storeUtil.saveInfo(result)
    history.push('/topic')
    history.go()
  };

  render() {
    return (
      <div className="info-form">
        <Form className="form-items" name="info" onFinish={this.onFinish}>
          <Form.Item name="area" className="item" 
           rules={[{ required: true, message: 'Please input your region!' }]}>
            <Select placeholder="请选择地区">
              <Option value="Guangzhou">广州</Option>
              <Option value="Shenzhen">深圳</Option>
              <Option value="Foshan">佛山</Option>
              <Option value="Qingyuan">清远</Option>
              <Option value="Shaoguan">韶关</Option>
              <Option value="Yunfu">云浮</Option>
              <Option value="Meizhou">梅州</Option>
            </Select>
            </Form.Item>
          <Form.Item name="gender" className="item" 
           rules={[{ required: true, message: 'Please input your gender!' }]}>
            <Select placeholder="请选择性别">
              <Option value="female">女</Option>
              <Option value="male">男</Option>
            </Select>
          </Form.Item>
          <Form.Item name="age" className="item"
           rules={[{ required: true, message: 'Please input your age!' }]}>
            <Input placeholder="输入年龄"></Input>
          </Form.Item>
          <Form.Item name="education" className="item"
           rules={[{ required: true, message: 'Please input your educationBackground!' }]}>
            <Input placeholder="输入学历"></Input>
          </Form.Item>
          <Form.Item name="submit" className="button">
            <Button type="primary" htmlType="submit" >
              开始测试
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
