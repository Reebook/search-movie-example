import React, { Component } from "react"
import PropTypes from "prop-types"
const API_KEY = "55c318c9"

export class Details extends Component{
    static propTypes = {        
        match: PropTypes.shape({
            params:PropTypes.object,
            isExact:PropTypes.bool,
            path: PropTypes.string,
            url:PropTypes.string
        })
    }

    state = {movie: {}}

    _fectchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json()).then(movie =>{
            console.log(movie)
            this.setState({movie})
            //const {Search = [], totalResults= "0"} = results
            //this.props.onResults(Search)
        })
    }

    _goBack(){
        window.history.back()
    }

    componentDidMount(){
        const {id} = this.props.match.params
        this._fectchMovie({id})
    }

    render(){
        const {Title,Poster,Actors,Metascore,Plot,Rated} = this.state.movie
        return(
            <div>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img src={Poster} alt={Title}/>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <h4>{Rated}</h4>
                <p>{Plot}</p>

            </div>
        )
    }

}