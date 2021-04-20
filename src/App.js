import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Home from "./Components/Home/Home"
import FacultyInformation from "./Components/FacultyInformation/FacultyInformation"
import CourseInformation from "./Components/CourseInformation/CourseInformation"
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/FacultyInformation" component={FacultyInformation} />
        <Route exact path="/CourseInformation" component={CourseInformation} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
