import React from "react"

import { UseSearch } from "../hooks/UseSearch"

// export class SearchComponent extends Component{
//     state = {
//         inputMovie : ""
//     }

//     _handleChange = (e) => {
//         this.setState({inputMovie: e.target.value})
//     }

//     _handleSubmit = (e) =>{
//         e.preventDefault()
//         fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${this.state.inputMovie}`)
//         .then(res => res.json()).then(results =>{
//             console.log(results)
//             const {Search = [], totalResults= "0"} = results
//             this.props.onResults(Search)
//         })
//     }

//     render(){
//         return (
//             <form onSubmit={this._handleSubmit}>
//                 <div className="field has-addons">
//                 <div className="control">
//                     <input 
//                     className="input"
//                     onChange={this._handleChange} 
//                     type="text" 
//                     placeholder="buscar una pelicula"/>
//                 </div>
//                 <div className="control">
//                     <button className="button is-info">
//                     Buscar
//                     </button>
//                 </div>
//                 </div>
//             </form>
//         )
//     }
// }

// function _handleChange = (e) => {
//     this.setState({inputMovie: e.target.value})
// }


export default function SearchForm(props){

   const _handleSubmit = evt =>{
    evt.preventDefault()
        UseSearch(evt.target.value)
    }
   
    const _handleChange= evt =>{
        evt.preventDefault()
        
       console.log(evt.target.value)
   }
    

    return (
        <form onSubmit={_handleSubmit}>
            <div className="field has-addons">
            <div className="control">
                <input 
                className="input"
                onChange={_handleChange} 
                type="text" 
                placeholder="buscar una pelicula"/>
            </div>
            <div className="control">
                <button className="button is-info">
                Buscar
                </button>
            </div>
            </div>
        </form>
    )
}