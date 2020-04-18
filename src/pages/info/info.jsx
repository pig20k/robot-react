import React from "react";
import { Form, Input, Button, Select, Radio, InputNumber } from "antd";
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
        <p className="form-title">基本信息填写</p>
        <Form className="form-items" name="info" onFinish={this.onFinish}>
          <Form.Item label="地区：" name="area" className="item" 
           rules={[{ required: true, message: 'Please input your region!' }]}>
             <Input  placeholder="请输入你的地区"></Input>
            </Form.Item>
          <Form.Item label="性别" name="gender" className="item" 
           rules={[{ required: true, message: 'Please select your gender!' }]}>
             <Radio.Group>
               <Radio.Button value="female">女生</Radio.Button>
               <Radio.Button value="male">男生</Radio.Button>
             </Radio.Group>
          </Form.Item>
          <Form.Item label="年龄" name="age" className="item"
           rules={[{ required: true, type: "integer", message: 'Please input your age!' }]}>
            <InputNumber  placeholder="输入年龄" min={0}></InputNumber>
          </Form.Item>
          <Form.Item label="学历" name="education" className="item"
           rules={[{ required: true, message: 'Please input your educationBackground!' }]}>
            <Input  placeholder="输入学历"></Input>
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
