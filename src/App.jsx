import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import index from './Components/index'
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';

import Department from "./Components/Department/Department"
import DetailDepartment from "./Components/Department/DetailDepartment"
import Contact from "./Components/Contact"
import Header from "./Components/Navigation/Header"
import Footer from "./Components/Navigation/Footer"

import firebase from "./Config/firebaseConfig"


const conversationFirestore = firebase.firestore().collection("Conversation")
          

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
        conversation: { 
        },
        socket:null,
        visible: false ,
        isLoading: true,
    }
    this.socket = null
    this.showModal = this.showModal.bind(this)
  }

  componentDidMount() {
    // addResponseMessage("Welcome to this awesome chat!");
    
    // console.log(conversation);
    // this.handleHistoryConversationFirestore(conversation)
  }

  componentDidUpdate(){
    console.log("update");
    
    
  }

  componentWillMount() { 
    
          // addResponseMessage("Hello")
          conversationFirestore.doc("z_prGZLT8BOykCpXAAAD").onSnapshot({
              includeMetadataChanges: true
          }, doc => {
              var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
              const conversation = doc.data()                  
              if (this.state.isLoading) { 
                this.handleHistoryConversationFirestore(conversation)
              }
              this.setState({ conversation, isLoading:false})
          })
          
  }

  handleHistoryConversationFirestore = (conversation) => { 
      conversation.history.map(each => { 
        if ( each.user ) { 
          addUserMessage(each.text)
        }
        else {
          addResponseMessage(each.text)
        }
      })
  }

  handleNewUserMessage = (message) => {
      // this.socket.emit("chat message", newMessage)
      var temp = { 
        sendAt : new Date(),
        text: message,
        user: "user"
    }

      conversationFirestore.doc("z_prGZLT8BOykCpXAAAD").update({
        history: firebase.firestore.FieldValue.arrayUnion(temp),
        lastMessage: new Date(),
      })
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
        <div style = {{paddingTop:"70px"}}>
          <Switch >        
              <Route exact path = "/" component = {index}/>
              <Route exact path = "/department" component = {Department}/>
              <Route exact path = "/department/:alias" component = {DetailDepartment}/>
              <Route exact path = "/contact" component = {Contact}/>
          </Switch>

          <Widget 
            badge = {1}
            
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar= "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
            titleAvatar = "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
          />
        </div>
        
        <Footer/>
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
