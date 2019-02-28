import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import index from './Components/index'
import { Widget, addResponseMessage  } from 'react-chat-widget';
import socketIOClient  from "socket.io-client"
import Header from "./Components/Navigation/Header"
import Footer from "./Components/Navigation/Footer"

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        socket:null,
    }
    this.socket = null
  }

  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  componentWillMount() { 
      this.socket = socketIOClient("http://localhost:3001")
      this.socket.on("chat message", msg => {
          addResponseMessage(msg)
      });
  }

  handleNewUserMessage = (newMessage) => {
      this.socket.emit("chat message", newMessage)
  }



  render() {
    return (
      <BrowserRouter >
      <div className = "App">
        <Header/>
          <Switch>        
              <Route exact path = "/" component = {index}/>
             
          </Switch>
          <Widget 
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar= "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
            titleAvatar = "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
          />

        <Footer/>
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
