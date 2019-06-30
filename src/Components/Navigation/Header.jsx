/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import {NavLink} from "react-router-dom"
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      page: null,
    }
  }
  

  //#region component method
  componentDidMount(){ 
      this.setState({ page: this.props.location.pathname.split("/")[1]})
  }

  componentDidUpdate (prevProps) {
    const currentPage =  this.props.location.pathname.split("/")[1]
    if (prevProps.location.pathname.split("/")[1] !== currentPage) 
      this.setState({ page: currentPage})
    
  }
  // #endregion


  //#region method 
  
  //#endregion

    render() {
      const gioithieu = ["khoa-nganh", "thu-vien", "phong-chuc-nang"]
      const camnang = ["tin-chi-hoc-phan", "lich-thi", "thong-bao","hoc-bong-du-hoc"]

        return (
          <div>
            <section id="mu-menu" style ={{position:"fixed", zIndex:3, fontSize:"18px"}}>
            <nav className="navbar navbar-default" role="navigation">  
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="/"><img src="/assets/img/logo.png" alt="logo"  style = {{marginTop: "-8px", width: "90%",height: "auto"}} /></a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul id="top-menu" className="nav navbar-nav navbar-right main-nav">

                    <li className = {this.state.page === "" ? "active" : null}><a href="/">Trang chủ</a></li>    

                    <li className = {gioithieu.some(each => each === this.state.page) ? "active dropdown" : "dropdown"}>
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Giới thiệu <span className="fa fa-angle-down"></span></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><NavLink to="/khoa-nganh">Các Khoa</NavLink></li>                
                        <li><NavLink to="course-detail.html">Đoàn thanh niên - Hội sinh viên</NavLink></li>                
                        <li><NavLink to="/thu-vien">Thư Viện</NavLink></li>
                        <li><NavLink to="/phong-chuc-nang">Các phòng chức năng</NavLink></li>
                      </ul>
                    </li>

                    <li className = {camnang.some(each => each === this.state.page) ? "active dropdown" : "dropdown"}>
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown">Cẩm nang<span className="fa fa-angle-down"></span></a>
                      <ul className="dropdown-menu" role="menu">
                        <li><NavLink to="/tin-chi-hoc-phan">Tín chỉ - học phần</NavLink></li>                
                        <li><NavLink to="/lich-thi">Lịch thi, Học phí, Thời khóa biểu</NavLink></li>                
                        {/* <li><NavLink to="/hoc-bong-du-hoc">Học bổng, du học</NavLink></li>
                        <li><NavLink to="/tuyen-sinh">Tuyển sinh</NavLink></li> */}
                      </ul>
                    </li>

                    <li className = {this.state.page === "hoi-dap" ? "active" : null}><NavLink to="/hoi-dap">Hỏi đáp</NavLink></li>

                    <li className = {this.state.page === "lien-he" ? "active" : null}><NavLink to = "/lien-he">Liên hệ</NavLink></li>

                    {/* <li className = {this.state.page === "dang-nhap" ? "active" : null}><NavLink to="/dang-nhap">Đăng nhập</NavLink></li> */}

                    <li><a href="#" id="mu-search-icon"><i className="fa fa-search"></i></a></li>
                    
                  </ul>                     
                </div>
              </div>     
            </nav>
          </section>

          <div id="mu-search">
          <div className="mu-search-area">      
            <button className="mu-search-close"><span className="fa fa-close"></span></button>
            <div className="container">
              <div className="row">
                <div className="col-md-12">            
                  <form className="mu-search-form" action = "/tim-kiem">
                    <input type="search" placeholder="Tìm theo từ khóa" name = "keyword" />              
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        );
    }
}

export default withRouter(Header)