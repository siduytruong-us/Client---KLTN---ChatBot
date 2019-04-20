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
                        <h2>Thư viện HCMUS</h2>
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
                                <Link title = "Quy trình sử dụng phòng" href = "#phong-thu-vien">
                                    <Link href="#tham-khao" title="Phòng tham khảo" />
                                    <Link href="#tap-chi" title="Phòng tạp chí" />
                                    <Link href="#luu-hanh" title="Phòng lưu hành" />
                                    <Link href="#learning-common" title="Phòng Learning Common" />
                                    <Link href="#co-so-2" title="Phòng đọc cơ sở 2" />
                               </Link>
                            </div>
                        </Anchor>
                    </Col>


                    <Col span={21}>
                        {/* The thu vien */}
                        <Row >
                            <div data-aos = "fade-right" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "the-thu-vien">
                            
                            <blockquote >
                                 <h4><b>Thẻ thư viện</b></h4>

                                
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
                            <div data-aos = "fade-right" >
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
  
                        {/* Cac phong thu vien title */}
                        <Row>
                            <h2 id = "phong-thu-vien">Các loại phòng thư viện</h2>
                        </Row>
                        <br/>

                        <Row >
                            <div data-aos = "fade-right" >
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}} id = "tham-khao">
                            
                            <blockquote >
                                
                                <h4><b>Phòng Tham khảo</b></h4>
                                -Xuất trình thẻ thư viện tài quầy tham khảo
                                <br/>
                                -Chọn tài liệu trên giá để đọc tại chỗ
                                <br/>
                                -Để tài liệu tại bàn sau khi đọc xong
                                <br/>
                                -Sử dụng máy tính để tra cứu thông tin trực tuyến và internet
                                <br/>
                                <br/>
                            </blockquote>

                            <blockquote >
                                <h4 id ="tap-chi"><b>Phòng Tạp chí</b></h4>
                                - Chọ tạp trí trên giá theo từng folder để đọc tại chỗ
                                <br/>
                                - Để tạp chí tại bàn sau khi đọc xong 
                                <br/>
                                <br/>
                            </blockquote>

                            <blockquote >
                                <h4 id = "luu-hanh"><b>Phòng Lưu hành</b></h4>
                                - Xuất trình thẻ thư viện tại quầy lưu hành;
                                <br/>
                                - Chọn sách trên giá để đọc tại chỗ hoặc mượn về
                                nhà;
                                <br/>
                                - Để sách đúng nơi quy định sau khi đọc xong;
                                <br/>
                                - Sách mượn về nhà làm thủ tục tại quầy lưu hành,
                                mỗi lần mượn 03 cuốn với thời hạn 03 tuần (có thể
                                gia hạn thêm 01 tuân);
                                <br/>
                                - Mượn sách quá hạn sẽ bị phạt 1.000 đ/cuốn/ngày
                                trong thời hạn 30 ngày. Quá hạn sau 30 ngày, Thư
                                viện sẽ chuyển danh sách độc giả vi phạm cho
                                Phòng Gông tác Sinh viên;
                                <br/>
                                - Mọi trường hợp sách bị mất, hư hỏng (rách, mất
                                trang, dính bẩn, ẩm ướt,...) đều phải đền bù theo quy
                                định: giá bìa sách cộng thêm tiền xử lý mã vạch, tem
                                từ, phân loại, nhãn (50.000 đ/cuốn);
                                <br/>
                                - Đem sách ra ngoài không qua thủ tục tại quầy lưu
                                hành và bị hệ thống an ninh phát hiện sẽ bị xử phạt
                                100.000đ/cuốn, truất quyên độc giả và thông báo về
                                Phòng Gông tác Sinh viên.
                            </blockquote>
                            </div>
                            </Col>
                            <Col span={12}>
                                <center  data-aos = "flip-left" data-aos-duration="1500" >
                                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1C9kONB-3iAPX6kBgbmd_RFW0AoN8pnbQb-Ur6g_lBSflK-RT" alt = "" style = {{width:"50%"}}/>
                                </center>
                                <br/>
                                <br/>
                                
                                <center data-aos = "fade-up-left" data-aos-duration="1500" >
                                    <img src = "http://2.bp.blogspot.com/-GXLG6fmcyIQ/VjCDa3LVwDI/AAAAAAAAIeI/S1iFC77bZYM/s1600/DSC05494.JPG" alt = "" style = {{width:"50%"}}/>
                                </center>
                                
                            </Col>
                            </div>
                        </Row>
                        <br/> 

                        <Row >
                            <div data-aos="fade-left"   >
                            
                            <Col span={12}>
                                <center  data-aos="zoom-in-right" data-aos-duration = "1500">
                                    <img src = "http://thuvienquocgia.vn/wp-content/uploads/2018/12/top-5-thu-vien-thanh-pho-ho-chi-minh-nhat-dinh-phai-ghe-qua.jpg" alt = "" style = {{width:"80%"}}/>
                                </center>
                                <br/>
                                <br/>
                                <br/>
                                <center  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration = "1500">
                                    <img src = "http://media.kinhtedothi.vn/524/2018/8/3/thu%20vien%20anh%20minh%20hoa.jpg" alt = "" style = {{width:"80%"}}/>
                                </center>
                                
                            </Col>
                            
                            <Col span={12}>
                            <div className="mu-latest-course-single-content" style = {{fontSize:"20px"}}  id = "learning-common">
                            
                            <blockquote >
                                
                                <h4><b>Phòng Learing Common</b></h4>
                                - Đọc tại chỗ tất cả các tài liệu như: sách in, sách điện
                                tử, CD-ROM, phần mềm học tiếng Anh....;
                                <br/>
                                - Mươn thiết bị đọc sách điện tử (Kindle Fire) tại quầy
                                thủ thư để được hướng dẫn sử dụng;
                                <br/>
                                - Mượn đĩa CD-ROM và tai nghe để học ngoại ngữ
                                hoặc xem các chương trình truyền hình;
                                <br/>
                                - Trả các thiết bị sau khi đã sử dụng tại quầy thủ thư.
                                Mọi trường hợp hư hỏng, mất mát đều phải đền bù
                                theo giá trị hiện hành của thiết bị;
                                <br/>
                                - Truy cập Internet đế phục vụ học tập, nghiên cứu,
                                giải trí. Nghiêm cấm các trường hợp truy cập các
                                website có nội dung xấu. Nếu vi phạm sẽ bị tước
                                quyền độc giả;
                                <br/>
                                - Sử dụng các dịch vụ in ấn, scan tài liệu, vui lòng liên
                                hệ quầy thủ thư.
                                
                                <br/>
                                <br/>
                                
                            </blockquote>

                            <blockquote>
                            <h4 id = "co-so-2"><b>Phòng đọc cơ sở 2</b></h4>
                            

                            - Bạn đọc xuất trình Thẻ thư viện, để cặp, túi xách
                            đúng nơi quy định;
                            <br/>
                            - Sử dụng máy tính để tra cứu tài liệu;
                            <br/>
                            - Phọn sách trên giá để đọc tại chỗ hoặc mượn về
                            nhà;
                            <br/>
                            - Bạn đọc có thể đọc tại Thư viện hoặc đem sang
                            Phòng Tự học. Sách phải trả trước 15g45 cùng
                            ngày;
                            <br/>
                            - Báo và tạp chí chỉ đọc tại chỗ;
                            <br/>
                            - Sách mượn về nhà làm thủ tục tại quầy lưu hành,
                            mỗi lân mượn 03 cuốn với thời hạn 03 tuân (có thể
                            gia hạn thêm 01 tuần);
                            <br/>
                            - Mượn sách quá hạn sẽ bị phạt 1.000 đ/cuốn/ngày
                            trong thời hạn 30 ngày. Quá hạn sau 30 ngày, Thư
                            viện sẽ chuyển danh sách độc giả vi phạm cho
                            Phòng Công tác Sinh viên;
                            <br/>
                            - Mọi trường hợp sách bị mất, hư hỏng (rách, mất
                            trang, dính bẩn, ẩm ướt,...) đều phải đền bù theo quy
                            định giá bìa sách cộng thêm tiền xử lý mã vạch, tem
                            từ, phân loại, nhãn (50.000 đ/cuốn);
                            <br/>
                            - Đem sách ra ngoài không qua thủ tục tại quầy lưu
                            hành và bị hệ thống an ninh phát hiện sẽ bị xử phạt
                            100.000đ/cuốn, truất quyền độc giả và thông báo về
                            Phòng Công tác Sinh viên.
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

export default Library;