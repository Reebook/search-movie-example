import React from 'react';
import {Title} from '../components/Title'
import SearchForm from '../components/searchForm';
import { MovieList } from '../components/MovieList';
import { useMovies } from '../context/MoviesContext';
import { UseSearch } from '../hooks/UseSearch';
export default function Home(){
  
  const {results, setKeyword, setPage, keyword} = useMovies()    
  const onSubmit =(key) =>{
    localStorage.setItem('lastSearch', key);
    console.log(key)
     setPage(1)
     setKeyword(key)
    
    
  }
  const  _renderResults = () => {
    return (
        results.length === 0 
        ? <p>Sin resultados</p>
        : <MovieList movies={results} search={keyword}/>
    )
} 
        
  return (
        <div className="is-mobile is-centered">
            <Title>Search Movies</Title>
            <SearchForm onSubmit={onSubmit}/>

            <div className="container is-fluid">
           
            {results
            ? _renderResults()
            : <small>Use este formulario para buscar una pelicula</small>
            }
             </div>
        </div>
    )
}
