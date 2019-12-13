import React, { Component } from 'react';
import Back from "../../components/Back/Back"
export default class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"><Back /></div>
                    <div className="hMid"><h2>页面还未开放，敬请期待</h2></div>
                    <div className="hRight">
                        <span className="iconfont icon-user_name1"></span>
                    </div>
                </div>
                <div></div>
            </div>
        )
    }
}