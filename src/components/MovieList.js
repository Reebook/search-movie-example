import React from "react"
import PropTypes from "prop-types"
import Pagination from './paginationMovies';
import {Movie} from './Movie'


// export class MovieList extends Component{
//     static propTypes ={
//         movies: PropTypes.array
//     }
//     render(){
//         const {movies} = this.props                    
// }

export function MovieList({movies}){
    console.log(movies)
    if(movies.Search !== undefined){
    return(
        
        <div className="MovieList columns">{   
            
            movies.Search.map(movie =>{
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
 
               <Pagination countPages={movies.totalResults}/>
        </div>
    )
    }else{
        return(
            <div className="MovieList columns">
            </div>
        )
    }
}

MovieList.propTypes = {
    movies: PropTypes.array
}


