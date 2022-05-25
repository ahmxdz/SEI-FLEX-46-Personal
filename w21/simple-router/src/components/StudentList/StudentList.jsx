import React from 'react';
import './StudentList.css'

function StudentList(props){
    return (
    <div className="list-container">
        <ul>
            {props.students.map((student, idx) => <li key={idx}> <div>{student.name}</div> <div>{student.email}
            </div></li>)}
        </ul>
    </div>)
}

export default StudentList