import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Footer extends Component {
    render() {
      if (window.location.pathname === '/dang-nhap' || window.location.pathname === '/dang-ky') 
      return null;

      return (
            <footer id="mu-footer">
     <div className="mu-footer-top"   style = {{position:"relative", zIndex:0.5}}>
      <div className="container">
        <div className="mu-footer-top-area">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="mu-footer-widget">
                <h4>Giới thiệu</h4>
                <ul>
                  <li><NavLink to = "/khoa-nganh">Các khoa</NavLink></li>
                  <li><NavLink to = "/phong-chuc-nang">Các phòng chức năng</NavLink></li>
                  <li><NavLink to = "/thu-vien">Thư viện</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="mu-footer-widget">
                <h4>Cẩm nang trường học</h4>
                <ul>
                  <li><NavLink to = "/tin-chi-hoc-phan">Tín chỉ - học phần</NavLink></li>
                  <li><NavLink to = "/lich-thi">Lịch thi, học phí</NavLink></li>
                  <li><NavLink to = "/thong-bao">Thông báo phòng ban</NavLink></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="mu-footer-widget">
                <h4>Liên lạc</h4>
                <address>
                  <p>Cở sở 1: 227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh</p>
                  <p>Cở sở 2: Làng Đại học quốc gia, Linh Trung, Thủ Đức, TP Hồ Chí Minh</p>
                  <p>ĐT: (84) 283-8350-096</p>
                  
                  <p>Email: <a href = "mailto: duytruong0702@gmail.com">duytruong0702@gmail.com</a></p>
                  <a href = "https://www.facebook.com/dhkhtndhqgtphcm/" target="_blank" rel="noopener noreferrer">Fanpage Trường</a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
        );
    }
}

export default Footer;