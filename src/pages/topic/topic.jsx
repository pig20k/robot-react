import { Button, Steps } from "antd";
import React from "react";
import { Redirect } from "react-router-dom";
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
      button_status: "disabled",
      data: [],
      choices: [],
      gifs: [
        "gif/1.gif",
        "gif/1-1.gif",
        "gif/1-2.gif",
        "gif/1-2.gif",
        "gif/2-1.gif",
        "gif/2-2.gif",
        "gif/3.gif",
        "gif/3-1.gif",
        "gif/3-2.gif",
      ],
      currentGif: 0,
      filePath: "",
      current: 0,
      title: "",
      userChoices: [],
    };
  }

  onChangeStep = (current) => {
    this.setState({
      current,
      choices: this.state.data[current].choices,
      currentGif: current * 3,
    });
  };

  onClick = (target) => {
    if (target.target.id === "0") {
      let choices = this.state.userChoices;
      choices[this.state.current] = 0;
      this.setState({
        currentGif: this.state.current * 3 + 1,
        userChoices: choices,
        button_status: "",
      });
    } else {
      let choices = this.state.userChoices;
      choices[this.state.current] = 1;
      this.setState({
        currentGif: this.state.current * 3 + 2,
        userChoices: choices,
        button_status: "",
      });
    }
  };

  onSub = (res) => {
    if (this.state.current !== this.state.data.length - 1) {
      this.setState({
        current: this.state.current + 1,
        choices: this.state.data[this.state.current + 1].choices,
        title: this.state.data[this.state.current + 1].title,
        button_status: "disabled",
      });
    } else {
      let info = Store.getInfo();
      let data = {
        eduCationBackground: info.education,
        age: parseInt(info.age),
        region: info.area,
        gender: info.gender,
        choiceList: this.state.userChoices,
      };
      console.log(data)
      ajax.subResult(JSON.stringify(data)).then((res) => {
        Store.removeInfo();
        history.push("/info");
        // history.go();
      });
    }
  };

  componentDidMount() {
    ajax.getTopic().then((res) => {
      this.setState({
        data: res.data,
        choices: res.data[0].choices,
        title: res.data[0].title
      });
    });
  }

  render() {
    if (Store.getInfo() === null) return <Redirect to="/info"></Redirect>;
    let { current, currentGif, gifs, title, choices } = this.state;
    let choice_one = choices[0];
    let choice_two = choices[1];
    let button_text = "下一题";
    if (current === this.state.data.length - 1) {
      button_text = "提交";
    }
    let arr = this.state.data.map((item, index) => {
      return <Step key={index} disabled="disabled"></Step>;
    });
    return (
      <div className="topic">
        <div className="container">
          <img src={gifs[currentGif]} className="image"></img>
          <p className="question_title">{title}</p>
          <div className="selections">
            <Button className="button" id="0" onClick={this.onClick}>
              {choice_one}
            </Button>
            <Button className="button" id="1" onClick={this.onClick}>
              {choice_two}
            </Button>
          </div>
          <Button
            type="primary"
            disabled={this.state.button_status}
            style={{ marginTop: 10 }}
            onClick={this.onSub}
          >
            {button_text}
          </Button>
        </div>

        <div className="steps">
          <Steps
            type="navigation"
            current={this.state.current}
            onChange={this.onChangeStep}
            className="site-navigation-steps"
          >
            {arr}
          </Steps>
        </div>
      </div>
    );
  }
}
