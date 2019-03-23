import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import index from './Components/index'
import { Widget, addResponseMessage  } from 'react-chat-widget';
// import socketIOClient  from "socket.io-client"

import NavHeader from "./Components/Navigation/Header"

import Department from "./Components/Department"
import Contact from "./Components/Contact"
import { Layout } from 'antd'


import './App.css';
const {
   Content
} = Layout;


class App extends Component {


  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  componentWillMount() { 
      // this.socket = socketIOClient("http://localhost:3001")
      // this.socket.on("chat message", msg => {
          // addResponseMessage(msg)
      // });
  }

  handleNewUserMessage = (newMessage) => {
      // this.socket.emit("chat message", newMessage)
  }



  render() {
    return (
      <BrowserRouter>
      <div className ="container">
      
          <Layout >

            <NavHeader/>      
          
              <Layout >
              <Switch>        
                        <Route exact path = "/" component = {index}/>
                        <Route exact path = "/department" component = {Department}/>
                        <Route exact path = "/contact" component = {Contact}/>
              </Switch>
                    <Widget 
                      handleNewUserMessage={this.handleNewUserMessage}
                      profileAvatar= "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
                      titleAvatar = "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
                    />

              </Layout>

          </Layout>
        </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
