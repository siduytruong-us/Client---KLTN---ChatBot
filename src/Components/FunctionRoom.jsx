import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import { Row, Col, Divider, Anchor } from 'antd';
import AOS from "aos"
import 'aos/dist/aos.css'

const { Link } = Anchor;

class FunctionRoom extends Component {
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
        AOS.refresh()
    }

    componentWillReceiveProps() { 
        console.log("will mount");
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
                    
                    <Col span={4}  >
                        <Anchor style = {{marginLeft:"10px",zIndex:0.1}} offsetTop = {100} offsetBottom= {20} >
                            <Link href="#cong-tac-sinh-vien" title="Phòng công tác sinh viên" />
                            <Link href="#dao-tao" title="Phòng đào tạo" />
                        </Anchor>
                    </Col>
                    <Col span={20}>

                        <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "cong-tac-sinh-vien">
                            
                            <blockquote >
                                <p> 
                                - Đầu mối phối hợp và tổ chức tiếp nhận sinh viên
                                trúng tuyển; thông tin, phổ biến quy chế, quy định
                                của Nhà trường đến sinh viên. Tiếp nhận và quản
                                lý hồ sơ sinh viên nước ngoài đến học tập tại
                                TM trường. Hỗ trợ về quyết định cử sinh viên đi nước
                                ngoài theo các chương trao đổi văn hóa, trao đổi
                                sinh viên.
                                </p>
                                <p>
                                - Tổ chức “Tuần sinh hoạt công dân sinh viên”
                                đầu khóa, đầu năm học, cuối khóa.
                                - Xác nhận, chứng thực các loại giấy tờ liên quan
                                đến sinh viên (trừ kết quả học tập), bao gồm cấp
                                giấy giới thiệu thực tập, thực hiện đề tài tốt
                                nghiệp. Hỗ trợ thủ tục cho sinh viên vay vốn ngân
                                hàng. Làm đầu mối phối hợp với các đơn vị có
                                liên quan thực hiện công tác đánh giá kết quả rèn
                                luyện của sinh viên.
                                </p>
                                
                                <p>
                                - Quản lý hỗ sơ của sinh viên: cập nhật và quản lý
                                dữ liệu hồ sơ, các quyết định (khen thưởng, kỷ
                                luật, xử lý học tập) liên quan đến sinh viên, lý lịch
                                sinh viên, nhằm đáp ứng yêu cầu tra cứu, xác
                                minh của các đơn vị chức năng. Đề xuất khen
                                thưởng hoặc kỷ luật đối với các tập thể, cá nhân
                                sinh viên. Cấp và quản lý hệ thống Email của sinh
                                viên. Đầu mối cấp Thẻ Sinh viên. Tiếp nhận, giải
                                quyết hoặc kiến nghị với Nhà trường và các đơn vị
                                những thắc mắc, khiếu nại về kết quả rèn luyện,
                                chế độ chính sách và các hoạt động trong Nhà
                                trường của sinh viên. Thực hiện công tác bảo
                                hiểm cho sinh viên.
                                </p>

                                <p>
                                ~ Tiếp nhận, khai thác và phân phối học bổng tài
                                trợ cho sinh viên từ các tổ chức, doanh nghiệp
                                trong và ngoài nước. Phối hợp thực hiện việc xét
                                cấp học bổng khuyến khích cho sinh viên.

                                - Tiếp nhận đơn đăng ký nội trú để xem xét và bố
                                trí chỗ ở cho sinh viên trong KTX của Trường.
                                Quản lý thông tin ngoại trú của sinh viên. Kết hợp
                                tố chức quân lý tạm trú, tạm vắng cho sinh viên
                                theo đúng quy định của chính quyên địa phương.
                                </p>
                            </blockquote>
                            </div>
                            </Col>
                            <Col span={12}>
                                <center style = {{paddingTop:"150px"}}>
                                    <img src = "/assets/img/function-room/phong-cong-tac-sinh-vien.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            </div>
                        </Row>
                    
                        <Row >
                            <div data-aos="fade-right">
                            
                            <Col span={12}>
                                <center style = {{paddingTop:"150px"}}>
                                    <img src = "/assets/img/function-room/phong-dao-tao.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "dao-tao">
                            
                            <blockquote >
                                <p>
                            - Giải đáp các thông tin liên quan đến đào tạo bậc
                                Đại học và Cao đẳng.
                                </p>

                                <p>
                                -Xây dựng kế hoạch đạo tạo the học kỳ, năm 
                                học; phối hợp với Khoa lập thời khóa biểu và tổ
                                chức đăng ký học phần cho sinh viên.
                                </p>

                                <p>
                                - Tổ chức tuyển sinh/xét tuyến Đại học, Cao đẳng
                                cho các loại hình đào tạo.
                                </p>

                                <p>
                                - Xây dựng và cập nhật các chương trình đào tạo,
                                phát triển các chương trình đào tạo mới.
                                </p>

                                <p>
                                - Quản lý và xác nhận các dữ liệu về kết quả học
                                tập, văn bằng chứng chỉ tốt nghiệp của sinh viên.
                                </p>

                                <p>
                                - Xử lý sinh viên về học vụ: thôi học, bảo lưu, tiếp
                                tục học...
                                </p>

                                <p>
                                - Thực hiện xét tốt nghiệp; quản lý, cấp phát văn
                                bằng Đại học, Cao đẳng theo quy định.
                                </p>

                                <p>
                                - Thiết kế chương trình đào tạo và quản lý học vụ
                                cho sinh viên nước ngoài.
                                </p>

                                <p>
                                - Quản lý các nội dung thông tin đào tạo Đại học,
                                Cao đẳng trên website của Trường.
                                </p>

                                
                            </blockquote>
                            </div>
                            </Col>
                            
                            </div>
                        </Row>

                        <Row >
                            <div data-aos="fade-left">
                            
                            <Col span={12}>
                                <center style = {{paddingTop:"150px"}}>
                                    <img src = "/assets/img/function-room/phong-dao-tao.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "dao-tao">
                            
                            <blockquote >
                                <p>
                            - Giải đáp các thông tin liên quan đến đào tạo bậc
                                Đại học và Cao đẳng.
                                </p>

                                <p>
                                -Xây dựng kế hoạch đạo tạo the học kỳ, năm 
                                học; phối hợp với Khoa lập thời khóa biểu và tổ
                                chức đăng ký học phần cho sinh viên.
                                </p>

                                <p>
                                - Tổ chức tuyển sinh/xét tuyến Đại học, Cao đẳng
                                cho các loại hình đào tạo.
                                </p>

                                <p>
                                - Xây dựng và cập nhật các chương trình đào tạo,
                                phát triển các chương trình đào tạo mới.
                                </p>

                                <p>
                                - Quản lý và xác nhận các dữ liệu về kết quả học
                                tập, văn bằng chứng chỉ tốt nghiệp của sinh viên.
                                </p>

                                <p>
                                - Xử lý sinh viên về học vụ: thôi học, bảo lưu, tiếp
                                tục học...
                                </p>

                                <p>
                                - Thực hiện xét tốt nghiệp; quản lý, cấp phát văn
                                bằng Đại học, Cao đẳng theo quy định.
                                </p>

                                <p>
                                - Thiết kế chương trình đào tạo và quản lý học vụ
                                cho sinh viên nước ngoài.
                                </p>

                                <p>
                                - Quản lý các nội dung thông tin đào tạo Đại học,
                                Cao đẳng trên website của Trường.
                                </p>

                                
                            </blockquote>
                            </div>
                            </Col>
                            
                            </div>
                        </Row>

                        <Row >
                            <div data-aos="fade-right">
                            
                            <Col span={12}>
                                <center style = {{paddingTop:"150px"}}>
                                    <img src = "/assets/img/function-room/phong-dao-tao.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "dao-tao">
                            
                            <blockquote >
                                <p>
                            - Giải đáp các thông tin liên quan đến đào tạo bậc
                                Đại học và Cao đẳng.
                                </p>

                                <p>
                                -Xây dựng kế hoạch đạo tạo the học kỳ, năm 
                                học; phối hợp với Khoa lập thời khóa biểu và tổ
                                chức đăng ký học phần cho sinh viên.
                                </p>

                                <p>
                                - Tổ chức tuyển sinh/xét tuyến Đại học, Cao đẳng
                                cho các loại hình đào tạo.
                                </p>

                                <p>
                                - Xây dựng và cập nhật các chương trình đào tạo,
                                phát triển các chương trình đào tạo mới.
                                </p>

                                <p>
                                - Quản lý và xác nhận các dữ liệu về kết quả học
                                tập, văn bằng chứng chỉ tốt nghiệp của sinh viên.
                                </p>

                                <p>
                                - Xử lý sinh viên về học vụ: thôi học, bảo lưu, tiếp
                                tục học...
                                </p>

                                <p>
                                - Thực hiện xét tốt nghiệp; quản lý, cấp phát văn
                                bằng Đại học, Cao đẳng theo quy định.
                                </p>

                                <p>
                                - Thiết kế chương trình đào tạo và quản lý học vụ
                                cho sinh viên nước ngoài.
                                </p>

                                <p>
                                - Quản lý các nội dung thông tin đào tạo Đại học,
                                Cao đẳng trên website của Trường.
                                </p>

                                
                            </blockquote>
                            </div>
                            </Col>
                            
                            </div>
                        </Row>

                        <Row >
                            <div data-aos="fade-left">
                            
                            <Col span={12}>
                                <center style = {{paddingTop:"150px"}}>
                                    <img src = "/assets/img/function-room/phong-dao-tao.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "dao-tao">
                            
                            <blockquote >
                                <p>
                            - Giải đáp các thông tin liên quan đến đào tạo bậc
                                Đại học và Cao đẳng.
                                </p>

                                <p>
                                -Xây dựng kế hoạch đạo tạo the học kỳ, năm 
                                học; phối hợp với Khoa lập thời khóa biểu và tổ
                                chức đăng ký học phần cho sinh viên.
                                </p>

                                <p>
                                - Tổ chức tuyển sinh/xét tuyến Đại học, Cao đẳng
                                cho các loại hình đào tạo.
                                </p>

                                <p>
                                - Xây dựng và cập nhật các chương trình đào tạo,
                                phát triển các chương trình đào tạo mới.
                                </p>

                                <p>
                                - Quản lý và xác nhận các dữ liệu về kết quả học
                                tập, văn bằng chứng chỉ tốt nghiệp của sinh viên.
                                </p>

                                <p>
                                - Xử lý sinh viên về học vụ: thôi học, bảo lưu, tiếp
                                tục học...
                                </p>

                                <p>
                                - Thực hiện xét tốt nghiệp; quản lý, cấp phát văn
                                bằng Đại học, Cao đẳng theo quy định.
                                </p>

                                <p>
                                - Thiết kế chương trình đào tạo và quản lý học vụ
                                cho sinh viên nước ngoài.
                                </p>

                                <p>
                                - Quản lý các nội dung thông tin đào tạo Đại học,
                                Cao đẳng trên website của Trường.
                                </p>

                                
                            </blockquote>
                            </div>
                            </Col>
                            
                            </div>
                        </Row>

                        <Row >
                            <div data-aos="fade-right">
                            
                            <Col span={12}>
                                <center style = {{paddingTop:"150px"}}>
                                    <img src = "/assets/img/function-room/phong-dao-tao.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "dao-tao">
                            
                            <blockquote >
                                <p>
                            - Giải đáp các thông tin liên quan đến đào tạo bậc
                                Đại học và Cao đẳng.
                                </p>

                                <p>
                                -Xây dựng kế hoạch đạo tạo the học kỳ, năm 
                                học; phối hợp với Khoa lập thời khóa biểu và tổ
                                chức đăng ký học phần cho sinh viên.
                                </p>

                                <p>
                                - Tổ chức tuyển sinh/xét tuyến Đại học, Cao đẳng
                                cho các loại hình đào tạo.
                                </p>

                                <p>
                                - Xây dựng và cập nhật các chương trình đào tạo,
                                phát triển các chương trình đào tạo mới.
                                </p>

                                <p>
                                - Quản lý và xác nhận các dữ liệu về kết quả học
                                tập, văn bằng chứng chỉ tốt nghiệp của sinh viên.
                                </p>

                                <p>
                                - Xử lý sinh viên về học vụ: thôi học, bảo lưu, tiếp
                                tục học...
                                </p>

                                <p>
                                - Thực hiện xét tốt nghiệp; quản lý, cấp phát văn
                                bằng Đại học, Cao đẳng theo quy định.
                                </p>

                                <p>
                                - Thiết kế chương trình đào tạo và quản lý học vụ
                                cho sinh viên nước ngoài.
                                </p>

                                <p>
                                - Quản lý các nội dung thông tin đào tạo Đại học,
                                Cao đẳng trên website của Trường.
                                </p>

                                
                            </blockquote>
                            </div>
                            </Col>
                            
                            </div>
                        </Row>
                    
                    
                    </Col>
                </Row>
                
            </section>
        </div>
        );
    }
}

export default FunctionRoom;