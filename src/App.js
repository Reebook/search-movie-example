import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {Switch, Route} from 'react-router-dom'
import {Details} from './pages/Details'
import Home from './pages/Home'

import {NotFound} from './pages/NotFound'
import {MoviesProvider} from './context/MoviesContext';


export default ()=><MoviesProvider>
  <App></App>
</MoviesProvider>
function App(){
   
    const url = new URL(document.location)
    const hasID = url.searchParams.has('id')
    
    if(hasID){
        return <Details id={url.searchParams.get('id')}/>
    }else{    
  return (
    
    <div className="App">
      <Switch>

        <Route exact path={`${url.pathname}`} component={Home}/>
        <Route path='/detail/:id' component={Details}/>
        <Route path='/:id' component={Home}/>
        <Route  component={NotFound}/>
  
      </Switch>           
      
    </div>
  );
  }
  }

