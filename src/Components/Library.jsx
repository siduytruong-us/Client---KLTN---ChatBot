import React, { Component } from 'react';
import { Row, Col,  Anchor } from 'antd';
import AOS from "aos"
const { Link } = Anchor;

class Library extends Component {

    constructor(props) {
        super(props);
        AOS.init({
            once:true
        })
    }
    
    // componentDidMount(){
    //     AOS.init()
    // }

    componentWillMount () { 
        console.log("will mount");
        window.scrollTo(0,0)
        AOS.refresh()
    }

    componentWillReceiveProps() { 
        AOS.refresh()
    }

    render() {
        return (
            <div>
            <section id="mu-page-breadcrumb">
                <div class="container">
                    <div class="row">
                    <div class="col-md-12">
                        <div class="mu-page-breadcrumb-area">
                        <h2>Các phòng chức năng</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section id="mu-course-content">
                
                <div className ="container">
                    <center>
                        <h4>Trường có 8 phòng chức năng và 1 trạm y tế, bao gồm: P.Đào tạo, P.Công tác sinh viên, P.Khảo thí và đảm bảo chất lượng, P.Thanh tra pháp chế và Sở hữu trí tuệ, P.Khoa học công nghệ, P.Thông tin truyền thông, P.Quan hệ quốc tế và Quản lí dự án, P. Kế hoạch - Tài chính, Trạm Y Tế
                        </h4>
                    </center>
                    <br/>
                </div>
                
                <Row>
                    
                    <Col span={3} style ={{ zIndex:0, position:"relative"}}  > 
                        <Anchor style = {{paddingLeft:"10px", }} offsetTop = {100}>
                            <div style = {{ width :"100%", overflowX:"hidden",} } >
                                <Link href="#the-thu-vien" title="Thẻ thư viện" />
                                <Link href="#lien-lac" title="Thông tin liên lạc" />
                               
                            </div>
                        </Anchor>
                    </Col>


                    <Col span={21}>
                        {/* The thu vien */}
                        <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "the-thu-vien">
                            
                            <blockquote >
                                <b>
                                Thẻ thư viện
                                </b>

                                <br/>
                                <br/>
                                
                                <b>- Học viên Sau đại học và sinh viên của
                                Trường ĐH KHTN:</b>
                                <br/>
                                + Đăng ký tham dự lớp “Hướng dẫn sử dụng
                                thư viện” tại Phòng Tham khảo (lẩu 10, tòa
                                nhà I );
                                <br/>
                                + Làm thẻ đối với hệ Sau đại học; thẻ có giá trị
                                sử dụng trong suốt khóa học;
                                <br/>
                                + Mọi trường hợp thẻ bị mất, hư hỏng đều
                                phải làm đơn xin cấp lại.
                                <br/>
                                + Đối với trường hợp bạn đọc sử dụng Thẻ
                                sinh viên hoặc Thẻ ATM làm Thẻ thư viện, bạn
                                đọc vẫn phải đăng ký tham dự lớp “Hướng dẫn
                                sử dụng thư viện” mới đủ điều kiện để sử dụng
                                Thư viện.
                                <br/>
                                <b>- Học viên Sau đại học và sinh viên thuộc các
                                trường thành viên của ĐHQG-HCM</b> đã có Thẻ
                                thư viện tại bất cứ thư viện nào trong Hệ thống
                                Thư viện ĐHG-HCM đều được sử dụng Thư
                                viện với điều kiện phải học qua lớp “Hướng
                                dẫn sử dụng thư viện".
                                <br/>
                                <b>- Các đối tượng khác </b> nếu có nhu cầu sử dụng
                                thư viện phải qua bộ phận dịch vụ tham khảo
                                (Phòng Tham khảo, tầng 10, tòa nhà I ).
                                    
                            </blockquote>
                            </div>
                            </Col>
                            <Col span={12}>
                                <center >
                                    <img src = "https://png2.kisspng.com/sh/4d1aac5bd8e8727e7a254118ca05fb58/L0KzQYm3V8E1N6ZBkpH0aYP2gLBuTfxqaqNmius2Y3H1dH7qjB1xfaVqip9yY3Bxg37pjB9sNaFuedD4LXXnhbTolPlwdl5oeeRtLUXlRIqCWMJmO2RqTdQBLkC4SIWAUcgxOWY4Sac9OUe3QoO4UsYveJ9s/kisspng-library-card-computer-icons-book-piano-education-card-5b49982e33e5b6.0584718015315497422126.png" alt = "" style = {{width:"50%"}}/>
                                </center>
                            </Col>
                            </div>
                        </Row>
                        <br/> 

                        {/* The thu vien */}
                        <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "lien-lac">
                            
                            <blockquote >
                                <b> Thông tin liên lạc</b>
                                <br/>
                                <b>Cơ sở 1:</b>227 Nguyễn Văn Cừ, Quận 5, TP. HCM
                                <br/>
                                <b>Điện thoại</b>: (028) 6288 4499 Ext. 3200
                                <br/>
                                <b>Fax</b>: (028) 3835 0096
                                <br/>
                                <br/>
                                <b>Cơ sở 2:</b>Linh Trung, Quận Thủ Đức, TP.HCM
                                <br/>
                                <b>Điện thoại</b>: (028) 3896 2822
                                <br/>
                                <b>Email</b>: <a href = "mailto: thuvien@hcmus.edu.vn" >thuvien@hcmus.edu.vn</a>
                                <br/>
                                <b>Website</b>: <a href = "https://www.glib.hcrnus.edu.vn" target="_blank" rel="noopener noreferrer">www.glib.hcrnus.edu.vn</a>
                                <br/>
                                <b>Facebook</b>: <a href = "https://www.facebook.com/lib.hcmus" target="_blank" rel="noopener noreferrer">www.facebook.com/lib.hcmus/</a>
                          
                                    
                            </blockquote>
                            </div>
                            </Col>
                            <Col span={12}>
                                <center >
                                    <img src = "https://png.pngtree.com/element_origin_min_pic/16/11/24/2e5aed05c7dda93e07c067b37f9ea9b2.jpg" alt = "" style = {{width:"50%"}}/>
                                </center>
                            </Col>
                            </div>
                        </Row>
                        <br/> 


                       
  
                    </Col>
                </Row>
                
            </section>
        </div>

        );
    }
}

export default Library;