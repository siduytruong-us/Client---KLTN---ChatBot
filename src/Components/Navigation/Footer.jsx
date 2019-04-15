import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="mu-footer">
     <div class="mu-footer-top"   style = {{position:"relative", zIndex:0.5}}>
      <div class="container">
        <div class="mu-footer-top-area">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="mu-footer-widget">
                <h4>Information</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="">Features</a></li>
                  <li><a href="">Course</a></li>
                  <li><a href="">Event</a></li>
                  <li><a href="">Sitemap</a></li>
                  <li><a href="">Term Of Use</a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="mu-footer-widget">
                <h4>Student Help</h4>
                <ul>
                  <li><a href="">Get Started</a></li>
                  <li><a href="#">My Questions</a></li>
                  <li><a href="">Download Files</a></li>
                  <li><a href="">Latest Course</a></li>
                  <li><a href="">Academic News</a></li>                  
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="mu-footer-widget">
                <h4>News letter</h4>
                <p>Get latest update, news & academic offers</p>
                <form class="mu-subscribe-form">
                  <input type="email" placeholder="Type your Email"/>
                  <button class="mu-subscribe-btn" type="submit">Subscribe!</button>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="mu-footer-widget">
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
    <div class="mu-footer-bottom">
      <div class="container">
        <div class="mu-footer-bottom-area">
          <p>&copy; All Right Reserved. Designed by <a href="http://www.markups.io/" rel="nofollow">MarkUps.io</a></p>
        </div>
      </div>
    </div>
  </footer>
  
        );
    }
}

export default Footer;