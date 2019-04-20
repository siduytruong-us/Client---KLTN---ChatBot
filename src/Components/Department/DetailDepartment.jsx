/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {NavLink} from "react-router-dom"
import {department} from "../../Global/GlobalVariable/departments"
import { Anchor } from 'antd';
const { Link } = Anchor;

class DetailDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            department: {
                name:"",
                alias:"",
            }
        }
    }
    
    componentWillMount(){
        const alias = this.props.match.params.alias
        const temp = department.find(each => each.alias === alias)
        this.setState({ department: temp})
    }

    componentDidMount() {
        window.scrollTo(0,0)
    }

    render() {
        var {name} = this.state.department
        return (
            <div>
                <section id="mu-page-breadcrumb">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12">
                            <div class="mu-page-breadcrumb-area">
                            <h2>{name}</h2>
                            <ol class="breadcrumb">
                                <li><NavLink to="/khoa-nganh" ><a>Các khoa</a></NavLink></li>            
                                <li class="active">{name}</li>
                            </ol>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                
                <section id="mu-course-content">
                
                
                    <div className="container animated bounceIn fast">
                        <div className="row">
                            askdlasdklsadkasldkwqodkqwod
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default DetailDepartment;