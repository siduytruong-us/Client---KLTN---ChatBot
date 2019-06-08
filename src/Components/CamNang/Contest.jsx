import React, { Component } from 'react'
import axios from '../../Config/axiosConfig';
import { Divider, Popconfirm, Icon, List, Anchor, Collapse, message } from 'antd';
import AOS from "aos"


const Panel = Collapse.Panel;
const {Link} = Anchor

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    border: 0,
    overflow: 'hidden',
  };

export default class Contest extends Component {
    constructor(props) {
        super(props);
        AOS.init({
            once:true
        })

        this.state = { 
            midSem:  [],
            lastSem: [],
            subSchedule:[],
        }
    }

    //#region component
    componentWillReceiveProps() { 
        AOS.refresh()
    }

    componentWillMount() {
        window.scrollTo(0,0)
        AOS.refresh()

        this.fetchDateFromServer()
    }
    //#endregion

    fetchDateFromServer() { 
        axios.get("/client/hcmus/schedule/contest")
        .then( res => { 
            const data = res.data.data

            var midSem = []
            var lastSem = []

            data.forEach( each => {
                var title = each.title.toLowerCase();
                if (title.includes("cuối kỳ"))
                    lastSem.push(each)
                else 
                    midSem.push(each)
            })
            this.setState({lastSem, midSem })
        })
        .catch (err => { 
            if (err.resposne) {
                err = err.response.message
                message.error(err.toString(),1.5)
            }
        })

        axios.get("/client/hcmus/schedule/subject")
        .then( res => { 
            const data = res.data.data
            data.map( each => {
                console.log(each);
                
            })
            this.setState({subSchedule: data})
        })
        .catch (err => { 
            if (err.resposne) {
                err = err.response.message
                message.error(err.toString(),1.5)
            }
        })
    }


