import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
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
            var data = res.data.data
            
            data.sort(function(a, b) {
                return b.create_time - a.create_time;
            });
            data.length = 3
            this.setState({news:data})
            
        })
        .catch( err => {
            console.log(err);
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
                        <p style={titleImageSliderStyle}>CHÀO MỪNG BẠN TỚI SỔ TAY SINH VIÊN ONLINE</p>
                        <span></span>
                        <p>Website được xây dựng dựa trên Sổ Tay Sinh Viên của đại học Khoa học Tự nhiên năm 2018</p>
                        <p>Cung cấp cho bạn những thông tin cần thiết về qui chế tín chỉ, quy định nhà trường, học bổng - học phí, v.v...</p>
                    </div>
                    </div>
                    <div className="mu-slider-single">
                    <div className="mu-slider-img">
                        <figure>
                        <img src="/assets/img/slider/chatbot.png" alt="img"/>
                        </figure>
                    </div>
                    <div className="mu-slider-content" color = "white">
                        <p style={titleImageSliderStyle}>HỆ THỐNG CHATBOT HỖ TRỢ SINH VIÊN</p>
                        <span></span>
                        <p>Website được trang bị hệ thống chatbot với tên là CHRIS, sẽ hỗ trợ bạn 24/7</p>
                        <p>Nhiệm vụ của Chris là luôn sẵn sàng giải đáp các câu hỏi, thắc mắc của các bạn sinh viên hoặc chuẩn bị là sinh viên của trường. </p>
                        <p>Để đặt câu hỏi cho Chris, bạn chỉ cần nhấn vào bong bóng hội thoại gốc dưới màn hình.</p>
                    </div>
                    </div>
                    
                    
                    {/* <div className="mu-slider-single">
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
                 */}
                </section>          
              
                <section id="mu-latest-courses">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="mu-latest-courses-area">
                                    <div className="mu-title">
                                    <Divider><h3><b>Tin hoạt động</b></h3></Divider>
                                    </div>
                                    <div id="mu-latest-course-slide" className="mu-latest-courses-content">
                                        
                                        {news.map((each, index) => { 
                                            console.log(each.create_time);
                                            
                                            
                                            return (
                                                <div className="col-lg-4 col-md-4 col-xs-12 "  key = {index}>
                                                    <div className="mu-latest-course-single">
                                                        <figure className="mu-latest-course-img">
                                                            <a onClick = {() => this.handleViewNews(each)}><img src="http://sis.vnu.edu.vn/wp-content/uploads/2018/07/Th%C3%B4ng-b%C3%A1o-624x330-1.png" alt="img"/></a>
                                                        </figure>
                                                        <div className="mu-latest-course-single-content">
                                                            <Icon type="clock-circle" /> {moment(parseInt(each.create_time)).format("DD/MM/YYYY ")}
                                                            <h4><a onClick = {() => this.handleViewNews(each)}>
                                                            <p  style = {{ display: "-webkit-box",WebkitLineClamp:4, WebkitBoxOrient:'vertical',overflow: "hidden"}}>{each.title}</p>
                                                            </a></h4>
                                                            <div className="mu-latest-course-single-contbottom">
                                                            <a className="mu-course-details" onClick = {() => this.handleViewNews(each)}>Xem chi tiết</a>
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
                        {news.length>0?
                        <NavLink to = "tin-tuc" style = {{float:"left", paddingTop:"20px", paddingLeft:"15px"}}>Xem thêm tin hoạt động</NavLink>:null}
                    </div>
                    
                </section>
                            
               <Divider><h3>Sơ lược về trường</h3></Divider>
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
                                    <img src="/assets/img/video.jpg" alt="img"/>
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
                                <h4 className="counter">580</h4>
                                <p>Thạc sĩ, Tiến Sĩ</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="mu-abtus-counter-single">
                                <h4 className="counter">30</h4>
                                <p>Ngành đạo tạo tiến sĩ</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="mu-abtus-counter-single">
                                <h4 className="counter">33</h4>
                                <p>Ngành đào tạo thạc sĩ</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3">
                                <div className="mu-abtus-counter-single no-border">
                                <h4 className="counter">18</h4>
                                <p>Ngành đào tạo cử nhân</p>
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
                                    <p>Làm việc gì cũng làm đến cùn g. Không làm dang dở, luôn làm hết mình.</p>
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
                width = "80%"
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