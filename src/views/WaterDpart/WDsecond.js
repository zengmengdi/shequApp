import React, { Component } from 'react';
export default class App extends Component {
    state = {}
    render() {
        let { item } = this.props;
        return (
            <div className="flex wdsec">
                <div className="wdsleft">
                    <span className="iconfont icon-distance1 f222 wdslicon"></span>
                </div>
                <div className="wdsmid">
                    <div className="f222 wdsspan">{item.len}</div>
                    <div className="f222 wdsspan">{item.address}</div>
                </div>
                <div className="wdsright">
                    <span className="iconfont icon-dianhua wdddphone"></span>
                </div>
            </div>
        )
    }
}