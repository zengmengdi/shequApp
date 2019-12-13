import { Grid } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import React, { Component } from 'react';
import baomu from "../../assets/img/baomu.png"
import yuesao from "../../assets/img/yuesao.png"
import more from "../../assets/img/more.png"
import clean from "../../assets/img/clean.png"
import clock from "../../assets/img/clock.png"
import baoyang from "../../assets/img/baoyang.png"
import kaihuang from "../../assets/img/kaihuang.png"
import saoba from "../../assets/img/saoba.png"

class App extends Component {

    state = {
        navlist: [
            {
                id: "1",
                img: clock,
                color: "#30adef",
                title: "钟点工"
            },
            {
                id: "2",
                color: "#696fdf",
                img: baomu,
                title: "保姆"
            },
            {
                id: "3",
                color: "#54c537",
                img: yuesao,
                title: "月嫂"
            },
            {
                id: "4",
                color: "#fdc23f",
                img: saoba,
                title: "专业保洁"
            },
            {
                id: "5",
                color: "#5b79b8",
                img: clean,
                title: "家电清洗"
            },
            {
                id: "6",
                color: "#fea401",
                img: baoyang,
                title: "家居保养"
            },
            {
                id: "7",
                color: "#9c84f0",
                img: kaihuang,
                title: "新居开荒"
            },
            {
                id: "8",
                color: "#f06687",
                img: more,
                title: "更多"
            }

        ]
    }
    data = this.state.navlist.map((item) => ({
        icon: item.img,
        text: item.title,
        id: item.id,
        color: item.color
    }));
    tiaozhuan(id) {
        console.log(id);
        switch (id) {
            case "1":
                this.props.history.push('/homework-list/钟点工');
                break;
            case "2":
                this.props.history.push('/homework-list/保姆');
                break;
            case "3":
                this.props.history.push('/homework-list/月嫂');
                break;
            case "4":
                this.props.history.push('/homework-list/专业保洁');
                break;
            case "5":
                this.props.history.push('/homework-list/家电清洗');
                break;
            case "6":
                this.props.history.push('/homework-list/家居保养');
                break;
            case "7":
                this.props.history.push('/homework-list/新居开荒');
                break;
            case "8":
                this.props.history.push('/homework-list/更多');
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
                    columnNum={4}
                    renderItem={dataItem => (
                        <div style={{ padding: '0.1rem' }} onTouchEnd={() => this.tiaozhuan(dataItem.id)}>
                            <div className="gridItem" style={{ backgroundColor: dataItem.color }}>
                                <img src={dataItem.icon} style={{ width: '0.6rem', height: '0.6rem' }} alt="" />
                            </div>
                            <div style={{ color: '#888', marginTop: '12px' }}>
                                <span style={{fontSize:'0.35rem'}}>{dataItem.text}</span>
                            </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}
export default withRouter(App)