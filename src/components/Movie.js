import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

// export class Movie extends Component{

//     static propTypes ={
//         id: PropTypes.string,
//         title: PropTypes.string,
//         year: PropTypes.string,
//         poster: PropTypes.string
//     }

//     render(){
//         const {id,poster,title,year} = this.props
//         return 
//     }
// }

export function Movie({id,poster,title,year}){

    return (
            <Link to={`/detail/${id}`}className="card">
                <div className="card-image">
                    <figure className="image image-size">
                    <img src={poster} alt={title}/>
                    </figure>
                </div>
                <div className="card-content image image-size">
                    <div className="media">      
                        <div className="media-content">
                            <p className="title">{title}</p>
                            <p className="subtitle">{year}</p>
                        </div>
                    </div>    
                </div>
            </Link>
        )
}

Movie.propTypes={
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
}