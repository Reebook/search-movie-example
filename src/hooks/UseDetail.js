import React, {useEffect,useState } from "react"

import getMovie from '../services/getMovie'

// export class Details extends Component{
//     static propTypes = {        
//         match: PropTypes.shape({
//             params:PropTypes.object,
//             isExact:PropTypes.bool,
//             path: PropTypes.string,
//             url:PropTypes.string
//         })
//     }

//     state = {movie: {}}


//     _goBack(){
//         window.history.back()
//     }

//     componentDidMount(){
//         const {id} = this.props.match.params
//         this._fectchMovie({id})
//     }

//     render(){
//       //  const {Title,Poster,Actors,Metascore,Plot,Rated} = this.state.movie
        
//     }

// }

export function UseDetail(id){
    const [movie, setMovie] = useState(null)

    useEffect(()=>{           
        getMovie({id}).then(movie => setMovie(movie))        
    },[id])
  
    return movie
}