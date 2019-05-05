import React, { Component } from 'react';
import {Collapse, Divider, message, Modal, Button, Icon, Spin, Skeleton} from "antd"
import AOS from "aos"
import axios from "axios"
import moment from 'moment';

const Panel = Collapse.Panel;

const titleImageSliderStyle = { 
    fontSize: "35px",
}

class index extends Component {

    constructor(props) {
        super(props);
        AOS.init({
            once:true
        })
        this.state = { 
            newsAlias: "thong-bao",
            news:[],
            visibleModal: false,
            selectedNews: {
                title:"",
                content:"",
                author:"",
                hits :null,
                department :"",
                create_time :"",
            },
        }

        this.handleViewNews = this.handleViewNews.bind(this)
        this.updateHitsArticle = this.updateHitsArticle.bind(this)
        this.fetchNewsFromServer = this.fetchNewsFromServer.bind(this)
    }
    
    // componentDidMount(){
    //     AOS.init()
    // }

    //#region method
    updateHitsArticle(article) { 
        axios.post("/client/news/article/hits/increase", article)
        .then( res => { 

        })
        .catch( err => { 
            if (err.response) { 
                err = err.response.data
                return message.error(err.message.toString(),1.5)

            }
            return message.error(err.toString(),1.5)
        })
    }
    fetchNewsFromServer( alias ){
        axios.post("/client/news/get/department",{
            alias: alias,
        })
        .then( res => { 
            const data = res.data.data
            this.setState({news:data})
            
        })
        .catch( err => {
            err = err.response? err.response.data:err.toString() 
            message.error(err.message,2)
        })
    }
    //#endregion 

    //#region method component
    componentWillMount () { 
        console.log("will mount");
        window.scrollTo(0,0)
        AOS.refresh()

        const {newsAlias} = this.state
        this.fetchNewsFromServer(newsAlias)
       
    }

    componentWillReceiveProps() { 
        AOS.refresh()
    }

    componentDidMount() { 
        window.scrollTo(0,0)
    }
    //#endregion

    //#region handle method
    handleViewNews(news) { 
        this.updateHitsArticle(news)
        this.setState({
            visibleModal: true,
            selectedNews: news,
        });
    }

    handleOk = (e) => {
        this.setState({visibleModal: false,});
      }
    
