import React from 'react';
import { Card, Comment, Avatar, Form, Button, Divider, Row, Col, Input, Collapse, Tooltip, Icon, } from 'antd';
import moment from 'moment';
const Panel = Collapse.Panel;


const PostCard = ({post, student , handleCommentPost, isCommenting}) => {
    const headerCommentTitle = student? post.comment.length + " Bình luận" : "Đăng nhập để hiển thị bình luận"
    const isLoggin = student? false: true

    const InputMessageFrame = (
        <Row>
            <Col span = {19}>
            <Input id = {"comment_post" + post.id} style = {{width:"100%"}}/>
            </Col>

            <Col span = {3} push = {2}>
            <Button  type="primary" onClick = {() => handleCommentPost(post, student)} loading = {isCommenting}>Trả lời</Button>
            </Col>
        </Row>
    )
    var {question,create_time, title, isSolved} = post

    return (
        <div>
            <Card 
                headStyle = {{whiteSpace:"normal"}}
                title={
                    <Row style = {{paddingBottom:"5px"}}>
                        <Col span = {1}>
                            <Avatar size={42} style = {{marginTop:"18px"}} src = "/assets/img/user_icon.png" />
                        </Col>
                        <Col span = {23}>
                        <div style ={{paddingLeft:"20px"}}>
                        <p  style = {{ display: "-webkit-box", WebkitBoxOrient:'vertical',overflow: "hidden",  marginBottom: "10px"}}>
                            <b>{title}</b> {isSolved? <Icon type="check-circle" style={{ fontSize: '16px', color: '#26e236', marginLeft:"10px" }} theme="filled" />: null}
                            <br/>
                            {question}
                        </p>
                        <span><p style = {{fontSize:"10px", marginBottom: "0px"}}>{post.student} - <Icon type="clock-circle" /> {moment(parseInt(create_time)).format('DD-MM-YYYY HH:mm')}</p></span>
                        </div>
                        </Col>
                    </Row>
                } bordered={false} style={{ width: "auto" }}
                >

                <Collapse bordered={false} >
                    <Panel header={headerCommentTitle} key="1" disabled = {isLoggin}>
                        {post.comment ? post.comment.map ( (each,index) => { 
                            if (each ) { 
                                return (
                                    <Comment
                                    key = {index}
                                    author={<a><b>{each.user} - {moment(parseInt(each.create_time)).fromNow()}</b></a>}
                                    avatar={(<Avatar src="/assets/img/user_icon.png" alt="comment avatar"/>)}
                                    content={(
                                    <p>{each.text}</p>
                                    )}
                                    />
                                )
                            }
                            return (<div></div>)
                        }):null}

                        {InputMessageFrame}
                    </Panel>
                </Collapse>
            </Card>
        </div>
    );
};

export default PostCard;