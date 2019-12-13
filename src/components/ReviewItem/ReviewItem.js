import React, { Component } from 'react';
import "./ReviewItem.css"
export default class App extends Component {
    state = {}
    findTime(obj) {
        var date = new Date(Number(obj));
        var hour = (date.getHours() + "").padStart(2, '0');
        var minute = (date.getMinutes() + "").padStart(2, '0');
        return hour + ":" + minute
    }
    render() {
        let { item } = this.props
        return (
            <div className="ReviewItem">
                <div className="ReLeft">
                    <img src={item.ava} alt={item.ava}/>
                </div>
                <div className="ReRight">
                    <div className="ReRtop">
                        <div className="f20 revname">{item.name}</div>
                        <span className="revtime f222">{this.findTime(item.time)}</span>
                    </div>
                    <p className="f222 revp">{item.content}</p>
                    <hr />
                </div>
            </div>
        )
    }
}