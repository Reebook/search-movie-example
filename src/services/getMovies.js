const API_KEY = "55c318c9"

export default function  getMovies(keywords){
    
    return fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${keywords}`)
    .then(res => res.json()).then(results =>{
        console.log(results)        
        return results
    })
}
