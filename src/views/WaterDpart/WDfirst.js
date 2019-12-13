import React, { Component } from 'react';
import "./Water.css"
import Score from "../../components/Score/Score"
export default class App extends Component {
    state = {}
    render() {
        let { item } = this.props;
        return (
            <div className="Wdfirst">
                <div className="wfleft">
                    <img src={item.img} alt=''/>
                </div>
                <div className="wfright">
                    <h3 className="f30">{item.name}</h3>
                    <div className='flex tongscore'>
                        <Score num={item.score} />
                        <span className="f20 tong">月售{item.count}桶</span>
                    </div>
                    <div className="f20">￥{item.price}</div>
                    <p style={{paddingRight:"0.2rem"}}>
                        <span className="f20 iconfont icon-dianzan"></span>
                        <span className="f20">{item.likeNum}</span>&nbsp;&nbsp;
                        <span className="f20">浏览数:</span>
                        <span className="f20">{item.readNum}</span>
                    </p>
                </div>
            </div>
        )
    }
}