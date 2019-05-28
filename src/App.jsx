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
import QnA from "./Components/QnA/QnA"
import SignIn from "./Components/Authentication/SignIn"

// Cẩm nang
import Credits from './Components/CamNang/Credits';
import Contest from './Components/CamNang/Contest'

import Header from "./Components/Navigation/Header"
import Footer from "./Components/Navigation/Footer"

import HandleDateTime from "./Global/Function/HandleDateTime"
import firebase from "./Config/firebaseConfig"
import { Input, Icon, Button, message, Popconfirm, BackTop } from 'antd';
import axios from './Config/axiosConfig';
import moment from 'moment'



import HandleChatFirestore from "./Global/Function/HandleChatFirestore"
import Scholarship from './Components/CamNang/Scholarship';
import Admissions from './Components/CamNang/Admissions';

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
        mode: "admin"
    }

    
    this.socket = null
    this.showModal = this.showModal.bind(this)
  
    this.handleInputStudentInWidget = this.handleInputStudentInWidget.bind(this)
    this.renderOptionsBotOrAdminToWidget = this.renderOptionsBotOrAdminToWidget.bind(this)

    this.handleReportBotReponse = this.handleReportBotReponse.bind(this)
    this.handleChatWithBot = this.handleChatWithBot.bind(this)
    
  }

  //#region component method
  componentDidMount() {
    this.renderGreetingToWidget()
    window.addEventListener("beforeunload", this.onUnload)
    
  }
  
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.onUnload)
  }
  //#endregion

  //#region window event listener 
  onUnload(event) { // the method that will be used for both add and remove event
    sessionStorage.removeItem("student")
    
}

  //#endregion 

  //#region method handle
  handleInputStudentInWidget(e){
    const student = e.target.value
    if(e.key === 'Enter') {
      //Send message e.target.value
      
      if (e.shiftKey)
          console.log(student);
      else if (student !== "") {
          e.preventDefault()
          dropMessages()
          this.renderOptionsBotOrAdminToWidget(student)
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

  handleHistoryConversationFirestoreToWidget = (message) => { 
      if ( message.user ) { 
        addUserMessage(message.text)
      }
      else {
        switch (message.respondent) {
          case "bot": 
            const botReponse = ({data, action}) => {
              return <div  className = "rcw-message" style = {{margin:"0px"}}>
                          <img src="/assets/img/favicon.ico" className="rcw-avatar" alt="profile"/>
                          <div className = "rcw-response">
                              <div className="rcw-message-text">
                                {message.text} - <Popconfirm title={<div>Báo cáo câu trả lời?<Input id = "form-bot-report" placeholder = "Nội dung"/></div>} 
                                                          okText="Có" cancelText="Không"
                                                          icon={<Icon type="info-circle" style={{ color: 'red' }} />}
                                                          onConfirm = {() => this.handleReportBotReponse(message.text)}>
                                                    <Button type="danger" shape="circle" icon="info-circle" size="small" />
                                              </Popconfirm>
                              </div>
                          </div>
                      </div>
            }
            renderCustomComponent(botReponse, {data: this.state.test, action: this.handleReportBotReponse });
            break;
          case "admin":
            addResponseMessage(message.text)
          // eslint-disable-next-line no-fallthrough
          default:
            
            break;
        }
        
      }
  }

  handleNewUserMessage = (msg) => {
      const {student,mode} = this.state

      var {unSeenMessage} = this.state
      if ( unSeenMessage > 0) {
        this.setState({unSeenMessage:0})
      }
      

      
      if (student){
        var userMsg = { 
          sendAt : new Date(),
          text: msg,
          user: "user"
        }
        HandleChatFirestore.addChatToConversation(student,userMsg)
        .catch( err => {addResponseMessage(err)})
      }

      if( mode === "bot") { 
          
          axios.post("/bot/"+ student, {message:msg})
          .then(res => { 
            const data =res.data.data

            var botMsg = { 
              sendAt : new Date(),
              text: data.message,
              respondent:"bot"
            }

            HandleChatFirestore.addChatToConversation(student,botMsg)
            .catch( err => {addResponseMessage(err)})

          })
          .catch(err => {
            message.error(err.toString(),1.5)
          })
      }
  }

  handleChatWithBot() { 
    addResponseMessage("Chào bạn, mình là bot Chris, mình có thể giúp gì cho bạn?")
    this.setState({
      mode:"bot"
    })
  }

  handleReportBotReponse(botResponse) { 
      const {student} = this.state
      const comment = document.getElementById("form-bot-report").value.toString() 
      //  type - create_time - issue - comment - id_issue
      const report = { 
        create_time:  moment(new Date()).valueOf(),
        comment: comment,
        type: "conversation",
        issue: [botResponse],
        id_issue: 152,
      }

      if ( comment ) {
        axios.post("/client/report/create", report)
        .then ( () => { 
          return message.success("Đã gửi báo cáo!",2)
        })
        .catch( err => { 
          if (err.response) { 
            console.log(err.response);
            
            err = err.response.data
            return message.error(err.message.toString(),2)
          }
          return message.error(err.toString(),2)
        })
        .finally( () => { 
          document.getElementById("form-bot-report").value = ""
        })
      }
      else {
        document.getElementById("form-bot-report").value = null
        return message.error("Report không được để trống!" + comment, 2)
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
        // eslint-disable-next-line no-unused-vars
        var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        const conversation = doc.data()  
        if (!conversation) {
           reject("invalid")
        }
        
                        
        var history = conversation.history
        const length = history.length

        if (this.state.isLoading) { 
          this.setState({ conversation, isLoading:false})
          // this.handleHistoryConversationFirestoreToWidget(this.state.conversation)
          // conversation.for(each=>{ 
            
          // })
          
          conversation.history.forEach(each => {
            this.handleHistoryConversationFirestoreToWidget(each)
          });
          resolve("done")
        }
        else {
          if ( history[length - 1].respondent && source === "Local") {
            var count = this.state.unSeenMessage + 1
            this.setState({unSeenMessage: count})
            const resMessage = history[length - 1]
            console.log("setListenInComingConversation");
            console.log(source);
            
            this.handleHistoryConversationFirestoreToWidget(resMessage)
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
          if ( typeof(Storage) !== "undefined") {
            sessionStorage.setItem("student",student)
            // localStorage.setItem("student", student);
            this.setState({student: student})
            addResponseMessage("Chào " + HandleDateTime.greeting() +", bạn "+ student)
            addResponseMessage("Bạn muốn trò chuyện với bot hay admin?")
            renderCustomComponent(this.OptionButton, {data: this.state.test, action: this.handleModalDataChange }); 
          } else {
            message.error('Trình duyệt của bạn đã quá cũ. Hãy nâng cấp trình duyệt ngay!',2)
          }
          
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
        // const OptionButton = ({data, action}) => {
        //   return <div style = {{width: "100%"}}>
        //               <Button style = {{width:"40%", float:"left"}}>Admin</Button> 
        //               <Button style = {{width:"40%", float:"right"}} onClick = {() => this.handleChatWithBot()}> Bot </Button>
        //           </div>
        // }
        renderCustomComponent(this.OptionButton, {data: this.state.test, action: null});
      }
      
  }

  FormD = ({data, action}) => {
    return  <div style = {{paddingTop:"10px"}}>
      <Input
      onKeyPress={action}
      placeholder="Hãy nhập mã số sinh viên của bạn"
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}/>
  
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a  style = {{marginLeft:"10px"}} onClick = { () => {dropMessages(); this.renderOptionsBotOrAdminToWidget()}}>Không phải là sinh viên của trường!</a>
  </div>
  }
  
  OptionButton = ({data, action}) => {
    return <div style = {{width: "100%"}}>
                <Button style = {{width:"40%", float:"left", marginLeft:"20px"}}>Admin</Button> 
                <Button style = {{width:"40%", float:"right", marginRight:"20px"}} onClick = {() => this.handleChatWithBot()}> Bot </Button>
            </div>
  }
  //#endregion

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
              <Route exact path = "/hoi-dap" component = {QnA}/>
              <Route exact path = "/dang-nhap" component = {SignIn}/>

              {/* Cẩm nang */}
              <Route exact path = "/tin-chi-hoc-phan" component = {Credits}/>
              <Route exact path = "/lich-thi" component = {Contest}/>
              <Route exact path = "/hoc-bong-du-hoc" component = {Scholarship}/>
              <Route exact path = "/tuyen-sinh" component = {Admissions}/>

              <Route exact path = "*" component = {ErrorPage}/>
          </Switch>

          <Widget 
            badge = {unSeenMessage}
            onFocus = {() => console.log("123")}
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar= "/assets/img/favicon.ico"
            titleAvatar = "/assets/img/favicon.ico"
          />
          
          
          <BackTop />


          </div>  
        <Footer/>
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
