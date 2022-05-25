import React,  { Component } from 'react'
import { Switch, Link, Route, BrowserRouter as Router  } from 'react-router-dom'
import { getStudents } from '../../services/students'
import StudentMovieList from '../StudentMovieList/StudentMovieList'
import UpdateStudent from '../UpdateStudent/UpdateStudent';

import style from './StudentDetail.module.css'

class StudentDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            person: {},
            books: [],
            movies: [],
            showEditForm: false
        }
    
    }

    async componentDidMount(){
        const id = this.props.match.params.id
        const students = await getStudents()
        const currentStudent = students.find(student => student.name.split(' ')[0] === id )
        const personObject = {name: currentStudent.name, email: currentStudent.email}

        this.setState({
           person: personObject,
           books: currentStudent.books || [],
           movies: currentStudent.movies || [] 
        })
    }

    /* use arrow functions when defining event handlers */
    toggleShowEditForm = () => {
        this.setState((state) => {
            return {showEditForm: !state.showEditForm}
        })
    }

    /* write method to update state, given some data */

    /* write method to send student detail to the api */
    //to use nested routes, the parent route must have a <Router> block
    render(){
        return (
            <Router>
                <Switch>
                <Route exact path={this.props.match.path}>
                <div className={style.wrapper}>
                    <div className={style.card}>
                    <div className={style.container}>
                        <div>{this.state.person.name}</div> 
                    </div>
                     {/* <button onClick={this.toggleShowEditForm}>Edit</button> */}
                     <Link to={ `/students/${this.props.match.params.id}/edit` }
                     >edit</Link>
                    </div>
                    <StudentMovieList movies= {this.state.movies} />
                </div>
                </Route>
                <Route path={ `${this.props.match.path}/edit` }>
                    <UpdateStudent student={this.state.person} />
                </Route>
            </Switch>
            </Router>
        )
    }
}

export default StudentDetail