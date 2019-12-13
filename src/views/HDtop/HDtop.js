import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
//css在HomeItem中
class App extends Component {
    state = {}
    render() {
        let { item } = this.props;
        return (
            <div className="HomeItem2">
                <div className="HILeft">
                    <img src={item.img} alt="" />
                </div>
                <div className="HTRight">
                    <div className="HRtop HRtop2">
                        <b className="name2">{item.name}</b>
                        <span className="rank">{item.vNum}</span>
                        <span className="price"><i className="pcol">￥{item.price} </i>元/小时</span>
                    </div>
                    <p className="HRP">
                        <span className="sspan">{item.city}</span>|
                        <span className="sspan">{item.age}</span>|
                        <span className="sspan">{item.edu}</span>|
                        <span className="sspan">{item.experience}经验</span>
                    </p>
                    <div className="HRSee">
                        <button className="HDTbut f222" style={{ backgroundColor: "#86d855" }}>关注</button>
                        <button className="HDTbut f222" style={{ backgroundColor: "#75bcff" }}>向她提问</button>
                    </div>
                    <hr />
                    <div className="HRFot2">
                        <div className="HRFL">
                            <span className="iconfont icon-eyes f222"></span><span className="hst f222">关注{item.readNum}</span>
                            <span className="iconfont icon-heart f222"></span><span className="hst f222">好评{item.likeNum}</span>
                        </div>
                        <div className="HRFR">
                            <span className="iconfont icon-distance1 f222"></span>
                            <span className="HRDis f222">距您{item.len}公里</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(App)