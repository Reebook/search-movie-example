import React from "react"
import PropTypes from "prop-types"
import Pagination from './paginationMovies';
import {Movie} from './Movie'

export function MovieList({movies}){
    console.log(movies)
    if(movies.Search !== undefined){
        return(
        
        <div className="MovieList">
            <div className="columns is-multiline">{   
            
            movies.Search.map(movie =>{
                return ( 
                <div key={movie.imdbID} className='column'>
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
    movies: PropTypes.object
}


