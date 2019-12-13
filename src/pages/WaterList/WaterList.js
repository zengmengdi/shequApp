import React, { Component } from 'react';
import {Toast } from 'antd-mobile';
import Back from "../../components/Back/Back"
import Item from "../../components/WaterItem/WaterItem"
export default class App extends Component {
    state = {
        waterlist:[]
    }
    componentDidMount() {
        this.$axios({
            url: "/findWater",
        }).then(res => {
            if (res.data.isok) {
                this.setState({
                    waterlist: res.data.data,
                });
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"><Back /></div>
                    <div className="hMid"><h2>送水到家</h2></div>
                    <div className="hRight">
                        <span className="iconfont icon-user_name1"></span>
                    </div>
                </div>
                <div className="homenav">
                    <select>
                        <option value="籍贯">水站</option>
                    </select>
                    <select>
                        <option value="工资">区域</option>
                    </select>
                    <select>
                        <option value="年龄段">智能排序</option>
                    </select>
                </div>
                <div className="watermain">
                    {this.state.waterlist.map(item=>{
                        return <Item key={item.id} item={item}/>
                    })}
                </div>
            </div>
        )
    }
}