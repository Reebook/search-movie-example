import React, { Component } from 'react';
import {Title} from '../components/Title'
import { SearchComponent } from '../components/searchForm';
import {MovieList} from '../components/MovieList'

export class Home extends Component {
    state = {usedSearch: false, results: []}

    _handleResults = (results)=>{
      this.setState({results,usedSearch:true})  
    }
  
    _renderResults () {
      return (
        this.state.results.length === 0 
        ? <p>Sin resultados</p>
        : <MovieList movies={this.state.results}/>
      )
    }

    render(){
    
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                <SearchComponent onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch
                ? this._renderResults()
                : <small>Use este formulario para buscar una pelicula</small>
                }
            </div>
        )
    }
}