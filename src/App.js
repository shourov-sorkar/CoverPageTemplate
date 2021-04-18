import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Home from "./Components/Home/Home"
import FacultyInformation from "./Components/FacultyInformation/FacultyInformation"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/FacultyInformation" component={FacultyInformation} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
