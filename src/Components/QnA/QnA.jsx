import React, { Component } from 'react';
import { Button, Row, Card, Pagination, Input, Divider } from 'antd';
import PostCard from "./PostCard"

const { TextArea } = Input;



class QnA extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post:[1,2,3,4,61]
        }
    }
    
    render() {
        return (
            <div>
                <section id="mu-page-breadcrumb">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12">
                            <div class="mu-page-breadcrumb-area">
                            <h2>Hỏi đáp</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section id="mu-course-content">
            
                    <div className ="container">
                        <center>
                            <h4>Là nơi cho các bạn đặt câu hỏi để admin hoặc những ai biết câu trả lời sẽ giải đáp thắc mắc! 
                            </h4>
                            <h4>Nên bạn cứ thoải mái nhé ! 
                            </h4>
                            
                        </center>

                        <br/>
                        <Row>
                        <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
                        </Row>
                        <Row>
                        <Button style = {{float:"right", marginTop:"20px"}}>Đặt câu hỏi</Button>
                        </Row>
                        <br/>
                        <Divider><h3>Q&A</h3></Divider>
                        {this.state.post.map(each=> { 
                            return (<PostCard title = "Asdsa" comment = "asdada"/>)
                        })}

                        <Pagination defaultCurrent={1} total={50}  style = {{float:"right"}}/>
                    </div>
                </section>
                    
            </div>
        );
    }
}

export default QnA;