    handleCancel = (e) => {
        this.setState({visibleModal: false,});
    }
    //#endregion
    
    
    render() {
        const {news,selectedNews,visibleModal} = this.state
        return (
            <div>
                
                <section id="mu-slider">
                    <div className="mu-slider-single">
                    <div className="mu-slider-img">
                        <figure>
                        <img src="/assets/img/slider/1.jpg" alt="img"/>
                        </figure>
                    </div>
                    <div className="mu-slider-content" color = "white">
                        <p style={titleImageSliderStyle}>Chào mừng bạn tới Trường đại học Khoa học tự nhiên</p>
                        <span></span>
                        <p>We Will Help You To Learn</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
                        <a href="#" className="mu-read-more-btn">Read More</a>
                    </div>
                    </div>
                    <div className="mu-slider-single">
                    <div className="mu-slider-img">
                        <figure>
                        <img src="/assets/img/slider/2.jpg" alt="img"/>
                        </figure>
                    </div>
                    <div className="mu-slider-content" color = "white">
                        <p style={titleImageSliderStyle}>Chào mừng bạn tới Trường Khoa học tự nhiên</p>
                        <span></span>
                        <p>We Will Help You To Learn</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
                        <a href="#" className="mu-read-more-btn">Read More</a>
                    </div>
                    </div>
                    <div className="mu-slider-single">
                    <div className="mu-slider-img">
                        <figure>
                        <img src="/assets/img/slider/3.jpg" alt="img"/>
                        </figure>
                    </div>
                    <div className="mu-slider-content" color = "white">
                        <p style={titleImageSliderStyle}>Chào mừng bạn tới Trường Khoa học tự nhiên</p>
                        <span></span>
                        <p>We Will Help You To Learn</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet error eius reiciendis eum sint unde eveniet deserunt est debitis corporis temporibus recusandae accusamus.</p>
                        <a href="#" className="mu-read-more-btn">Read More</a>
                    </div>
                    </div>
                </section>          
                <section id="mu-latest-courses">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-12 col-md-12">
                        <div class="mu-latest-courses-area">
                            <div class="mu-title">
                            <Divider><h2><b>Tin hoạt động</b></h2></Divider>
                            </div>
                            <div id="mu-latest-course-slide" class="mu-latest-courses-content">
                                
                                {news.map(each => { 
                                    return (
                                        <div class="col-lg-4 col-md-4 col-xs-12 animated fadeIn">
                                            <div class="mu-latest-course-single">
                                                <figure class="mu-latest-course-img">
                                                    <a onClick = {() => this.handleViewNews(each)}><img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img"/></a>
                                                </figure>
                                                <div class="mu-latest-course-single-content">
                                                    <Icon type="clock-circle" /> {moment(parseInt(each.create_time)).format("DD/MM/YYYY HH:MM")}
                                                    <h4><a onClick = {() => this.handleViewNews(each)}>
                                                    <p  style = {{ display: "-webkit-box",WebkitLineClamp:4, WebkitBoxOrient:'vertical',overflow: "hidden"}}>{each.title}</p>
                                                    </a></h4>
                                                    <div class="mu-latest-course-single-contbottom">
                                                    <a class="mu-course-details" onClick = {() => this.handleViewNews(each)}>Xem chi tiết</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })} 
                                
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                            
               <Divider><h2>Sơ lược về trường</h2></Divider>
                <div >
                    <section id="mu-about-us">
                        <div className="container">
                            <div className=" row">
                            <div className="col-md-12">
                            <div className="mu-about-us-area">           
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <Collapse accordion defaultActiveKey={['1']}>
                                    <Panel header={<div style={{fontSize:"20px", fontFamily: "sans-serif"}}>Giới thiệu</div>} key="1">
                                            <p style ={{fontSize:"18px"}}>
                                                Năm 1996, Trường Đại học Khoa học Tự nhiên được chính thức thành lập theo quyết định 1236/GDĐT của Bộ GD&ĐT ngày 30/3/1996 trên cơ sở tách ra từ Trường Đại học Tổng hợp TP. HCM để tham gia vào Đại học Quốc gia TP.HCM.
                                                Kế hoạch chiến lược giai đoạn 2106 -2020 <a href = "https://www.hcmus.edu.vn/attachments/article/123/quyet%20dinh%20phe%20duyet%20KHCL%2016-20.pdf" target="_blank" rel="noopener noreferrer">tại đây  </a>
                                            </p>
                                        </Panel>
                                        <Panel header={<div style={{fontSize:"20px", fontFamily: "sans-serif"}}>Sứ mạng</div>} key="2">
                                            <p style ={{fontSize:"18px"}}>
                                            Trường ĐH KHTN là trung tâm đào tạo đại học, sau đại học, cung cấp nguồn nhân lực, đội ngũ chuyên gia trình độ cao trong các lĩnh vực khoa học cơ bản, khoa học liên ngành, khoa học công nghệ mũi nhọn, có năng lực sáng tạo, làm việc trong môi trường cạnh tranh quốc tế; là nơi thực hiện những nghiên cứu khoa học đỉnh cao tạo ra các sản phẩm tinh hoa đáp ứng nhu cầu phát triển KHCN và yêu cầu phát triển kinh tế - xã hội ngày càng cao của đất nước, phù hợp với xu thế phát triển thế giới.
                                            </p>
                                        </Panel>
                                        <Panel header={<div style={{fontSize:"20px", fontFamily: "sans-serif"}}>Mục tiêu giáo dục</div>} key="3">
                                            <p style ={{fontSize:"18px"}}>
                                            Trường ĐH KHTN góp phần đào tạo nguồn nhân lực ở trình độ đại học, đội ngũ chuyên gia ở các trình độ thạc sĩ, tiến sĩ trong các lĩnh vực khoa học cơ bản, khoa học liên ngành, khoa học công nghệ mũi nhọn; thông qua đào tạo, thực hiện những nghiên cứu khoa học đỉnh cao trong các lĩnh vực liên quan để tạo ra tri thức, sản phẩm mới đáp ứng nhu cầu phát triển khoa học công nghệ và yêu cầu phát triển kinh tế - xã hội ngày càng cao của đất nước, phù hợp với xu thế phát triển thế giới; đào tạo người học có phẩm chất chính trị, đạo đức; có kiến thức, kỹ năng thực hành, năng lực nghiên cứu và phát triển ứng dụng khoa học và công nghệ tương xứng với trình độ đào tạo; có sức khỏe; có khả năng sáng tạo và trách nhiệm nghề nghiệp, thích nghi với môi trường làm việc; có ý thức phục vụ cộng đồng
                                            </p>
                                        </Panel>
                                    </Collapse>,
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="mu-about-us-right">                            
                                    <a id="mu-abtus-video" href="https://www.youtube.com/embed/9Z49DscgnJY" target="mutube-video">
                                    <img src="https://edu2review.com/upload/article-images/2018/07/7933/1920x1080_dai-hoc-khoa-hoc-tu-nhien.jpg" alt="img"/>
                                    </a>                
                                    </div>
                                    <div style = {{marginTop:"20px", fontSize:"18px"}}>
                                        <b>
                                        <center>
                                            Trường đại học Khoa học Tự nhiên 
                                        <center>
                                        </center>
                                            Đại học quốc gia thành phố Hồ Chí Minh
                                        </center>
                                        </b>
                                        
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>

                <section id="mu-abtus-counter">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                        <div className="mu-abtus-counter-area">
                            <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="mu-abtus-counter-single">
                                <span className="fa fa-book"></span>
                                <h4 className="counter">568</h4>
                                <p>Subjects</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="mu-abtus-counter-single">
                                <span className="fa fa-users"></span>
                                <h4 className="counter">3500</h4>
                                <p>Students</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="mu-abtus-counter-single">
                                <span className="fa fa-flask"></span>
                                <h4 className="counter">65</h4>
                                <p>Modern Lab</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="mu-abtus-counter-single no-border">
                                <span className="fa fa-user-secret"></span>
                                <h4 className="counter">250</h4>
                                <p>Teachers</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            
                <div className = "container">
                    <section id="mu-features">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="mu-features-area">
                                        <div className="mu-title">
                                        <h2>Our Features</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!</p>
                                        </div>
                                        <div className="mu-features-content">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4  col-sm-6">
                                                <div className="mu-single-feature">
                                                    <span className="fa fa-book"></span>
                                                    <h4>Professional Courses</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                                                    <a href="#">Read More</a>
                                                </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="mu-single-feature">
                                                    <span className="fa fa-users"></span>
                                                    <h4>Expert Teachers</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                                                    <a href="#">Read More</a>
                                                </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="mu-single-feature">
                                                    <span className="fa fa-laptop"></span>
                                                    <h4>Online Learning</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                                                    <a href="#">Read More</a>
                                                </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="mu-single-feature">
                                                    <span className="fa fa-microphone"></span>
                                                    <h4>Audio Lessons</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                                                    <a href="#">Read More</a>
                                                </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="mu-single-feature">
                                                    <span className="fa fa-film"></span>
                                                    <h4>Video Lessons</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                                                    <a href="#">Read More</a>
                                                </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-6">
                                            <div className="mu-single-feature">
                                                <span className="fa fa-certificate"></span>
                                                <h4>Professional Certificate</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum.</p>
                                                <a href="#">Read More</a>
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
                
                <section id="mu-testimonial">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="mu-testimonial-area">
                            <div id="mu-testimonial-slide" className="mu-testimonial-content">
                            <div className="mu-testimonial-item">
                                <div className="mu-testimonial-quote">
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.</p>
                                </blockquote>
                                </div>
                                <div className="mu-testimonial-img">
                                <img src="assets/img/member/duy.jpg" alt="img"/>
                                </div>
                                <div className="mu-testimonial-info">
                                <h4>Duy Trương</h4>
                                <span>Kỹ thuật phần mềm</span>
                                </div>
                            </div>
                            <div className="mu-testimonial-item">
                                <div className="mu-testimonial-quote">
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum soluta aperiam blanditiis obcaecati eveniet aliquam consequatur nobis eaque id.</p>
                                </blockquote>
                                </div>
                                <div className="mu-testimonial-img">
                                <img src="assets/img/member/binh.jpg" alt="img"/>
                                </div>
                                <div className="mu-testimonial-info">
                                <h4>Bình Lê</h4>
                                <span>Khoa học máy tính</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            
                <Modal
                width = "90%"
                title={selectedNews.title}
                visible={visibleModal}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer = {[
                    <Button key="back" onClick={() => this.handleCancel()}>Đóng</Button>
                ]}
                >
                <b>Số lượt xem: {selectedNews.hits}</b> - <Icon type="clock-circle" /> { moment(parseInt(selectedNews.create_time)).format("DD/MM/YYYY HH:MM")}
                <Divider></Divider>
                    <div dangerouslySetInnerHTML={{__html: selectedNews.content}} ></div>
                </Modal>
            </div>
        );
    }
}

export default index;   