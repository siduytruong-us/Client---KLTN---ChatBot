import React, { Component } from 'react';
import { Select, Button, message } from 'antd';

import axios from "../Config/axiosConfig"
const Option = Select.Option;

var mail = { 
    from: null, 
    content: null,
    subject:null,
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            address:"nvc",
            isSending: false,
            
        }
    }
    
    componentDidMount() {
        window.scrollTo(0,0)
    }
    
    handleChange(value) {
        this.setState({address:value})
        
    }

    handleSendEmail() { 
        mail.subject = document.getElementById("subject").value 
        mail.from = document.getElementById("email").value 
        mail.content = document.getElementById("content").value

        console.log(mail);
        message.loading("Đang gửi. Vui lòng đợi giây lát",1).then(() => { 
            axios.post("/sendmail",mail)
            .then (res => { 
                message.success("Gửi thành công!",2)
                
            })
            .catch( err=> { 
                err = err.response.data
                message.error(err.message, 2)
            })
        })
        
        document.getElementById("subject").value  = ""
        document.getElementById("email").value  = ""
        // document.getElementById("content").value  = ""
        document.getElementById("author").value  = ""
        
    }
    
    render() {
        const address_nvc = (
            <iframe title="This is a unique title" 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6307047611535!2d106.67998301411642!3d10.76291826238761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sHo+Chi+Minh+City+University+of+Science!5e0!3m2!1sen!2s!4v1553328434254"
                                        width="100%" height="450" frameBorder="0" allowFullScreen>
                                </iframe>
        )

        const address_thu_duc = (
            <iframe title="This is a unique title" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1551640163016!2d106.79692491385535!3d10.87580059225415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a1768e1d03%3A0x38d3ea53e0581ae0!2sUniversity+of+Science%2C+Linh+Trung+Campus!5e0!3m2!1sen!2s!4v1553336212934"
                                        width="100%" height="450" frameBorder="0" allowFullScreen>
                                </iframe>
        )
        return (
        <div>
            <section id="mu-page-breadcrumb">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="mu-page-breadcrumb-area">
                        <h2>Liên hệ</h2>
                    </div>
                    </div>
                </div>
                </div>
                </section>
            <section id="mu-contact">
                <div className="container ">
                <div className="row">
                <div className="col-md-12">
                    <div className="mu-contact-area">
                    <div className="mu-title animated fadeIn fast">
                        <h2><b>Hãy giữ liên lạc với chúng tôi</b></h2>
                        <h4>Mọi thắc mắc của bạn hãy gửi qua form email bên dưới sẽ gửi đến email cá nhân của admin website</h4>
                        <h4><a href= "mailto: duytruong7297@gmail.com">duytruong7297@gmail.com</a></h4> 
                    </div>
                    <div className="mu-contact-content">           
                        <div className="row">
                        <div className="col-md-6 animated fadeInLeft fast">
                            <div className="mu-contact-left ">
                            <form className="contactform" >                  
                                <p className="comment-form-author ">
                                <label htmlFor="author">Họ Tên <span className="required">*</span></label>
                                <input type="text" required="required" size="30" name="author" id = "author"/>
                                </p>
                                <p className="comment-form-email">
                                <label htmlFor="email">Email <span className="required">*</span></label>
                                <input type="email" required="required" aria-required="true" name="email" id = "email"/>
                                </p>
                                <p className="comment-form-url">
                                <label htmlFor="subject">Tiêu đề</label>
                                <input type="text" name="subject" id ="subject"/>  
                                </p>
                                <p className="comment-form-comment">
                                <label htmlFor="comment">Nội dung</label>
                                <textarea required="required" aria-required="true" rows="8" cols="45" name="comment" id = "content"></textarea>
                                </p>                
                                <Button onClick = {this.handleSendEmail} type = "primary" shape ="round" size="large" loading = {this.state.isSending}>Gửi</Button>   
                            </form>
                            </div>
                        </div>
                        <div className="col-md-6 animated fadeInRight fast">
                            <div className="mu-contact-right">
                                {this.state.address==="nvc"?address_nvc:address_thu_duc}
                                Địa chỉ: <Select
                                    style={{ width: 200 }}
                                    defaultValue="nvc"
                                    optionFilterProp="children"
                                    onChange={this.handleChange.bind(this)}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="nvc">Nguyễn Văn Cừ</Option>
                                    <Option value="thu_duc">Linh Trung, Thủ Đức</Option>
                                </Select>,
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </section>
        </div>
        );
    }
}

export default Contact;