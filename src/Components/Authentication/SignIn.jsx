import React, { Component } from 'react';
import axios from '../../Config/axiosConfig';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: null
        }
    }

    componentDidMount() { 
        axios.get('/client/news/hcmus')
        .then( res => {
            console.log(res.data);
            
            this.setState({content: res.data})
        })
        .catch( err => { 

        })
    }
    
    render() {
        return (
            <div className ="container">
                <div dangerouslySetInnerHTML={{__html: this.state.content}} ></div>
            </div>
        );
    }
}

export default SignIn;