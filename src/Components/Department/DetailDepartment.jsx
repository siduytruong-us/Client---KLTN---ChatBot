import React, { Component, useRef } from 'react';
import {NavLink} from "react-router-dom"
import {department} from "../../Global/GlobalVariable/departments"
import { Anchor, message, Button } from 'antd';
import AOS from "aos"
import Gallery from "react-grid-gallery"
const { Link } = Anchor;

class DetailDepartment extends Component {
    constructor(props) {
        super(props);
        AOS.init({
            once:true
        })
        this.state = { 
            department: {
                name:"",
                alias:"",
            },
            images:[
                {
                    src: "/assets/img/template-cntt/computer-science.png",
                    thumbnail: "/assets/img/template-cntt/computer-science.png",
                    thumbnailWidth: 550,
                    thumbnailHeight: 413,
                },
                {
                    src: "/assets/img/template-cntt/software.jpg",
                    thumbnail: "/assets/img/template-cntt/software.jpg",
                    thumbnailWidth: 400,
                    thumbnailHeight: 224,
                },
                {
                    src: "/assets/img/template-cntt/network.jpg",
                    thumbnail: "/assets/img/template-cntt/network.jpg",
                    thumbnailWidth: 1000,
                    thumbnailHeight: 625,
                },
                {
                    src: "/assets/img/template-cntt/system.png",
                    thumbnail: "/assets/img/template-cntt/system.png",
                    thumbnailWidth: 240,
                    thumbnailHeight: 240,
                },
            ],
        }

        this.myDivToFocus = React.createRef()
    }
    
    componentWillMount(){
        const alias = this.props.match.params.alias
        const temp = department.find(each => each.alias === alias)
        this.setState({ department: temp})
        window.scrollTo(0,0)
        AOS.refresh()
    }
    componentWillReceiveProps() { 
        AOS.refresh()
    }

    componentDidMount() {
        window.scrollTo(0,0)
        document.getElementById('myVideo').addEventListener('loadedmetadata', function() {
            this.currentTime = 7.4;
          }, false);
    }

