import { Grid } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import React, { Component } from 'react';
import "./Grid.css"
import repair from "../../assets/img/repair.png"
import water from "../../assets/img/water.png"
import more from "../../assets/img/more.png"
import shequ from "../../assets/img/shequ.png"
import saoba from "../../assets/img/saoba.png"
import jiajiao from "../../assets/img/jiajiao.png"
class App extends Component {
    state = {
        navlist: [
            {
                id: "1",
                img: jiajiao,
                title: "找家教",
                color:"#fd904c"
            },
            {
                id: "2",
                img: water,
                title: "送水到家",
                color:"#89d439"
            },
            {
                id: "3",
                img: repair,
                title: "维修服务",
                color:"#00a6ec"
            },
            {
                id: "4",
                img: saoba,
                title: "家政",
                color:"#4fd3be"
            },
            {
                id: "5",
                img: shequ,
                title: "社区互动",
                color:"#f2c40c"
            },
            {
                id: "6",
                img: more,
                title: "更多服务",
                color:"#f96563"
            }

        ]
    }
    data = this.state.navlist.map((item) => ({
        icon: item.img,
        text: item.title,
        id: item.id,
        color:item.color

    }));
    tiaozhuan(id) {
        console.log(id);
        switch (id) {
            case "1":
                this.props.history.push('/teacher');
                break;
            case "2":
                this.props.history.push('/water-list');
                break;
            case "3":
                this.props.history.push('/repair-list');
                break;
            case "4":
                this.props.history.push('/homework');
                break;
            case "5":
                this.props.history.push('/wait');
                break;
            case "6":
                this.props.history.push('/wait');
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div>
                {/* <Grid data={this.data} columnNum={3} /> */}
                <Grid data={this.data}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }} onTouchEnd={() => this.tiaozhuan(dataItem.id)}>
                            <div className="gridItem" style={{ backgroundColor: dataItem.color }}>
                                <img src={dataItem.icon} style={{ width: '0.5rem', height: '0.6rem' }} alt="" />
                            </div>
                            <div style={{ color: '#888', fontSize: '18px', marginTop: '12px' }}>
                                <span style={{fontSize:"0.35rem"}}>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}
export default withRouter(App)