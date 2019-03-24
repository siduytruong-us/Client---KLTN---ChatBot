import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import index from './Components/index'
import { Widget, addResponseMessage, addUserMessage,addLinkSnippet,renderCustomComponent  } from 'react-chat-widget';

import Department from "./Components/Department/Department"
import DetailDepartment from "./Components/Department/DetailDepartment"
import Contact from "./Components/Contact"
import Header from "./Components/Navigation/Header"
import Footer from "./Components/Navigation/Footer"
import { Modal } from 'antd';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        socket:null,
        visible: false ,
    }
    this.socket = null
    this.showModal = this.showModal.bind(this)
  }

  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
    addUserMessage("Welcome")
    addLinkSnippet({
      title: 'My awesome link',
      link: 'https://github.com/Wolox/react-chat-widget',
      target: '_blank'
    })

    // renderCustomComponent(<div>asd</div>)
  }

  componentWillMount() { 
      // this.socket = socketIOClient("http://localhost:3001")
      // this.socket.on("chat message", msg => {
          addResponseMessage("Hello")
      // });
  }

  handleNewUserMessage = (newMessage) => {
      // this.socket.emit("chat message", newMessage)
  }

  

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <BrowserRouter >
      <div className = "App">
        <Header/>
          <Switch>        
              <Route exact path = "/" component = {index}/>
              <Route exact path = "/department" component = {Department}/>
              <Route exact path = "/department/:alias" component = {DetailDepartment}/>
              <Route exact path = "/contact" component = {Contact}/>
          </Switch>
          <div onClick = {this.showModal}> 
          <Widget 
            badge = {1}
            style = {{zIndex: "999999999"}}
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar= "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
            titleAvatar = "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
          />
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Footer/>
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
