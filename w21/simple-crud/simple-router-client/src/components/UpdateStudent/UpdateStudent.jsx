import React, {useState} from 'react'

import style from './UpdateStudent.module.css'


function UpdateStudent(props){

    /* save changes made to the student */
    const [editedName, setEditedName]  = useState('')

    const handleNameChange = (event) => {
        setEditedName(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        /* call parent component function to update student data */
        /* call parent component function to save updated data to the database */
    }

    return (
        <div className={style.student}>
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" 
                defaultValue={props.student.name} 
                onChange={handleNameChange}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" defaultValue={props.student.email}/>
            </div>
            <button className="btn btn-primary" onClick={handleFormSubmit}>Save</button>
        </form>
        </div>
    )
}

export default UpdateStudent

