import React, {createContext, useContext, useEffect, useState, useMemo} from "react"
import getMovies from "../services/getMovies";

export const MoviesContext = createContext(null);

export function MoviesProvider(props){
    const [results, setResults]  = useState(null)
    const [keyword, setKeyword]  = useState(localStorage.getItem('lastSearch'))
    const [page, setPage]  = useState(1)
    //const {keyword} = props

      useEffect(()=>{
        getMovies(keyword,page).then(results=> setResults(results))
      },[keyword,page])

      const value = useMemo(()=> {
            return ({
                results,
                keyword,
                setKeyword,
                page,
                setPage
            })
      }, [results,keyword,page])


      return <MoviesContext.Provider value={value} {...props}/>
}

export function useMovies()
{
    const context = useContext(MoviesContext);
    if(!context){
        throw new Error("Ocurrio un error en UseMovies")
    }

    return context;
}