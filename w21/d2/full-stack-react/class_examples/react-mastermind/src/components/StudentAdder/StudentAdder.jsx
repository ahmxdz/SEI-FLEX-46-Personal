import React, {useState} from 'react';
import {makePostRequest} from '../../util/request.util'
import {handleNameSubmit} from './StudentAdder.util'

function StudentAdder(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    return (
        <div>
            <input
                value={firstName}
                onChange={
                    (e) => setFirstName(e.target.value)
                }
            />
            <br />
            <input
                value={lastName}
                onChange={
                    (e) => setLastName(e.target.value)
                }
            />
            <br />
            {/* Both of these approaches are valid */}
            {/* <button onClick={() => handleNameSubmit(firstName, lastName)}>Submit new student name</button> */}
            <button onClick={() => {
                const student = { firstName, lastName }
                makePostRequest('/students', student)
                    .then((resp) => {
                        if (resp.status === 200) {
                            props.addStudentToList(student)
                        } else {
                            // alert('Cant do it!')
                        }
                    })
                    .finally(() => {
                        setFirstName('')
                        setLastName('')
                    })
            }} >Submit student name </button>
        </div>
    )
}

export default StudentAdder;