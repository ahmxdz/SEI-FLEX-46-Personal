import React, { Component} from 'react'
//import { useParams, useRouteMatch } from "react-router-dom"
import { getMovieDetail } from '../../services/movies'
/*
1. build express app with mongoose model for student data
2. build component to save student data
3. enable update and delete of student data
4. Talk about react hooks (useState, and useEffect)
5. build a search component to lookup student data
*/
/*
function StudentMovieList(props){

    const [currentTitle, setCurrentTitle] = useState('')
    const [movieDetail, setMovieDetail] = useState({})

    useEffect(() => {
        console.log('useEffect')
        async function fetchMovieDetail(){
            if(currentTitle){
                const data = await getMovieDetail(currentTitle)
                setMovieDetail(data)
            }
        }
        fetchMovieDetail()

    }, [currentTitle])

    return (
        <div>
            <ul>
                {props.movies.map((movie, idx) => 
                <li key={idx} onClick={() => setCurrentTitle(movie.title)}> 
                {movie.title}</li>)}
            </ul>
            {
                currentTitle &&
                <div>{currentTitle}</div>
            }
            <div>
            {
                movieDetail.d && movieDetail.d.length &&
                <ul>
                { movieDetail.d.map((movie, idx) => <li key={idx}>{movie.l}</li>) }
                </ul>
            } 
            </div>
        </div>
    )
}
*/

class StudentMovieList extends Component{
    constructor(props){
        super(props)

        this.state = {
            currentTitle: '',
            movieDetail : {}
        }
    }

    async componentDidUpdate(prevProps, prevState){
        if(this.state.currentTitle && prevState.currentTitle !== this.state.currentTitle){
            const data = await getMovieDetail(this.state.currentTitle)
            this.setState({movieDetail: data})
        }
    }

    render(){
        return (
            <div>
                <ul>
                    {this.props.movies.map((movie, idx) => 
                    <li key={idx} onClick={() => this.setState({currentTitle: movie.title})}> 
                    {movie.title}</li>)}
                </ul>
                {
                    this.state.currentTitle &&
                    <div>{this.state.currentTitle}</div>
                }
                <div>
                {
                    this.state.movieDetail.d && this.state.movieDetail.d.length &&
                    <ul>
                    { this.state.movieDetail.d.map((movie, idx) => <li key={idx}>{movie.l}</li>) }
                    </ul>
                } 
                </div>
            </div>
        )
    
    }
}


export default StudentMovieList