import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import Back from "../../components/Back/Back"
import HDtop from "../../views/HDtop/HDtop"
import HDmain from "../../views/HDmain/HDmain"
import HDreview from "../../views/HDreview/HDreview"
import HDbtn from "../../views/HDbtn/HDbtn"
export default class App extends Component {
    state = {
        item: {}
    }
    changearr(obj) {
        var str = String(obj);
        if (str.includes('[')) {
            var arr = JSON.parse(str);
            str = arr.join()
        }
        return str
    }
    componentDidMount() {
        this.$axios({
            url: "/findHomeWorker",
            method: "get",
            params: {
                id: this.props.match.params.id
            }
        }).then(res => {
            if (res.data.isok) {
                var item=res.data.data[0]
                item.type=this.changearr(item.type)
                item.qualification=this.changearr(item.qualification)
                this.setState({
                    item
                });
                console.log(this.state.item);

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
                    <div className="hMid"><h2>{this.state.item.name}</h2></div>
                    <div className="hRight">
                        <span className="iconfont icon-user_name1"></span>
                    </div>
                </div>
                <div className="HDtop">
                    <HDtop item={this.state.item} />
                </div>
                <div className="HDmain">
                    <HDmain item={this.state.item} />
                </div>
                <div className="HDreview">
                    <HDreview />
                </div>
                <div className="hdbtnfix">
                    <HDbtn />
                </div>
            </div>
        )
    }
}