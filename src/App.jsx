import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import index from './Components/index'
import { Widget, addResponseMessage, addUserMessage,renderCustomComponent,dropMessages } from 'react-chat-widget';

import Department from "./Components/Department/Department"
import DetailDepartment from "./Components/Department/DetailDepartment"
import Contact from "./Components/Contact"
import FunctionRoom from "./Components/FunctionRoom"
import Library from "./Components/Library"
import ErrorPage from "./Components/ErrorPage"

import Header from "./Components/Navigation/Header"
import Footer from "./Components/Navigation/Footer"

import HandleDateTime from "./Global/Function/HandleDateTime"
import firebase from "./Config/firebaseConfig"
import { Input, Icon, Button } from 'antd';


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
        student: null,
        isChatEnable: false,
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

  //#region method handle
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

    student = student.toString()
    conversationFirestore.doc(student)
    .get()
    .then(doc => {

        if (!doc.exists) {
          dropMessages()
          this.setState({student:null})
          reject("invalid")
        }
        else {
          this.setState({student:student})
          this.setListenInComingConversation(student,resolve,reject)
        }
        

    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    
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
      var {unSeenMessage} = this.state
      if ( unSeenMessage > 0) {
        this.setState({unSeenMessage:0})
      }
      var temp = { 
        sendAt : new Date(),
        text: message,
        user: "user"
      }

      const student = this.state.student
      if (student){
        conversationFirestore.doc(student.toString()).update({
          history: firebase.firestore.FieldValue.arrayUnion(temp),
          lastMessage: new Date(),
        }).catch(err => {
          addResponseMessage(err.toString())
        })
      }
        
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

  //#region method 
  setListenInComingConversation(student,resolve,reject) {
    conversationFirestore.doc(student).onSnapshot({
      includeMetadataChanges: true
    }, doc => {
      try {
        var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        const conversation = doc.data()  
        if (!conversation) {
           reject("invalid")
        }
        
                        
        var history = conversation.history
        const length = history.length

        if (this.state.isLoading) { 
          this.setState({ conversation, isLoading:false})
          this.handleHistoryConversationFirestoreToWidget(this.state.conversation)
          resolve("done")
        }
        else {
          if ( history[length - 1].respondent ) {
            var count = this.state.unSeenMessage + 1
            this.setState({unSeenMessage: count})
            addResponseMessage(history[length - 1].text);
          }
        }
      }
      catch (ex) { 
        reject(ex.toString())
      }
        
    }, err =>  {
      reject(err)
    })
  }
  //#endregion


  //#region renderCustomComponent Widget
  renderGreetingToWidget() {
      addResponseMessage("Chào mừng bạn tới Sổ tay sinh viên online")
      addResponseMessage("Để hỗ trợ bạn tốt nhất trong việc tìm kiếm thông tin, bạn hãy điền MSSV vào ô nếu bạn đã là thành viên của HCMUS")
      renderCustomComponent(this.FormD, {data: this.state.test, action: this.handleInputStudentInWidget});
  }

  renderOptionsBotOrAdminToWidget(student){ 
      if ( student) {
        addResponseMessage("Đang tải đoạn hội thoại cũ!")
        var promise = new Promise( (resolve, reject) => {
            this.handeListenInComingConversationFirestore(student,resolve,reject)
        })
        
        promise.then( res => {
          addResponseMessage("Chào " + HandleDateTime.greeting() +", bạn "+ student)
          addResponseMessage("Bạn muốn trò chuyện với bot hay admin?")
          renderCustomComponent(this.OptionButton, {data: this.state.test, action: this.handleModalDataChange });
        })
        .catch( err => {
            addResponseMessage("Đã xảy ra lỗi ")
            if (err === "invalid") {
              addResponseMessage("MSSV của bạn sai vui lòng nhập lại")
              renderCustomComponent(this.FormD, {data: this.state.test, action: this.handleInputStudentInWidget});
            }
            else {
              addResponseMessage(err.toString())
              addResponseMessage("Tải lại trang để khắc phục sự cố!")
            }
            
        })
        
      }
        
      else  {
        addResponseMessage("Cám ơn bạn đã sử dụng Sổ tay sinh viên của HCMUS")
        addResponseMessage("Bạn hãy đăng ký thành viên để được hỗ trợ tốt nhất và nhận nhiều thông báo về trường hơn nhé!")
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

  FormD = ({data, action}) => {
    return  <div style = {{paddingTop:"10px"}}>
      <Input
      onKeyPress={action}
      placeholder="Hãy nhập mã số sinh viên của bạn"
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
  
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a onClick = { () => {dropMessages(); this.renderOptionsBotOrAdminToWidget()}}>Không phải là sinh viên của trường!</a>
  </div>
  }
  
  OptionButton = ({data, action}) => {
    return <div style = {{width: "100%"}}>
                <Button style = {{width:"40%", float:"left"}}>Admin</Button> 
                <Button style = {{width:"40%", float:"right"}}> Bot </Button>
            </div>
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
              <Route exact path = "/khoa-nganh" component = {Department}/>
              <Route exact path = "/khoa-nganh/:alias" component = {DetailDepartment}/>
              <Route exact path = "/lien-he" component = {Contact}/>
              <Route exact path = "/phong-chuc-nang" component = {FunctionRoom}/>
              <Route exact path = "/thu-vien" component = {Library}/>
              <Route exact path = "*" component = {ErrorPage}/>
          </Switch>

          <Widget 
            badge = {unSeenMessage}
            onFocus = {() => console.log("123")}
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar= "/assets/img/favicon.ico"
            titleAvatar = "/assets/img/favicon.ico"
          />
        </div>
        <Footer/>
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
