import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import { Row, Col, Divider, Anchor, Affix } from 'antd';
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
                    
                    <Col span={5}  > 
                        <Anchor style = {{paddingLeft:"10px",}} offsetTop = {100}>
                            <div style = {{ width :"100%", overflowX:"hidden"} } >
                                <Link href="#cong-tac-sinh-vien" title="Phòng công tác sinh viên" />
                                <Link href="#dao-tao" title="Phòng đào tạo" />
                                <Link href="#khao-thi-va-dam-bao-chat-luong" title="Phòng Khảo thí và Đảm bảo chất lượng" />
                                <Link href="#thanh-tra-phap-che" title="Phòng Thanh tra pháp chế và sở hữu trí tuệ" />
                                <Link href="#khoa-hoc-cong-nghe" title="Phòng Khoa học công nghệ" />
                                <Link href="#thong-tin-truyen-thong" title="Phòng Thông tin truyền thông" />
                                <Link href="#quan-he-quoc-te" title="Phòng Quan hệ Quốc tế - Quản lý Dự án" />
                                <Link href="#ke-hoach-tai-chinh" title="Phòng Kế hoạch - Tài chính" />
                                <Link href="#tram-y-te" title="Phòng Trạm Y tế" />
                            </div>
                        </Anchor>
                    </Col>


                    <Col span={19}>
                        {/* cong tac sinh vien */}
                        <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "cong-tac-sinh-vien">
                            
                            <blockquote >
                                <b>
                                Phòng A.02, 227 Nguyễn Văn Cừ, Q.5, TP.HCM
                                <br/>
                                Email: <a href="mailto:congtacsinhvien@hcmus.edu.vn">congtacsinhvien@hcmus.edu.vn</a>
                                <br/>
                                Điện thoại: (028) 62884499 (ext: 1500)
                                <br/>
                                Fanpage: <a href = "https://www.facebook.com/osa.hcmus/" >https://www.facebook.com/osa.hcmus/</a>
                                </b>

                                <br/>
                                <br/>
                                
                                - Đầu mối phối hợp và tổ chức tiếp nhận sinh viên
                                trúng tuyển; thông tin, phổ biến quy chế, quy định
                                của Nhà trường đến sinh viên. Tiếp nhận và quản
                                lý hồ sơ sinh viên nước ngoài đến học tập tại
                                TM trường. Hỗ trợ về quyết định cử sinh viên đi nước
                                ngoài theo các chương trao đổi văn hóa, trao đổi
                                sinh viên.
                               <br/>
                                - Tổ chức “Tuần sinh hoạt công dân sinh viên”
                                đầu khóa, đầu năm học, cuối khóa.
                                <br/>
                                - Xác nhận, chứng thực các loại giấy tờ liên quan
                                đến sinh viên (trừ kết quả học tập), bao gồm cấp
                                giấy giới thiệu thực tập, thực hiện đề tài tốt
                                nghiệp. Hỗ trợ thủ tục cho sinh viên vay vốn ngân
                                hàng. Làm đầu mối phối hợp với các đơn vị có
                                liên quan thực hiện công tác đánh giá kết quả rèn
                                luyện của sinh viên.
                                <br/>
                                - <b>Quản lý hỗ sơ của sinh viên:</b> cập nhật và quản lý
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
                                <br/>
                                - Tiếp nhận, khai thác và phân phối học bổng tài
                                trợ cho sinh viên từ các tổ chức, doanh nghiệp
                                trong và ngoài nước. Phối hợp thực hiện việc xét
                                cấp học bổng khuyến khích cho sinh viên.
                                <br/>
                                - Tiếp nhận đơn đăng ký nội trú để xem xét và bố
                                trí chỗ ở cho sinh viên trong KTX của Trường.
                                Quản lý thông tin ngoại trú của sinh viên. Kết hợp
                                tố chức quân lý tạm trú, tạm vắng cho sinh viên
                                theo đúng quy định của chính quyên địa phương.
                            </blockquote>
                            </div>
                            </Col>
                            <Col span={12}>
                                <center >
                                    <img src = "/assets/img/function-room/phong-cong-tac-sinh-vien.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            </div>
                        </Row>
                        <br/>   
                        {/* dao tao */}
                        <Row >
                            <div data-aos="fade-right">
                            
                            <Col span={12}>
                                <center>
                                    <img src = "/assets/img/function-room/phong-dao-tao.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "dao-tao">
                            
                            <blockquote >
                           
                            <b>
                                Phòng B.02, 227 Nguyễn Văn Cừ, Q.5, TP.HCM
                                <br/>
                                Email:  <a href="mailto: ph-daotao@hcmus.edu.vn"> ph-daotao@hcmus.edu.vn</a>
                                <br/>
                                Điện thoại: (028) 62884499 (ext: 1200)
                                </b>

                                <br/>
                                <br/>
                                
                            - Giải đáp các thông tin liên quan đến đào tạo bậc
                            Đại học và Cao đẳng.
                            <br/>                                            

                                
                            -Xây dựng kế hoạch đạo tạo the học kỳ, năm 
                            học; phối hợp với Khoa lập thời khóa biểu và tổ
                            chức đăng ký học phần cho sinh viên.
                            <br/>                                            

                            
                            - Tổ chức tuyển sinh/xét tuyến Đại học, Cao đẳng
                            cho các loại hình đào tạo.
                            <br/>                                            

                        
                            - Xây dựng và cập nhật các chương trình đào tạo,
                            phát triển các chương trình đào tạo mới.
                            <br/>                                            

                            
                            - Quản lý và xác nhận các dữ liệu về kết quả học
                            tập, văn bằng chứng chỉ tốt nghiệp của sinh viên.
                            <br/>                                            

                            
                            - Xử lý sinh viên về học vụ: thôi học, bảo lưu, tiếp
                            tục học...
                            <br/>                                            

                            
                            - Thực hiện xét tốt nghiệp; quản lý, cấp phát văn
                            bằng Đại học, Cao đẳng theo quy định.
                            <br/>                                            

                            
                            - Thiết kế chương trình đào tạo và quản lý học vụ
                            cho sinh viên nước ngoài.
                            <br/>                                            

                            
                            - Quản lý các nội dung thông tin đào tạo Đại học,
                            Cao đẳng trên website của Trường.
                            <br/>                                            

                                
                            </blockquote>
                            </div>
                            </Col>
                            
                            </div>
                        </Row>
                        <br/>   

                        {/* Khao thi va DBCL */}
                        <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "khao-thi-va-dam-bao-chat-luong">
                            
                            <blockquote >
                            <b>
                            Phòng B.04, 227 Nguyễn Văn Cừ, Q.5, TP.HCM
                            <br/>
                            Email: <a href = "mailto: khaothi@hcmus.edu.vn">khaothi@hcmus.edu.vn</a>
                            <br/>
                            Điện thoại: (028) 62884499 (ext: 3370, 3371)
                            </b>
                            <br/>
                            <br/>

                            <b>1. Công tác khảo thí: </b>
                            <br/>                                            
                            - Phụ trách hoạt động khảo thí của Trường.
                            <br/>                                            
                            - Lập kế hoạch thi, tổ chức thi, hoán đề, in đề thị,
                            lưu trữ đề thi (giữa kỳ, cuối kỳ) tất cả các học
                            phần trong chương trình đào tạo.
                            <br/>                                            
                            - Phụ trách công tác chấm thi, quản lý bài thi
                            (giữa kỳ, cuối kỳ) tất cả các học phần trong
                            chương trình đào tạo.
                            <br/>                                            
                            - Xây dựng hệ thống ngân hàng đề thi kết thúc
                            học phần cho bậc đào tạo đại học hệ chính quy.
                            <br/>                                            
                            - Phối hợp tổ chức khảo sát đánh giá môn học,
                            chương trình đào tạo; khảo sát cơ hội việc làm
                            của sinh viên tốt nghiệp.
                            <br/>                                            
                            <b>2. Công tác đảm bảo chất lượng:</b>
                            <br/>                                            
                            - Phụ trách các hoạt động liên quan đến Đảm bảo
                            chất lượng giáo dục của Trường.
                            <br/>                                            
                            - Triển khai, theo dõi tiến độ và kết quả thực hiện
                            công tác tự đánh giá và đánh giá ngoài cấp
                            chương trình đào tạo của các Khoa, cấp cơ sở
                            giáo dục theo các Bộ Tiêu chuẩn kiểm định chất
                            lượng giáo dục trong nước và quốc tế.
                            <br/>                                            
                           
                            </blockquote>
                            </div>
                            </Col>
                            <Col span={12}>
                                <center>
                                    <img src = "/assets/img/function-room/phong-khao-thi-va-dbcl.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            </div>
                        </Row>
                        <br/>   

                        {/* thanh tra phap che */}
                        <Row >
                            <div data-aos="fade-right">
                            
                            <Col span={12}>
                                <center>
                                    <img src = "/assets/img/function-room/phong-thanh-tra-phap-che.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "thanh-tra-phap-che">
                            
                            <blockquote >
                            <b>
                            Phòng F.107, 227 Nguyễn Văn Cừ, Q.5, TP.HCM
                            <br/>
                            Email: <a href = "mailto: ttpcshtt@hcmus.edu.vn">ttpcshtt@hcmus.edu.vn</a>
                            <br/>
                            Điện thoại: (028) 62884499 (ext: 1800)
                            </b>
                            <br/>
                            <br/>

                            <b>1. Chức năng Thanh tra</b>
                            <br/>
                            Tham mưu thực hiện công tác thanh tra, kiểm tra
                            nhằm tăng cường hiệu quả quản lý và nâng cao
                            chất lượng giáo dục, bảo vệ quyền và lợi ích hợp
                            pháp của tổ chức, cá nhân trong hoạt động đào tạo.
                            <br/>
                            <b>2. Chức năng Pháp chế</b>
                            <br/>
                            Tham mưu những vấn đề pháp lý liên quan đến các
                            hoạt động của trường; tổ chức thực hiện công tác
                            xây dựng các văn bản quy phạm nội bộ, tham gia
                            phổ biến giáo dục pháp luật, kiểm tra việc thực hiện
                            pháp luật trong nhà trường.
                            <br/>
                            <b>3. Chức năng Sở hữu trí tuệ</b>
                            <br/>
                            Tham mưu việc rà soát, khai thác và quản trị tài sản
                            trí tuệ trong phạm vi Nhà trường. Tham gia thực
                            hiện các hoạt động về sở hữu trí tuệ; hỗ trợ cho các
                            hoạt động đào tạo, nghiên cứu khoa học và chuyển
                            giao công nghệ của Nhà trường.


                                                            
                            </blockquote>
                            </div>
                            </Col>
                            
                            </div>
                        </Row>
                        <br/>   

                        {/* khoa hoc cong nghe */}
                        <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "khoa-hoc-cong-nghe">
                            
                            <blockquote >
                            <b>
                            Phòng F.07, 227 Nguyễn Văn Cừ, Q.5, TP.HCM
                            <br/>
                            Email: <a href = "mailto: ph-khcn@hcmus.edu.vn">ph-khcn@hcmus.edu.vn</a>
                            <br/>
                            Điện thoại: (028) 62884499 (ext: 1400, 1401)
                            </b>
                            <br/>
                            <br/>
                            - Thực hiện quản lý khoa học công nghệ, các trung
                            tâm nghiên cứu khoa học, các hoạt động nghiên
                            cứu khoa học (NCKH) đề tài các cấp (Nghị định
                            thư, cấp Quốc gia, cấp ĐHQG, cấp Bộ, cấp Sở, cấp
                            cơ sở...); chuyển giao công nghệ, vườn ươm công
                            nghệ, doanh nghiệp công nghệ, các dự án NGKH
                            hợp tác quốc tế.
                            <br/>
                            - Phối hợp với Đoàn TN-Hội SV tổ chức công tác
                            NCKH sinh viên, theo dõi hoạt động NCKH sinh
                            viên và giải thưởng sinh viên NCKH.
                            <br/>
                            - Phối hợp với Phòng Thanh tra Pháp chế - Sở hữu
                            Trí tuệ quản lý, đăng ký quyền sở hữu trí tuệ, giải
                            pháp hữu ích và thương mại hóa kết quả NCKH của
                            cán bộ, viên chức và sinh viên.
                            
                            </blockquote>
                            </div>
                            </Col>
                            <Col span={12}>
                                <center>
                                    <img src = "/assets/img/function-room/phong-khoa-hoc-cong-nghe.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            </div>
                        </Row>
                        <br/>   

                        {/* thong tin truyen thong */}
                        <Row >
                            <div data-aos="fade-right">
                            
                            <Col span={12}>
                                <center >
                                    <img src = "/assets/img/function-room/phong-thong-tin-truyen-thong.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "thong-tin-truyen-thong">
                            
                            <blockquote >
                            <b>
                            Phòng F.02, 227 Nguyễn Văn Cừ, Q.5, TP.HCM
                            <br/>
                            Email: <a href="mailto: thongtintruyenthongðhcmus.edu.vn">thongtintruyenthongðhcmus.edu.vn</a>
                            <br/>
                            Điện thoại: (028) 62884499 (ext: 3355)
                            </b>

                            <br/>
                            <br/>
                                                            
                            - Phụ trách công tác truyền thông của Trường
                            thông qua website của Trường, fanpage và các
                            trang thông tin chuyên đề khác.
                            <br/>
                            - Chuẩn bị các sản phẩm truyền thông; các ấn
                            phẩm phục vụ công tác tư vấn tuyển sinh của
                            Trường.
                            <br/>
                            - Tổ chức, quản lý các hoạt động gắn kết và hợp
                            tác giữa Nhà trường với các doanh nghiệp.
                            <br/>
                            - Phối hợp với với các đơn vị liên quan tổ chức
                            công tác tư vấn tuyển sinh.
                            <br/>
                            - Quản lý toàn diện dữ liệu thông tin cựu sinh
                            viên Trường.
                            <br/>
                            - Quản lý và phát triển hạ tâng và dịch vụ mạng
                            của Trường.
                            
                            </blockquote>
                            </div>
                            </Col>
                            
                            </div>
                        </Row>
                        <br/>   

                        {/* Quan hệ Quốc tế - Quản lý Dự án */}
                        <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "quan-he-quoc-te">
                            
                            <blockquote >
                            <b>
                            Phòng F.101, F.105, 227 Nguyễn Văn Cừ, Q.5
                            <br/>
                            Email: <a href="internationalrelaftions@ðhcmus.edu.vn">internationalrelaftions@ðhcmus.edu.vn</a>
                            <br/>
                            Điện thoại: (028) 38 308 557
                            </b>
                            <br/>
                            <br/>
                           
                            <b>1.Quản lý và tổ chức các hoạt động quốc tế</b>
                            <br/>
                            - Đề xuất phương hướng mở rộng và nâng cao hiệu
                            quả hoạt động hợp tác quốc tế.
                            <br/>
                            - Phối hợp thực hiện các hội nghị, hội thảo, chuyên
                            đề, triển lãm do các cơ quan ngoại giao, công ty
                            nước ngoài mời tổ chức. Đón tiếp các đoàn quốc tế.
                            <br/>
                            - Xét duyệt và tổ chức trao tặng các danh hiệu (giáo
                            sư mời nghiên cứu, tiến sỹ danh dự, bằng khen,
                            giấy khen, kỉ niệm chương,...) cho các đối tác
                            nước ngoài.
                            <br/>

                            <b>2.quản lý các dự án hợp tác nghiên cứu và giáo dục quốc tế</b>
                            <br/>
                            - Phối hợp với <b>Phòng công tác sinh viên</b> hỗ trợ thủ tục pháp lý cho sinh viên nước ngoài trong thời gian học tập tại trường.
                            <br/>
                            - Phối hợp với các Khoa và đơn vị chức năng xây
                            dựng các chương trình đào tạo, dịch vụ khoa học
                            quốc tế có thu.
                            <br/>

                            <b>3.Chương trình phối hợp đào tạo, trao đổi chuyên môn và học bổng du học</b>
                            <br/>
                            - Đầu mối quản lý các chương trình phối hợp đào
                            tạo quốc tế; chương trình trao đổi chuyên môn,
                            giao lưu quốc tế (giảng viên, sinh viên, giáo sư,
                            nhà khoa học);
                            <br/>
                            - Phụ trách các chương trình học bổng ngắn/dài hạn do các tổ chức quốc tế trong và ngoài nước tài trợ)
                            <br/>
                            - Giới thiệu học bổng du học cho sinh viên, giảng viên và các đối tượng khác.
                            <br/>

                            - Phối hợp với các đơn vị thực hiện chương trình Intership sinh viên tại các doanh nghiệp và trường, viện
                            <br/>

                            - Phối hợp với <b>Phòng Công tác Sinh viên</b> trong công tác tiếp nhận sinh viên nước ngoài vào học tại trường.
                            <br/>

                            - Phối hợp <b>Phòng Tổ chức-Hành chính</b>, <b>Phòng Đào tạo</b> và các Khoa giới thiệu việc đào tạo đại học và sau đại học ở nước ngoài các chương trình hợp tác quốc tế.
                            <br/>

                            
                            </blockquote>
                            </div>
                            </Col>
                            <Col span={12}>
                                <center>
                                    <img src = "/assets/img/function-room/phong-quan-he-doi-ngoai.png" alt = "" style = {{width:"100%"}}/>
                                </center>
                            </Col>
                            </div>
                        </Row>
                        <br/>
                        {/*ke hoach tai chinh */}
                         <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "ke-hoach-tai-chinh">
                            
                            <blockquote>
                            <b>Phòng Kế hoạch Tài Chính</b>
                            <br/>
                            <br/>
                            <b>
                            Phòng B.01, 227 Nguyễn Văn ừ, Q.5, TP.HCM
                            <br/>
                            Email: <a href="taivu.khtn€@gmail.com">taivu.khtn€@gmail.com</a>
                            <br/>
                            Điện thoại: (028) 38355275
                            </b>
                            <br/>
                            <br/>
                            -Thu học phí
                            <br/>
                            -Xác nhận đã đóng tiền học phí cho sinh viên
                            
                            </blockquote>
                            </div>
                            </Col>
                            </div>
                        </Row>
                        <br/>   

                        {/* tram y te */}
                        <Row >
                            <div data-aos = "fade-left" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "tram-y-te">
                            
                            <blockquote>
                            <b>Trạm Y tế</b>
                            <br/>
                            <b>Điện thoại: (028) 62884499 (ext: 1103)</b>
                            <br/><br/>
                            -Khám bệnh, sơ cấp cứu, cấp thuốc cho sinh viên khi cần thiết
                            
                            </blockquote>
                            </div>
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

export default FunctionRoom;