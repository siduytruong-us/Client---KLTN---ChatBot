import React from 'react';
import { Card, Comment, Avatar, Form, Button, Icon, Row, Col, Input, Collapse, } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
const Panel = Collapse.Panel;
const PostCard = ({title, comment}) => {

    const InputMessageFrame = (
        <Row>
            <Col span = {19}>
            <Input id ="message" style = {{width:"100%"}}/>
            </Col>

            <Col span = {3} push = {2}>
            <Button  type="primary">Trả lời</Button>
            </Col>
        </Row>
    )

    return (
        <div>
            <Card 
                title={title} bordered={false} style={{ width: "auto" }}
                >

                <Collapse bordered={false} >
                    <Panel header="Comment" key="1">
                        <Comment
                            author={<a>Han Solo</a>}
                            avatar={(<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo"/>)}
                            content={(
                            <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                            )}
                        />
                        <Comment
                            author={<a>Han Solo</a>}
                            avatar={(<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo"/>)}
                            content={(
                            <p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                            )}
                        />

                        {InputMessageFrame}
                    </Panel>
                </Collapse>
            </Card>
        </div>
    );
};

export default PostCard;