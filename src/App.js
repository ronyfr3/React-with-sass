import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Agent from "./components/Agent";
import Customer from "./components/Customer";
import "./sass/main.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/component/agent" component={Agent} />
          <Route path="/component/customer" component={Customer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
