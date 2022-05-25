
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
import { getStudents } from "../../services/students";
import StudentList from "../../components/StudentList/StudentList";

class App extends Component {

  state = {
    students: []
  }
  async componentDidMount(){
    const students = await getStudents()
    this.setState({students})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/about'>
              <AboutPage />
            </Route>
            <Route path='/students'>
              <StudentList students={this.state.students} />
            </Route>
            <Route path='/settings'>
              <SettingsPage />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
