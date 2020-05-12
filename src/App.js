import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Switch, Route} from 'react-router-dom'
import {Details} from './pages/Details'
import Home from './pages/Home'

import {NotFound} from './pages/NotFound'
class App extends Component {
  
  

  render(){
    const url = new URL(document.location)
    const hasID = url.searchParams.has('id')

    if(hasID){
        return <Details id={url.searchParams.get('id')}/>
    }
  return (
    
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/detail/:id' component={Details}/>
        <Route  component={NotFound}/>
      </Switch>
    
      
    </div>
  );
  }
}



export default App;
