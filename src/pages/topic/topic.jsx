import { Button, Steps } from "antd";
import React from "react";
import { Redirect } from "react-router-dom"
import Memory from "../../utils/memoryUtil";
import Store from "../../utils/storeUtil";
import ajax from "../../utils/ajaxIndex";
import ReactSWF from "react-swf";
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
      data: [],
      choices: [],
      swfs: [
        "swf/伦理1.swf",
        "swf/伦理1-1-1.swf",
        "swf/伦理1-1-2.swf",
        "swf/伦理1-2.swf",
        "swf/伦理1-2-1.swf",
        "swf/伦理1-2-2.swf"
      ],
      imgs: [
        "img/1.png",
        "img/1-1.png",
        "img/1.png",
        "img/2.png",
        "img/2-1.png",
        "img/2-2.png"
      ],
      gifs:[
        "gif/1.gif",
        "gif/1-1.gif",
        "gif/1-2.gif",
        "gif/2.jpg",
        "gif/2-1.gif",
        "gif/2-2.gif",
      ],
      currentSwf: 0,
      filePath: "",
      current: 0,
      userChoices: []
    };
  }

  onChangeStep = current => {
    this.setState({
      current,
      choices: this.state.data[current].choices,
      currentSwf: current * 3
    });
  };

  onClick = target => {
    if (target.target.id === "1") {
      let choices = this.state.userChoices;
      choices[this.state.current] = 1;
      this.setState({
        currentSwf: this.state.current * 3 + 1,
        userChoices: choices
      });
    } else {
      let choices = this.state.userChoices;
      choices[this.state.current] = 2;
      this.setState({
        currentSwf: this.state.current * 3 + 2,
        userChoices: choices
      });
    }
  };

  onSub = () => {
    let info = Store.getInfo();
    let data = {
      eduCationBackground: info.education,
      age: parseInt(info.age),
      region: info.area,
      gender: info.gender,
      choiceList: this.state.userChoices
    };
    console.log(data)
    ajax.subResult(JSON.stringify(data)).then(res => {
      console.log(res);
      Store.removeInfo();
      history.push("/info");
      history.go();
    });
  };

  componentDidMount() {
    ajax.getTopic().then(res => {
      this.setState({
        data: res.data,
        choices: res.data[0].choices
      });
    });
  }

  render() {
    if (Store.getInfo() === null) return (<Redirect to="/info"></Redirect>)
    let { current, swfs, currentSwf, imgs , gifs} = this.state;
    let disabled = "disabled";
    if (current === this.state.data.length - 1) {
      disabled = "";
    }
    let arr = this.state.data.map((item, index) => {
      return <Step key={index}></Step>;
    });
    return (
      <div className="topic">
        <div className="container">
          <img src={gifs[currentSwf]} className="image"></img>
          <div className="selections">
            <Button className="button" id="1" onClick={this.onClick}>
              {this.state.choices[0]}
            </Button>
            <Button className="button" id="2" onClick={this.onClick}>
              {this.state.choices[1]}
            </Button>
          </div>
          <Button
            type="primary"
            disabled={disabled}
            style={{ marginTop: 10 }}
            onClick={this.onSub}
          >
            提交
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
