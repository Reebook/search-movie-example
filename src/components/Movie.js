import React from "react"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

export function Movie({id,poster,title,year}){

    return (
        <div>
                <div className="card">
                    <Link to={`/detail/${id}`}className="">
                    <div className="card-image is-centered">
                        <figure className="image  image-size has-image-centered">
                        <img src={poster} alt={title}/>
                        </figure>
                    </div>
                    </Link>
                    <div className="card-content">                  
                        <p className="title is-4">{title}</p>
                        <p className="subtitle">{year}</p>                                          
                    </div>
                </div>
        </div>
            
        )
}

Movie.propTypes={
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
}