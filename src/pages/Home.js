import React, {useState, useEffect } from 'react';
import {Title} from '../components/Title'
import { UseSearch } from '../hooks/UseSearch';
import getMovies from '../services/getMovies';
import { MovieList } from '../components/MovieList';

export default function Home(){
  const [keyword, setKeyword] = useState(localStorage.getItem('lastSearch') || '')

  let [results, setResults] = useState(null)
  
  const _handleSubmit = evt =>{
    evt.preventDefault()
    //setKeyword(keyword)    
  }
   
  const _handleChange = evt =>{
        evt.preventDefault()       
        console.log(evt.target.value)
        localStorage.setItem('lastSearch', evt.target.value);
        setKeyword(evt.target.value)
  }

  const  _renderResults = () => {
          return (
            results.length === 0 
            ? <p>Sin resultados</p>
            : <MovieList movies={results}/>
          )
        }

  useEffect(()=>{
    getMovies(keyword).then(results=> setResults(results))
  },[keyword])

  return (
        <div className="is-mobile is-centered">
            <Title>Search Movies</Title>
            <form onSubmit={_handleSubmit} className="columns is-centered margin-bottom">
                
                  <div className="control ">
                    <input 
                    className="input" type="text"
                    onChange={_handleChange} 
                    type="text" 
                    value={keyword}
                    placeholder="buscar una pelicula"/>
                  </div>
                  <div className="control ">
                      <button className="button is-info">
                      Buscar
                      </button>
                  </div>
                                  
            </form>

            <div className="container is-fluid">
              
           
            {results
            ? _renderResults()
            : <small>Use este formulario para buscar una pelicula</small>
            }
             </div>
        </div>
    )
}
