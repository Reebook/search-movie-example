import {useEffect,useState } from "react"

import getMovie from '../services/getMovie'

export function UseDetail(id){
    const [movie, setMovie] = useState(null)

    useEffect(()=>{           
        getMovie({id}).then(movie => setMovie(movie))        
    },[id])
  
    return movie
}