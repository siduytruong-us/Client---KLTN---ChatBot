import React, { Component } from 'react';
import { Widget, addResponseMessage  } from 'react-chat-widget';
import socketIOClient  from "socket.io-client"
import { Spin } from 'antd';



class index extends Component {
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
            <div>
                <br/>
                {/* <Spin className = "antd-spinner"> */}
                <Widget 
                    handleNewUserMessage={this.handleNewUserMessage}
                    profileAvatar= "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
                    titleAvatar = "https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png"
                />
               {/* </Spin> */}
            </div>
        );
    }
}

export default index;   