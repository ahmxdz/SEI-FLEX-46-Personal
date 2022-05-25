import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

function Navbar(props){

    let nav = props.currentUser ?
    <div className="nav">
        <div>navbar</div>
        <ul>
            <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/students' activeClassName="active">Students</NavLink></li>
            <li><NavLink to='/students/new' activeClassName="active">Add student</NavLink></li>
            <li><span className="user">Welcome {props.currentUser.name}</span></li>
            <li><NavLink to='/logout' activeClassName="active">Logout</NavLink></li>
        </ul>
    </div> 
    :
    <div className="nav">
        <div>navbar</div>
        <ul>
            <li><NavLink to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink to='/login' activeClassName="active">Login</NavLink></li>
            <li><NavLink to='/signup' activeClassName="active">Signup</NavLink></li>
        </ul>
    </div> 

    return nav
}

export default Navbar