    scrollToContent() {
        const contentDiv = document.getElementById('videoContainer');

        window.scrollTo({
            top: contentDiv.offsetTop +30,
            behavior: 'smooth'
        });
    }
    render() {  
        var {name} = this.state.department
        return (
            <div >
                <div >
                    <div className="so2" ref={this.myDivToFocus}>
                        <div className="ndso2">
                            <div className="chunho">
                            </div>
                            <div className="chuto">
                            </div>
                            {/* <div ><Button class="shop" style = {{marginTop:"37vh"}} onClick = {this.scrollToContent.bind(this)} >Xem chi tiết</Button></div> */}
                            <a style = {{marginTop:"62vh"}} onClick = {this.scrollToContent.bind(this)} className="shop">Tuyển Sinh Đại Học</a>
                        </div>
                    </div>
                </div>
                
                <section id="mu-course-content" style = {{padding:"0px"}}   >
                    <section id="mu-page-breadcrumb">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mu-page-breadcrumb-area" >
                                    <h2>{name}</h2>
                                    <ol className="breadcrumb">
                                        <li><NavLink to="/khoa-nganh" ><a href = "44#">Các khoa</a></NavLink></li>            
                                        <li className="active" >{name}</li>
                                    </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                 
               
                    
                </section>

                <div id = "videoContainer" >
                    <video className="video-container video-container-overlay" id = "myVideo" autoPlay={true} loop={true} muted={true} data-reactid=".0.1.0.0" controls>
                        <source type="video/mp4" data-reactid=".0.1.0.0.0" src="https://firebasestorage.googleapis.com/v0/b/collegehandbook074.appspot.com/o/TH%C3%94NG%20TIN%20TUY%E1%BB%82N%20SINH%20FIT-HCMUS%20%20N%C4%82M%202019.mp4?alt=media&token=4c4d8134-46b4-4a39-929c-adce79da8fac"/>
                        <object width="461" height="270" type="application/x-shockwave-flash" data="http://rank1stseo.co.nz/wp-content/plugins/media-element-html5-video-and-audio-player/mediaelement/flashmediaelement.swf">
                            <param name="movie" value="http://rank1stseo.co.nz/wp-content/plugins/media-element-html5-video-and-audio-player/mediaelement/flashmediaelement.swf"/>
                            <param name="flashvars" value="controls=true&amp;file=http://rank1stseo.co.nz/wp-content/uploads/My-Movie.mp4"/>
                        </object>                    
                    </video>
                    {/* <div id="videoText">
                        <p>Northern Lights</p>
                    </div> */}
                </div>
               
                
                <section id="main2" className = " boxShadow" style = {{minHeight:"200px"}}>
                <center><img  src="/assets/img/template-cntt/main-image.png" style = {{width:"75%"}} alt = "main image" /></center>
                </section>

                <section id="main2" style = {{paddingTop:"0px"}} >
                  <div class="container" style = {{marginTop:"30px"}}>
                    <div class="row">

                      <div class="col-sm-6 margin-30" >
                        <div data-aos="fade-right"  data-aos-duration="1000">
                            <h2>Ngành đào tạo</h2><br />
                            <p><b>Trường khoa học tự nhiên 4 ngành đào tạo chính, trong mỗi ngành đào tạo có nhiều chuyên ngành khác nhau</b>.</p>
                            <blockquote><b>Kỹ thuật phần mềm:</b></blockquote>
                            <blockquote><b>Khoa học máy tính:</b></blockquote>
                            <blockquote><b>Mạng máy tính và viễn thông:</b></blockquote>
                            <blockquote><b>Hệ thống thông tin:</b></blockquote>
                            <a href = "https://tuyensinh.hcmus.edu.vn/nh%C3%B3m-ng%C3%A0nh-m%C3%A1y-t%C3%ADnh-v%C3%A0-c%C3%B4ng-ngh%E1%BB%87-th%C3%B4ng-tin">Xem chi tiết</a>
                          <br />
                        </div>
                      </div>

                      <div class="col-sm-6" style = {{marginTop: "0px"}}>
                        <div data-aos="fade-left"  data-aos-duration="1000">
                            <div class="main1-img img-responsive pull-right" >
                                        <Gallery
                                        images={this.state.images}
                                        enableLightbox={false}
                                        enableImageSelection={false}/>
                                        {/* <img src="/assets/img/template-cntt/computer-science.png"  id = "image-department" alt="Main1 Image"/> */}
                        </div>
                            
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="main1">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 ">
                                <div data-aos="fade-up"  data-aos-duration="1000">
                                    <img class="main2-img pull-left boxShadow" src="/assets/img/template-cntt/soft-skill.png"  style = {{marginTop: "0px"}}alt="Main2 Image"/>
                                </div>
                            </div>
                            <div class="col-sm-6" style = {{right:"3%"}}>
                                <div data-aos="fade-left"  data-aos-duration="1000">
                                    <h2>Kỹ năng</h2>
                                        <p><b>Sinh viên được trang bị các kỹ năng mềm trong quá trình học tập:</b> </p>
                                         
                                        <br/>
                                        <blockquote><b>Kỹ năng cá nhân:</b> Độc lập, tự tin, sáng tạo, quản lý tài nguyên cá nhân, khả năng thích nghi vào môi trường mới,...  </blockquote>
                                       
                                        <blockquote><b>Kỹ năng giao tiếp:</b> trình bày, đàm phán, phát triển các mối quan hệ XH... </blockquote>
                                        <blockquote><b>Kỹ năng ngoại ngữ:</b> phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết và khả năng sử dụng tốt các thuật ngữ chuyên ngành </blockquote>
                                        <blockquote><b>Kỹ năng nhóm:</b> làm việc, tổ chức, lãnh đạo... </blockquote>
                                        <blockquote><b>Kỹ năng khởi nghiệp.</b>  </blockquote>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="main2" style = {{paddingTop:"0px"}} >
                  <div class="container" style = {{marginTop:"30px"}}>
                    <div class="row">

                      <div class="col-sm-6 margin-30" >
                        <div data-aos="fade-right"  data-aos-duration="1000">
                            <h2>Kiến thức</h2><br />
                            <p><b>Kiến thức nền tảng về khoa học:</b> Khối kiến thức về Toán, Vật lý, Điện - Điện tử. </p>
                            <p><b>Kiến thức nền tàng, tổng quát và nâng cao về lĩnh vực CNTT:</b> Lập trình; Cấu trúc dữ liệu và giải thuật; Hệ điều hành máy tính; Kiến trúc máy tính; Mạng máy tính; Cơ sở dữ liệu; Các công cụ, phương pháp và công nghệ hỗ trợ trong ngành CNTT. </p>
                          <br />
                        </div>
                      </div>

                      <div class="col-sm-6" style = {{marginTop: "0px"}}>
                        <div data-aos="fade-left"  data-aos-duration="1000">
                            <img class="main1-img img-responsive pull-right" src="/assets/img/template-cntt/knowledge.jpg" alt="Main1 Image"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                
                <div data-aos="zoom-in"  data-aos-duration="1000">
                    <section id="job-opportunity" >
                        
                        <div class="container" id = "co-hoi-nghe-nghiep">
                            <div class="row">
                            <div class="col-sm-12 text-center">
                                <h2>Cơ hội nghề nghiệp</h2>
                            </div>
                            <div class="col-sm-12" style = {{paddingRight:"100px", marginLeft:"50px"}}>
                            <p> - Số tín chỉ của các học phần đã đăng ký học vào đầu mỗi học kỳ (gọi tắt là khối lượng học tập đăng ký). </p>
                            <p> - Điểm trung bình chung học kỳ là điểm trung bình có trọng số của các học phần đã đăng ký học trong học kỳ đó, với trọng số là số tín chỉ tương ứng của từng học phần. </p>
                            <p> - Khối lượng kiến thức tích lũy là khối lượng tính bằng tổng số tín chỉ của những học phần đã được tích lũy tính từ đầu khóa học cho tới thời điểm kết thúc mỗi học kỳ. </p>
                            <p> - Điểm trung bình chung tích lũy là điểm trung bình có trọng số của các học phần đã được tích luỹ tính từ đầu khóa học cho tới thời điểm kết thúc mỗi học kỳ, với trọng số là số tín chỉ tương ứng của từng học phần. </p>
                            <center><img src="/img/gpa-table.png"  style = {{width:"500px"}}alt="Main2 Image"/></center>
                            </div>

                            
                            </div>
                        </div>
                        
                    </section>
                </div>


            </div>
        );
    }
}

export default DetailDepartment;