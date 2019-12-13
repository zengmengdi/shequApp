import React, { Component } from 'react';
import "./Water.css"
import Score from "../../components/Score/Score"
export default class App extends Component {
    state = {}
    render() {
        let { item } = this.props;
        return (
            <div className="Wdfirst2">
                <div className="wdtop">
                    <h3 className='f30 wdttitle wdfortfff'>{item.name}</h3>
                    <div className="wddr"><Score num={item.score} /></div>
                </div>
                <div className="wdmid flex">
                    <div className="flex ">
                        <span className="iconfont icon-distance1 f222 wdslicon"></span>
                        <span className="f222 wdsspan wdmdis">距离您{item.len}km</span>
                    </div>
                    <p className="f222">石家庄</p>
                    <p className="f222">营业时间:8:00-20:00</p>
                    <div className="wdmbtn">
                        <button className="f20 rdbtn1">关注</button>
                        <button className="f20 rdbtn2">向Ta提问</button>
                    </div>
                    <div className="wddright">
                        <span className="f222 iconfont icon-eyes"></span>
                        <span className="f222">{item.likeNum}</span>&nbsp;&nbsp;
                        <span className="f222 iconfont icon-heart"></span>
                        <span className="f222">{item.readNum}</span>
                    </div>
                </div>
                {/* <div className="wfleft">
                    <img src={item.img} />
                </div>
                <div className="wfright">
                    <h3 className="f30">{item.name}</h3>
                    <div className='flex tongscore'>
                        <Score num={item.score} />
                        <span className="f16 tong">月售{item.count}桶</span>
                    </div>
                    <div>￥{item.price}</div>
                    <p>
                        <span className="f20 iconfont icon-dianzan"></span>
                        <span className="f20">{item.likeNum}</span>&nbsp;&nbsp;
                        <span className="f20">浏览数:</span>
                        <span className="f20">{item.readNum}</span>
                    </p>
                </div> */}
            </div>
        )
    }
}