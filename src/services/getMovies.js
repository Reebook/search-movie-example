const API_KEY = "55c318c9"

export default function  getMovies(keywords,page){
    
    return fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${keywords}&page=${page}`)
    .then(res => res.json()).then(results =>{
        console.log(results)        
        return results
    })
}
