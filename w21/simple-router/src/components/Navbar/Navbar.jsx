import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(props){
    return (
    <div className="nav">
        <div>navbar</div>
        <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/students'>students</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/settings'>settings</Link></li>
        </ul>
    </div>)
}

export default Navbar