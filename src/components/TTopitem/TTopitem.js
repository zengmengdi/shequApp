import React, { Component } from 'react';
import "./ttopitem.css"
export default class App extends Component {
    state = {}
    render() {
        let { item } = this.props
        return (
            <div className="ttopitem">
                <img src={item.img} alt="" />
                <p>
                    <span className="lapsn f222">已报名{item.num}人</span>
                </p>
                <img className="limg" src={item.teacherImg} alt=""/>
            </div>
        )
    }
}