import React, {Component} from 'react';
import './StudentList.css'
import {Link } from "react-router-dom";
import { getStudents } from "../../services/students";

/*refactor into a class component and fetch the list of students on componentDidMount */
/*
function StudentList(props){
    return (
    
    <div className="list-container">
        {
        props.students.length > 0 &&
        <ul>
            {props.students.map((student, idx) => 
            <li key={idx}>
                <Link to={ `/students/${student.name.split(' ')[0]}` }> 
                <div>{student.name}</div> 
                <div>{student.email}</div>
                </Link>
            </li>)}
        </ul>
        }
        {
            props.students.length === 0 &&
            <div>You dont have any students in your database</div>
        }
        
    </div>)
}
*/

class StudentList extends Component{
    constructor(props){
        super(props)

        this.state = {
            students: []
        }
    }

    async componentDidMount(){
        const students = await getStudents()
        this.setState({students})
    }

    render(){
        return (
    
            <div className="list-container">
                {
                this.state.students.length > 0 &&
                <ul>
                    {this.state.students.map((student, idx) => 
                    <li key={idx}>
                        <Link to={ `/students/${student.name.split(' ')[0]}` }> 
                        <div>{student.name}</div> 
                        <div>{student.email}</div>
                        </Link>
                    </li>)}
                </ul>
                }
                {
                    this.state.students.length === 0 &&
                    <div>You dont have any students in your database</div>
                }
                
            </div>)
        
    }


}
export default StudentList