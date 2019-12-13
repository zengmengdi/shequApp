import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import Back from "../../components/Back/Back"
import WDfirst from "../../views/WaterDpart/RDfirst"
import WDthird from "../../views/WaterDpart/RDthird"
import WDforth from "../../views/WaterDpart/WDforth"
import WDbtn from "../../views/WDbtn/HDbtn"
export default class App extends Component {
    state = {
        repairdetail: {},
        waterid: "",
        reviewlist: []
    }
    componentDidMount() {
        var id = this.props.match.params.id;
        console.log(id);
        this.$axios({
            url: "/findRepair",
            method: "get",
            params: {
                id
            }
        }).then(res => {
            if (res.data.isok) {
                this.setState({
                    repairdetail: res.data.data[0],
                });
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
        this.initrepaircomment()
    }
    initrepaircomment(){
        var id = this.props.match.params.id;
        this.$axios({
            url: "/findRepairComment",
            method: "get",
            params: {
                repairId: id
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
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"><Back /></div>
                    <div className="hMid"><h2>{this.state.repairdetail.name}</h2></div>
                    <div className="hRight">
                        <span className="iconfont icon-user_name1"></span>
                    </div>
                </div>
                <div className="WDfirst">
                    <WDfirst item={this.state.repairdetail} />
                </div>
                <div className="WDthird">
                    <WDthird item={this.state.repairdetail} />
                </div>
                <div className="WDforth">
                    <WDforth reviewlist={this.state.reviewlist}  
                    waterid={this.props.match.params.id}
                    initcommont={()=>this.initrepaircomment()} apiurl="/addRepairComment"/>
                </div>
                <div className="hdbtnfix">
                    <WDbtn/>
                </div>

            </div>
        )
    }
}