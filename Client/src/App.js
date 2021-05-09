import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Home from "./Components/Home/Home"
import FacultyInformation from "./Components/FacultyInformation/FacultyInformation"
import CourseInformation from "./Components/CourseInformation/CourseInformation"
<<<<<<< HEAD:Client/src/App.js
import ShowCourses from "./Components/ShowCourse/ShowCourses";
import ShowFacultyInfo from "./Components/ShowFacultyInfo/ShowFacultyInfo";
=======
>>>>>>> 15c51512edff456bba743b08390f08c372bd2f5b:src/App.js
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/FacultyInformation" component={FacultyInformation} />
        <Route exact path="/CourseInformation" component={CourseInformation} />
        <Route exact path="/show-courses" component={ShowCourses} />
        <Route exact path="/showFacultyInfo" component={ShowFacultyInfo} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
