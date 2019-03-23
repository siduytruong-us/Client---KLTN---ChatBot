import React, { Component } from 'react';

class Contact extends Component {
    render() {
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
            <div class="container">
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
                                <iframe title="This is a unique title" 
                                        width="100%" height="450" frameborder="10" allowfullscreen 
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.62386129061!2d106.67987065824396!3d10.763444503994991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sHo+Chi+Minh+City+University+of+Science!5e0!3m2!1sen!2s!4v1551851631507"/>
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