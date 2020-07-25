import {useEffect,useState } from "react"
import getMovies from "../services/getMovies"

export function UseSearch(keywords,page=0){
    const [movies, setMovie] = useState(null)

    useEffect(()=>{           
        getMovies({keywords}).then(movies => setMovie(movies))        
    },[keywords])
  
    return movies
}