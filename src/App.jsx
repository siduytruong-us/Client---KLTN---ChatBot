import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import index from './Components/index'
import { Widget, addResponseMessage, addUserMessage,renderCustomComponent,dropMessages } from 'react-chat-widget';

import Department from "./Components/Department/Department"
import DetailDepartment from "./Components/Department/DetailDepartment"
import Contact from "./Components/Contact"
import Header from "./Components/Navigation/Header"
import Footer from "./Components/Navigation/Footer"

import HandleDateTime from "./Global/Function/HandleDateTime"
import firebase from "./Config/firebaseConfig"
import { Input, Icon, Tooltip, Button } from 'antd';


const conversationFirestore = firebase.firestore().collection("Conversation")
          

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = { 
        conversation: {
          history:[] 
        },
        socket:null,
        visible: false ,
        isLoading: true,
        unSeenMessage: 0,
        
    }
    this.socket = null
    this.showModal = this.showModal.bind(this)
  
    this.handleInputStudentInWidget = this.handleInputStudentInWidget.bind(this)
    this.renderOptionsBotOrAdminToWidget = this.renderOptionsBotOrAdminToWidget.bind(this)
    
  }

  //#region component method
  componentDidMount() {
    this.renderGreetingToWidget()
  }

  //#endregion

  //#region method
  handleInputStudentInWidget(e){
    const text = e.target.value
    if(e.key === 'Enter') {
      //Send message e.target.value
      
      if (e.shiftKey)
          console.log(text);
      else if (text !== "") {
          e.preventDefault()
          dropMessages()
          this.renderOptionsBotOrAdminToWidget(text)
      }
    }  
  }

  handeListenInComingConversationFirestore(student,resolve,reject) { 
    // z_prGZLT8BOykCpXAAAD
    conversationFirestore.doc("z_prGZLT8BOykCpXAAAD").onSnapshot({
      includeMetadataChanges: true
    }, doc => {
      try {
        var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        const conversation = doc.data()  
        
                        
        var history = conversation.history
        const length = history.length

        if (this.state.isLoading) { 
          this.setState({ conversation, isLoading:false})
          this.handleHistoryConversationFirestoreToWidget(this.state.conversation)
          resolve("done")
        }
        else {
          if ( history[length - 1].respondent )
            var count = this.state.unSeenMessage + 1
            console.log(count);
            
            this.setState({unSeenMessage: count})
            console.log(this.state.unSeenMessage);
            
            addResponseMessage(history[length - 1].text);
        }
      }
      catch (ex) { 
        reject(ex.toString())
      }
        
    }, err =>  {
      reject(err)
    })
  }

  handleHistoryConversationFirestoreToWidget = (conversation) => { 
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
  //#endregion 


  //#region renderCustomComponent Widget
  renderGreetingToWidget() {
      addResponseMessage("Chào mừng bạn tới Sổ tay sinh viên online")
      addResponseMessage("Để hỗ trợ bạn tốt nhất trong việc tìm kiếm thông tin, bạn hãy điền MSSV vào ô nếu bạn đã là thành viên của HCMUS")
      const FormD = ({data, action}) => {
        return  <div style = {{paddingTop:"10px"}}>
          <Input
          onKeyPress={action}
          placeholder="Hãy nhập mã số sinh viên của bạn"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>

        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick = { () => {dropMessages(); this.renderOptionsBotOrAdminToWidget()}}>Không phải là sinh viên của trường!</a>
      </div>
      }

      renderCustomComponent(FormD, {data: this.state.test, action: this.handleInputStudentInWidget});
  }

  renderOptionsBotOrAdminToWidget(student){ 
      if ( student) {
        addResponseMessage("Đang tải đoạn hội thoại cũ!")
        var promise = new Promise( (resolve, reject) => {
            this.handeListenInComingConversationFirestore(student,resolve,reject)
        })
        
        promise.then( res => {
          addResponseMessage("Chào bạn " + HandleDateTime.greeting() +" "+ student)
          addResponseMessage("Bạn muốn trò chuyện với bot hay admin?")
          const OptionButton = ({data, action}) => {
            return <div style = {{width: "100%"}}>
                        <Button style = {{width:"40%", float:"left"}}>Admin</Button> 
                        <Button style = {{width:"40%", float:"right"}}> Bot </Button>
                    </div>
          }
          renderCustomComponent(OptionButton, {data: this.state.test, action: this.handleModalDataChange });
        }).catch( err => {
            addResponseMessage("Đã xảy ra lỗi ")
            addResponseMessage(err)
            addResponseMessage("Tải lại trang để khắc phục sự cố!")
        })
        
      }
        
      else  {
        addResponseMessage("Cám ơn bạn đã sử dụng Sổ tay sinh viên của HCMUS")
        addResponseMessage("Bạn hãy đăng ký thành viên để nhận nhiều thông báo về trường hơn nhé!")
        addResponseMessage("Chức năng chat có hỗ trợ chatbot trả lời tự động. Bạn có thể tìm kiếm thông tin nhanh hơn nhờ bot.")
        addResponseMessage("Bạn muốn trò chuyện với bot hay admin?")
        const OptionButton = ({data, action}) => {
          return <div style = {{width: "100%"}}>
                      <Button style = {{width:"40%", float:"left"}}>Admin</Button> 
                      <Button style = {{width:"40%", float:"right"}}> Bot </Button>
                  </div>
        }
        renderCustomComponent(OptionButton, {data: this.state.test, action: this.handleModalDataChange });
      }
      
  }
  render() {
    var {unSeenMessage} = this.state
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
            badge = {unSeenMessage}
            onFocus = {() => console.log("123")}
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
