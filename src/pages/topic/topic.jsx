import { Button, Steps } from "antd";
import React from "react";
import Memory from "../../utils/memoryUtil";
import Store from "../../utils/storeUtil";
import ajax from "../../utils/ajaxIndex";
import ReactSWF from "react-swf";
import "./topic.css";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();
const { Step } = Steps;
const SWF_ID_PREFIX = '__MyExternalInterfaceExample_SWFID_';
const SWF_CALL_NAME_PREFIX = '__MyExternalInterfaceExample_SWFCall_';
let nextUID = 0;
Memory.user = Store.getUser();

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      titles: [],
      selections: [],
      filePath: './swf/伦理1.swf',
      current: 0
    };
    this._uid = nextUID++;

    window[SWF_CALL_NAME_PREFIX + this._uid] = this.handleSWFCall.bind(this);
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
  handleSWFCall() {
    // Beware; SWF calls are executed in the context of SWF Player.
    console.log("SWFCall", arguments);
    return "foobar";
  }

  invokeSWFMyCallback(arg) {
    console.log("invoke")
    // Beware; SWF Player does not sufficiently escape serialized arguments.
    return this._swfPlayerNode.myCallback(arg);
  }

  render() {
    return (
      <div className="topic">
        <div className="container">
          <ReactSWF
            src={require(this.state.filePath)}
            width="1000"
            height="1000"
            wmode="transparent"
            // flashVars={{ foo: "A", bar: 1 }}
            ref={c => this._swfPlayerNode = c}
            id={SWF_ID_PREFIX + this._uid}
            flashVars={{myCallbackName: SWF_CALL_NAME_PREFIX + this._uid}}
          ></ReactSWF>
          {/* <div className="title">title</div> */}
          <div className="selections">
            <Button className="button" onClick={this.onClick}>
              选项一
            </Button>
            <Button className="button" onClick={this.onClick}>
              选项二
            </Button>
          </div>
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
