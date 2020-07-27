import {useEffect,useState } from "react"
import getMovies from "../services/getMovies"

export function UseSearch(keywords,page=1){
    const [movies, setMovie] = useState(null)

    useEffect(()=>{           
        getMovies({keywords, page}).then(movies => setMovie(movies))        
    },[keywords])
  
    return movies
}