    render() {
        const {lastSem, midSem, subSchedule} = this.state
        return (
        <section id="mu-course-content">
            <div class="container">
                <div class="col-sm-2 col-sm-pull-2" >
                        <Anchor style = {{paddingLeft:"10px", position:"absolute"}} offsetTop = {100}>
                            <div style = {{ width :"100%", overflowX:"hidden",} } >
                                <Link href="#hp" title="Học Phí" />
                                <Link href="#lt" title="Lịch Thi" />
                                <Link href="#tkb" title="Thời khóa biểu" />
                            </div>
                        </Anchor>
                </div>

                <div class="row">
                    <div class="col-sm-12 text-center" id = "hp">
                        <Divider><h2 style = {{fontFamily:"sans-arial"}}>HỌC PHÍ</h2></Divider>
                    </div>
                    
                    <div class="col-sm-12" style = {{paddingRight:"100px", marginLeft:"50px"}}>
                    <p>Học phí của chương trình đạo tạo chính quy trường Khoa học tự nhiên được tính vào dựa trên theo số tín chỉ mà bạn đã đăng ký trong suốt quá trình học tập.</p>
                    <p>Trung bình mỗi tín chỉ(tc) có học phí khoảng <b>192 nghìn/1tc</b> đối với năm học <b>2017-2018</b>, <b>210 nghìn/1tc</b> đối với năm học <b>2018-2019</b>. Một học kỳ bạn có thể đăng ký ít nhất 16 tín chỉ và nhiều nhất là 30 tín chỉ</p>

                    <p><b>Cách thức đóng học phí:</b></p>
                    <blockquote >
                        + Sinh viên đóng học phí tại các chi nhánh, phòng giao dịch, điểm giao dịch tại trường (CS 227 Nguyễn Văn Cừ, Quận 5) hoặc qua dịch vụ Internet Banking của Ngân hành Nông nghiệp và Phát triển nông thôn - Agribank theo hình thức Bill payment
                        <br/>
                        + Sinh viên có thể liên hệ phòng giao dịch Agribank chi nhánh Bình Thạnh để đăng ký sử dụng dịch vụ Internet Banking.
                        <br/>
                        + Khi đến đóng học phí, Sinh viên cung cấp <b>Mã Số Sinh Viên</b> và tên trường <b>"ĐH KHTN ĐHQG-HCM"</b> cho nhân viên ngân hàng.
                        <br/>
                        
                    </blockquote>

                    <p><b>Những điều lưu ý về đóng học phí:</b></p>
                    <blockquote >
                        + Sau khi đóng tiền học, Sinh viên phải <b>giữ chứng từ nộp tiền</b> của ngân hàng để xác nhận đã đóng học phí. Sinh viên liên hệ phòng Kế hoạch - Tài chính để được cấp biên lai (nếu cần).
                        <br/>
                        + Sinh viên có thể liên hệ <b>SĐT: 0902 093 310 (anh Duy)</b> để được hỗ trợ việc đóng học phí từ ngân hàng Agribank
                        <br/>
                        + Nộp học phí đúng theo thời hạn quy định, <b>nộp trễ sẽ bị xóa tên trong danh sách dự thi</b>
                        <br/>
                        + Sinh viên bị buộc thôi học nếu không hoàn thành <b>nghĩa vụ học phí đúng thời gian quy định của trường</b>
                        <br/>
                        + Sinh viên phải thường xuyên cập nhật thông tin đóng học phí trên trang web của trường <b>(theo <a href ="https://www.hcmus.edu.vn/%C4%91%C3%A0o-t%E1%BA%A1o/daotao#sppb-addon-1541494697408" target="_blank">LINK</a>)</b>
                        <br/>
                        + Các học phần đã đạt nhưng muốn cải thiện điểm thì sinh viên phải đăng ký học lại và <b>nộp học phí</b> theo quy định
                    </blockquote>
                    </div>
                </div>
           
                <div class="row">
                    <div class="col-sm-12 text-center" id = "lt">
                        <Divider><h2 style = {{fontFamily:"sans-arial"}}>LỊCH THI</h2></Divider>
                    </div>
                    
                    <div class="col-sm-12" style = {{paddingRight:"100px", marginLeft:"50px"}}>
                        

                    <Collapse  bordered={false}  expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
                        <Panel header = {<h4>Giữa kỳ</h4>} key="1" style={customPanelStyle}>
                        <List
                            itemLayout="horizontal"
                            dataSource={midSem}
                            renderItem={each => (
                            <List.Item>
                                <List.Item.Meta
                                title={<Popconfirm
                                    cancelText = ""
                                    title={ each.excel.map(each => <div><a href = {each.linkExcel}>{each.linkExcel}</a></div>) }
                                    icon={<Icon type="file-excel" style = {{color:"green", fontSize:"20px"}} />}
                                >
                                    <a href="#" className = "animated fadeIn slow"> {each.title} </a>
                                </Popconfirm>}
                                />
                            </List.Item>
                            )}
                        />
                        </Panel>
                        <Panel header = {<h4>Cuối kỳ</h4>} key="2">
                        <List
                            itemLayout="horizontal"
                            dataSource={lastSem}
                            renderItem={each => (
                            <List.Item>
                                <List.Item.Meta
                                title={<Popconfirm
                                    cancelText = ""
                                    title={ each.excel.map(each => <div><a href = {each.linkExcel}>{each.linkExcel}</a></div>) }
                                    icon={<Icon type="file-excel" style = {{color:"green", fontSize:"20px"}} />}
                                >
                                    <a href="#" className = "animated fadeIn slow"> {each.title} </a>
                                </Popconfirm>}
                                />
                            </List.Item>
                            )}
                        />
                        </Panel>
                    </Collapse>


                    </div>
                </div>
            
                <div class="row">
                    <div class="col-sm-12 text-center" id = "tkb">
                        <Divider><h2 style = {{fontFamily:"sans-arial"}}>THỜI KHÓA BIỂU</h2></Divider>
                    </div>
                    
                    <div class="col-sm-12" style = {{paddingRight:"100px", marginLeft:"50px"}}>
                        

                        <List
                            itemLayout="horizontal"
                            dataSource={subSchedule}
                            renderItem={each => (
                            <List.Item>
                                <List.Item.Meta
                                title={
                                <Popconfirm
                                cancelText = ""
                                title={ each.excel? <div><a href = {each.excel.linkExcellinkExcel}>{each.excel.linkExcel}</a></div>:null }
                                icon={ each.excel? <Icon type="file-excel" style = {{color:"green", fontSize:"20px"}} />: null}>

                                    <a href={each.excel?"#": each.linkHtml} className = "animated fadeIn slow"> {each.title} </a>

                                </Popconfirm>
                                }
                                />
                            </List.Item>
                            )}
                        />


                    </div>
                </div>
            
            </div>
        </section>
        )
    }
}
