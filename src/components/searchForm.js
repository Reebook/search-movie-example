import React from "react"

import { UseSearch } from "../hooks/UseSearch"

import { useMovies } from '../context/MoviesContext';

export default function SearchForm({onSubmit}){
    const {keyword,setKeyword} = useMovies()

    const _handleSubmit = evt =>{
        evt.preventDefault()               
        onSubmit(keyword)
 
    }
   
    const _handleChange = evt =>{
         evt.preventDefault()               
         setKeyword(evt.target.value)        
         localStorage.setItem('lastSearch', evt.target.value);       
    }

    return (
        <form className="columns is-centered margin-bottom">                
                  <div className="control">
                    <input 
                    className="input" 
                    type="text"
                    onChange={_handleChange} 
                    value={keyword}
                    placeholder="buscar una pelicula"/>
                  </div>
                  <div className="control" onClick={_handleSubmit}>
                      <button className="button is-info">
                      Buscar
                      </button>
                  </div>    
            </form>
    )
}