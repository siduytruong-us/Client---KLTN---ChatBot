import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import {department} from "../../Global/GlobalVariable/departments"
import { Tooltip } from 'antd';

class Department extends Component {

  constructor(props) {
      super(props);
      this.state = {
        department: department
      }
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  render() {
    const {department} = this.state
      return (
        <div>
          <section id="mu-page-breadcrumb">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="mu-page-breadcrumb-area">
                    <h2>Giới thiệu các Khoa - Ngành đào tạo</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="mu-course-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-course-content-area">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mu-course-container">
                          <div className="row">
                          
                                          
                          {department.map(each => { 
                            var detailDepartmentBaseUrl = "/department/"
                            return (
                            <div className="col-md-4 col-sm-4 animated fadeIn slow " style = {{height:"450px"}}>
                              <div className="mu-latest-course-single ">
                                <figure className="mu-latest-course-img">
                                  <NavLink to={detailDepartmentBaseUrl+each.alias}><img src={"/assets/img/department/"+each.alias+".png"} alt="img"/></NavLink>
                                </figure>
                                <div className="mu-latest-course-single-content" >
                                  <h4><NavLink to={detailDepartmentBaseUrl+each.alias}>{each.name}</NavLink></h4>
                                  <p  style = {{ display: "-webkit-box",WebkitLineClamp:5,WebkitBoxOrient:'vertical',overflow: "hidden"}}>
                                    <Tooltip placement="left" title={each.text} mouseEnterDelay = {0.5}>
                                      <span>{each.text}</span>
                                    </Tooltip>
                                  </p>
                                  <div className="mu-latest-course-single-contbottom">
                                    <NavLink className="mu-course-details" to={detailDepartmentBaseUrl+each.alias}>Xem chi tiết</NavLink>
                                  </div>
                                </div>
                              </div> 
                            </div>   
                            )
                          })}
                          </div>
                        </div>
                      
                      </div>
                      {/* <div className="col-md-3">
                        <aside className="mu-sidebar">
                          <div className="mu-single-sidebar">
                            <h3>KHOA</h3>
                            <ul className="mu-sidebar-catg">
                              <li><a href="/department/?keyword=cntt">Công nghệ thông tin</a></li>
                              <li><a href="/department/?keyword=diachat">Địa chất</a></li>
                              <li><a href="/department/?keyword=dientu">Điện tử viễn thông</a></li>
                              <li><a href="/department/?keyword=moitruong">Môi trường</a></li>
                              <li><a href="/department/?keyword=toantin">Toán - Tin Học</a></li>
                              <li><a href="/department/?keyword=vatly">Vật lý - Vật lý Kỹ thuật</a></li>
                            </ul>
                          </div>
                          <div className="mu-single-sidebar">
                            <h3>Tags Cloud</h3>
                            <div className="tag-cloud">
                              <a href="#">Health</a>
                              <a href="#">Science</a>
                              <a href="#">Sports</a>
                              <a href="#">Mathematics</a>
                              <a href="#">Web Design</a>
                              <a href="#">Admission</a>
                              <a href="#">History</a>
                              <a href="#">Environment</a>
                            </div>
                          </div>
                        </aside>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      );
  }
}

export default Department;