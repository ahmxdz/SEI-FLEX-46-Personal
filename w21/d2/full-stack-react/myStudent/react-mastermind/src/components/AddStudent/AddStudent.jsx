import React from 'react';
import { useState } from 'react';
import {makePostRequest} from '../../utils/request.util'

  function AddStudent(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const handleSubmit= (e) => {
      e.preventDefault();
      const urlPath = '/data'
        makePostRequest(urlPath, {firstName, lastName})
    }
  
    return (
      <div>
        <input 
        name="firstName"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}/>
          <br />
        <input 
        name="lastName"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}/>
          <br />
        <button onClick={handleSubmit}> Submit Student </button>
        <button onClick={() => {
                makePostRequest('/students', { firstName, lastName })
            }} >Submit student name </button>
      </div>
      




      // <form onSubmit={e => {handleSubmit(e)}}>
      //   <label>First Name</label>
      //   <br />
      //   <input 
      //     name='firstName' 
      //     type='text'
      //   />
      //   <br/>
      //   <label>Last Name</label>
      //   <br />
      //   <input 
      //     name='lastName' 
      //     type='text' 
      //   />
      //   <br />
      //   <label>Age</label>
      //   <br />
      //   <input
      //     name='age' 
      //     type='number'
      //   />
      //    <label>Class Year</label>
      //   <br/>
      //   <input
      //     name='classYear' 
      //     type='number'
      //   />
      //   <br/>
      //   <input 
      //     className='submitButton'
      //     type='submit' 
      //     value='Add Student' 
      //   />
      // </form>
    )
  }

  export default AddStudent;