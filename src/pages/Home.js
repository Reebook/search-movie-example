import React, {useState, useEffect } from 'react';
import {Title} from '../components/Title'
import { UseSearch } from '../hooks/UseSearch';
import getMovies from '../services/getMovies';
import { MovieList } from '../components/MovieList';

// export class Home extends Component {
//     state = {usedSearch: false, results: []}

//     _handleResults = (results)=>{
//       this.setState({results,usedSearch:true})  
//     }
  
//     _renderResults () {
//       return (
//         this.state.results.length === 0 
//         ? <p>Sin resultados</p>
//         : <MovieList movies={this.state.results}/>
//       )
//     }

//     render(){
//       const _handleSubmit = evt =>{
//         evt.preventDefault()
//         this.state.results =  UseSearch(evt.target.value)
//         }
       
//         const _handleChange= evt =>{
//             evt.preventDefault()
            
//            console.log(evt.target.value)
//        }
//         return (
//             <div>
//                 <Title>Search Movies</Title>
//                 <div className="SearchForm-wrapper">
//                 <form onSubmit={_handleSubmit}>
//             <div className="field has-addons">
//             <div className="control">
//                 <input 
//                 className="input"
//                 onChange={_handleChange} 
//                 type="text" 
//                 placeholder="buscar una pelicula"/>
//             </div>
//             <div className="control">
//                 <button className="button is-info">
//                 Buscar
//                 </button>
//             </div>
//             </div>
//         </form>
//                 </div>
//                 {this.state.usedSearch
//                 ? this._renderResults()
//                 : <small>Use este formulario para buscar una pelicula</small>
//                 }
//             </div>
//         )
//     }
// }

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
        <div>
            <Title>Search Movies</Title>
            <div className="SearchForm-wrapper">
            <form onSubmit={_handleSubmit}>
        <div className="field has-addons">
        <div className="control">
            <input 
            className="input"
            onChange={_handleChange} 
            type="text" 
            value={keyword}
            placeholder="buscar una pelicula"/>
        </div>
        <div className="control">
            <button className="button is-info">
            Buscar
            </button>
        </div>
        </div>
    </form>
            </div>
            {results
            ? _renderResults()
            : <small>Use este formulario para buscar una pelicula</small>
            }
        </div>
    )
}
