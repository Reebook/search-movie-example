import React from "react"
import { UseDetail } from "../hooks/UseDetail"

function _goBack(){
    window.history.back()
}
export function Details(){
    

    const url = document.location.pathname
    
    const movie = UseDetail(url.split("/")[2])  
    if(movie != null) { 
        return(
            <div className="columns is-mobile is-centered">                
                <div className="column is-half box">
                    <button onClick={_goBack} className="button is-primary">Volver</button>
                    <h1 className="title is-5">{movie.Title}</h1>
                    <img src={movie.Poster} alt={movie.Title}/>
                    <h3>{movie.Actors}</h3>
                    <div class="tags has-addons is-centered">
                        <span className="tag is-dark">Score</span>
                        <span className="tag is-normal">{movie.Metascore}</span>
                    </div>
                    <div class="tags has-addons is-centered">
                        <span className="tag is-dark">Rated</span>
                        <span className="tag is-normal">{movie.Rated}</span>
                    </div>
                    <p>{movie.Plot}</p>
                </div>
            </div>
        )   
    }else {
        return(
        <div>
        <button onClick={_goBack}>Volver</button>
        </div>)
    }

}