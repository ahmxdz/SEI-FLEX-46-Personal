import React from 'react'
import { useParams } from "react-router-dom"

function StudentMovieDetail(props){
    let { title } = useParams()
    console.log('detail is rendered')
    return (
        <div>Movei title

        {props.children}            
        </div>
        
    )
}

export default StudentMovieDetail