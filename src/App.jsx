import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import index from './Components/index'


class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <div className = "App">

          <Switch>        
              <Route exact path = "/" component = {index}/>
             
          </Switch>
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
