import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import Back from "../../components/Back/Back"
import WDfirst from "../../views/WaterDpart/WDfirst"
import WDsecond from "../../views/WaterDpart/WDsecond"
import WDthird from "../../views/WaterDpart/WDthird"
import WDforth from "../../views/WaterDpart/WDforth"
import WDbtn from "../../views/WDbtn/HDbtn"
export default class App extends Component {
    state = {
        waterdetail: {},
        waterid: "",
        reviewlist: []
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        console.log(id);
        this.$axios({
            url: "/findWater",
            method: "get",
            params: {
                id
            }
        }).then(res => {
            if (res.data.isok) {
                this.setState({
                    waterdetail: res.data.data[0],
                });
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
        this.initcommont()
    }
    initcommont(){
        var id = this.props.match.params.id;
        this.$axios({
            url: "/findComment",
            method: "get",
            params: {
                waterId: id
            }
        }).then(res => {
            if (res.data.isok) {
                this.setState({
                    reviewlist: res.data.data,
                });
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    componentWillReceiveProps() {
        this.initcommont()
    }
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"><Back /></div>
                    <div className="hMid"><h2>{this.state.waterdetail.name}</h2></div>
                    <div className="hRight">
                        <span className="iconfont icon-user_name1"></span>
                    </div>
                </div>
                <div className="WDfirst">
                    <WDfirst item={this.state.waterdetail} />
                </div>
                <div className="WDsecond">
                    <WDsecond item={this.state.waterdetail} />
                </div>
                <div className="WDthird">
                    <WDthird item={this.state.waterdetail} />
                </div>
                <div className="WDforth">
                    <WDforth reviewlist={this.state.reviewlist} waterid={this.props.match.params.id}
                    initcommont={()=>this.initcommont()} apiurl="/addComment"
                    />
                </div>
                <div className="hdbtnfix">
                    <WDbtn />
                </div>

            </div>
        )
    }
}