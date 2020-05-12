import React from "react"
import PropTypes from "prop-types"
import {Movie} from './Movie'

// export class MovieList extends Component{
//     static propTypes ={
//         movies: PropTypes.array
//     }
//     render(){
//         const {movies} = this.props                    
// }

export function MovieList({movies}){
    return(
        <div className="MovieList">{            
            movies.map(movie =>{
                return (
                <div key={movie.imdbID} className='MoviesList-item'>
                <Movie                 
                    id={movie.imdbID}   
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                />            
                </div>
                )
                
            })
        }
        </div>
    )
}

MovieList.propTypes = {
    movies: PropTypes.array
}


