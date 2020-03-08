import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Admin from "./pages/admin/admin.jsx";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}