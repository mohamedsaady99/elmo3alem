import React, { Component } from 'react';
import { BrowserRouter, Route,HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp/SignUp';
import NavBar from './Components/NavBar/NavBar';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import FreeVideos from './Components/FreeVideos/FreeVideos';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';
import ExplanationLectures from './ExplanationLectures/ExplanationLectures';
class App extends Component {
  state = { 
    students:[]
   }
  render() {
    return (
      <HashRouter>
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" render={props =><SignUp students={this.students} {...props}/>} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/free-videos" component={FreeVideos} />
        <Route path="/explanation-lectures" component={ExplanationLectures} />
      </HashRouter>
    );
  }
}
export default App;
