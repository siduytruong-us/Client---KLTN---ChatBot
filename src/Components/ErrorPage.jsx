import React, { Component } from 'react';

class ErrorPage extends Component {

    componentDidMount () { 
        window.scrollTo(0,0)
    }
    render() {
        return (
            <section id="mu-error">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mu-error-area">
                            <p>Không tìm thấy trang</p>
                            <span>Trang này không tồn tại hoặc có thể đã thay đổi đường dẫn</span>
                            <p style ={{fontSize:"100px", color:"#14d0ff"}}>404</p>
                            <a className="mu-post-btn" href="/">Quay về trang chủ</a>
                        </div>
                    </div>
                </div>
        </section>
        );
    }
}

export default ErrorPage;