import React, { Component } from 'react';
import AOS from "aos"

class Credits extends Component {
    constructor(props) {
        super(props);
        AOS.init({
            once:true
        })
    }

    componentWillMount () { 
        console.log("will mount");
        window.scrollTo(0,0)
        AOS.refresh()
    }

    componentDidMount() {
      document.title = "Tín chỉ - học phần"
    }  

    componentWillReceiveProps() { 
        AOS.refresh()
    }

    render() {
        return (
            <div className = "container">
                   <section id="header">
                      <div class="container">
                        <div class="row header-text">
                          <div class="col-sm-5 col-sm-push-6 text-right">
                          <div class="mr-3">
                            <h1>Học phần và <br/>tín chỉ</h1>
                            <h3>cùng với những điều bạn nên biết</h3>
                          </div>
                          </div>
                        </div>
                        
                        <div class="row">
                          <div class="col-sm-4 text-center ">
                            <div data-aos="fade-right"  data-aos-duration="1000">
                                <img class="header-img" src="/img/header1.png" alt="Header Image"/>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </section>
    
    
                <section id="main2">
                  <div class="container">
                    <div class="row">

                      <div class="col-sm-6 margin-30">
                        <div data-aos="fade-right"  data-aos-duration="1000">
                          <h2>Tín chỉ là gì?</h2><br />
                          <p> Tín chỉ được sử dụng để tính khối lượng học tập của sinh viên. Một tín chỉ được quy định bằng 15 tiết học lý thuyết; 30 - 45 tiết thực hành, thí nghiệm hoặc thảo luận; 15 - 30 tiết bài tập; 45 - 90 giờ thực tập tại cơ sở; 30 - 60 giờ làm tiểu luận, bài tập lớn hoặc đồ án, khoá luận tốt nghiệp. </p>
                          <p> Trung bình một ngành học sẽ tích lũy khoảng 148 hoặc hơn tín chỉ để tốt nghiệp.</p>
                          <br />
                        </div>
                      </div>

                      <div class="col-sm-6" style = {{marginTop: "0px"}}>
                        <div data-aos="fade-left"  data-aos-duration="1000">
                            <img class="main1-img img-responsive pull-right" src="/img/main1.png" alt="Main1 Image"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
    
    <section id="main1">
      <div class="container">
        <div class="row">
          
          <div class="col-sm-6">
            <div data-aos="fade-up"  data-aos-duration="1000">
                <img class="main2-img pull-left" src="./img/main2.png" alt="Main2 Image"/>
            </div>
          </div>
          <div class="col-sm-6" style = {{right:"3%"}}>
            <div data-aos="fade-left"  data-aos-duration="1000">
                <h2>Học phần là gì?</h2>
                <p> <b>Học phần (hay Môn học)</b> là khối lượng kiến thức tương đối trọn vẹn, thuận tiện cho sinh viên tích luỹ trong quá trình học tập. Nội dung được bố trí giảng dạy trọn vẹn và phân bố đều trong một học kỳ. Từng học phần được ký hiệu bằng một mã số riêng do trường quy định. </p>
                <p> Mỗi học phần thường bao gồm từ <b>3-4 tín chỉ</b> </p>
                <p> Có hai loại học phần: <b>học phần bắt buộc</b> và <b>học phần tự chọn</b>. </p>
                <blockquote>
                    <b>Học phần bắt buộc</b> là học phần chứa đựng những nội dung kiến thức chính yếu của mỗi chương trình và bắt buộc sinh viên phải tích lũy
                </blockquote>
                <blockquote>
                    <b>Học phần tự chọn</b> là học phần chứa đựng những nội dung kiến thức cần thiết, nhưng sinh viên được tự chọn theo hướng dẫn của Trường nhằm đa dạng hoá hướng chuyên môn hoặc được tự chọn tuỳ ý để tích luỹ đủ số học phần quy định cho mỗi chương trình. 
                </blockquote>
                <br />
              </div>
          </div>
        </div>
      </div>
    </section>

    <div data-aos="zoom-in"  data-aos-duration="1000">
      <section id="message">
        
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <h2 class="white">Đánh giá kết quả học tập</h2>
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

export default Credits;