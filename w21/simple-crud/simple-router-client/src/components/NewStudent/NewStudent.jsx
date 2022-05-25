
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import {createStudent } from '../../services/students'
import style from './NewStudent.module.css'

function NewStudent(props){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()

    const handleNameChange = (event) => {
        
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {

        setEmail(event.target.value)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            name,
            email,
            books: [],
            movies: []
        }

        const result = await createStudent(formData)
        history.push('/students')
    }
    
    return(
        <div className={style.student}>
         <h3>Add New Student</h3>   
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" onChange={handleNameChange}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" onChange={handleEmailChange}/>
            </div>
            <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
        </div>
    )
}

export default NewStudent