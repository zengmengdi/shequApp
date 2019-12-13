import React, { Component } from 'react';
import "./WaterItem.css"
import {withRouter} from "react-router-dom"
import Score from "../../components/Score/Score"
class App extends Component {
    state = {}
    goDetail(id){
        this.props.history.push('/water-detail/'+id)
    }
    render() {
        let { item } = this.props
        return (
            <div className="wateritem" onTouchEnd={()=>this.goDetail(item.id)}>
                <div className="wiLeft">
                    <img src={item.img} alt="" />
                </div>
                <div className="wiMid">
                    <div className="wimm">
                        <h3 className="f22 wimtitle">{item.name}</h3>
                        <div className="pinfen">
                            <Score num={item.score} />
                        </div>
                    </div>
                    <p className="f16 wip">{item.des}</p>
                    <div>
                        <span className="iconfont icon-distance1"></span>
                        <span className="f16">{item.address}</span>
                    </div>
                </div>
                <div className="wiRight">
                    <div className="wirtop">
                        <span className="iconfont icon-dianhua idh"></span>
                    </div>
                    <div className="wirbot">
                        <span className="f20">{item.len}</span>
                    </div>
                </div>

            </div>
        )
    }
}
export default withRouter(App)