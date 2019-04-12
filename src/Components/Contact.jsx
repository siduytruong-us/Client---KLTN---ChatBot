import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            address:"nvc",
        }
    }
    
    handleChange(value) {
        this.setState({address:value})
    }
    
    render() {
        const address_nvc = (
            <div className = "animated fadeIn slow">
            <iframe title="This is a unique title" 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6307047611535!2d106.67998301411642!3d10.76291826238761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sHo+Chi+Minh+City+University+of+Science!5e0!3m2!1sen!2s!4v1553328434254"
                                        width="100%" height="450" frameborder="0" allowfullscreen>
                                </iframe>
            </div>
        )

        const address_thu_duc = (
            <div className = "animated fadeIn slow">
            <iframe title="This is a unique title" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1551640163016!2d106.79692491385535!3d10.87580059225415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a1768e1d03%3A0x38d3ea53e0581ae0!2sUniversity+of+Science%2C+Linh+Trung+Campus!5e0!3m2!1sen!2s!4v1553336212934"
                                        width="100%" height="450" frameborder="0" allowfullscreen>
                                </iframe>
            </div>
        )
        return (
        <div>
            <section id="mu-page-breadcrumb">
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <div class="mu-page-breadcrumb-area">
                        <h2>Liên hệ</h2>
                    </div>
                    </div>
                </div>
                </div>
                </section>
                <section id="mu-contact">
       
           
            <div class="container animated fadeIn fast">
                <div class="row">
                <div class="col-md-12">
                    <div class="mu-contact-area">
                    <div class="mu-title">
                        <h2><b>Get in Touch</b></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ut laboriosam corporis doloribus, officia, accusamus illo nam tempore totam alias!</p>
                    </div>
                    <div class="mu-contact-content">           
                        <div class="row">
                        <div class="col-md-6">
                            <div class="mu-contact-left">
                            <form class="contactform">                  
                                <p class="comment-form-author">
                                <label for="author">Name <span class="required">*</span></label>
                                <input type="text" required="required" size="30" value="" name="author"/>
                                </p>
                                <p class="comment-form-email">
                                <label for="email">Email <span class="required">*</span></label>
                                <input type="email" required="required" aria-required="true" value="" name="email"/>
                                </p>
                                <p class="comment-form-url">
                                <label for="subject">Subject</label>
                                <input type="text" name="subject"/>  
                                </p>
                                <p class="comment-form-comment">
                                <label for="comment">Message</label>
                                <textarea required="required" aria-required="true" rows="8" cols="45" name="comment"></textarea>
                                </p>                
                                <p class="form-submit">
                                <input type="submit" value="Send Message" class="mu-post-btn" name="submit"/>
                                </p>        
                            </form>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mu-contact-right">
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