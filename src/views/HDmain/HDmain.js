import React, { Component } from 'react';
import "./HDmain.css"
export default class App extends Component {
    state = {}
    render() {
        let { item } = this.props;
        return (
            <div>
                <h3 className="hdmh3">简介</h3>
                <hr />
                <div className="hditem">
                    <b className="f16">资格认证</b>
                    <div className="f16">{item.qualification}</div>
                </div>
                <div className="hditem">
                    <b className="f16">服务项目</b>
                    <div className="f16">{item.type}</div>
                </div>
                <div className="hditem">
                    <b className="f16">自我评价</b>
                    <div className="f16">{item.info}</div>
                </div>
                <p className="hdmhp f16">曾辉毕业于河北师范大学，资深的数学高级教师，毕业于师范大学，曾经带过两届高三班，讲课细致耐心学生都很喜欢他的课....</p>
            </div>
        )
    }
}