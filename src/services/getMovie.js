const API_KEY = "55c318c9"

export default function  getMovie(id){
    
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id.id}`)
        .then(res => res.json())
        .then(movie =>{           
            return movie
        })
}
