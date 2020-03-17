import { Button, Steps } from "antd";
import React from "react";
import Memory from "../../utils/memoryUtil";
import Store from "../../utils/storeUtil";
import ajax from "../../utils/ajaxIndex";
import "./topic.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const { Step } = Steps;
Memory.user = Store.getUser();

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      titles: [],
      selections: [],
      current: 0
    };
  }

  onChangeStep = current => {
    this.setState({ current });
  };

  componentDidMount() {
    ajax.getTopic().then(res => {
      this.setState({
        id: res.data.id,
        titles: res.data.titles,
        selections: res.data.selections
      });
    });
  }

  render() {
    return (
      <div className="topic">
        <div className="container">
          <div className="title">title</div>
          <div className="selections">
            <Button className="button" onClick={this.onClick}>
              选项一
            </Button>
            <Button className="button" onClick={this.onClick}>
              选项二
            </Button>
          </div>
          <object id="flashDemo" type="application/x-shockwave-flash" data="./test.swf">
    </object>
        </div>

        <div className="steps">
          <Steps
            type="navigation"
            current={this.state.current}
            onChange={this.onChangeStep}
            className="site-navigation-steps"
          >
            <Step status="wait" title="1/4" />
            <Step status="wait" title="2/4" />
            <Step status="wait" title="3/4" />
            <Step status="wait" title="4/4" />
          </Steps>
        </div>
      </div>
    );
  }
}
