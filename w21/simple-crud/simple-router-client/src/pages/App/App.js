
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react'

import './App.css';
import Navbar from '../../components/Navbar/Navbar';
import SettingsPage from '../Settings/SettingsPage';
import AboutPage from '../About/AboutPage';

import StudentList from "../../components/StudentList/StudentList";
import StudentDetail from '../../components/StudentDetail/StudentDetail'
import NewStudent from '../../components/NewStudent/NewStudent'
import SignupPage from '../../pages/SignupPage/SignupPage'
import userService from "../../services/userService";
import LoginPage from "../LoginPage/LoginPage";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

class App extends Component {

  constructor(){
    super()
    this.state = {
      user: userService.getUser() 
    }
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }


  render(){
    return (
      <Router>
        <div className="App">
          <Navbar currentUser = {this.state.user}/>
          <Switch>
            <Route path='/' exact>
              <h1>Welcome</h1>
            </Route>
           <ProtectedRoute exact path='/students' component={StudentList} />
            
            <ProtectedRoute exact path='/students/new' component={NewStudent} />
    
            <Route exact path='/students/:id' component={StudentDetail} />

            <Route path='/signup'>
              <SignupPage />
            </Route>
            <Route path='/login' render={
              ({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }>
              
            </Route>
           
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
