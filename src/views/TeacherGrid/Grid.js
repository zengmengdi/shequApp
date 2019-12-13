import { Grid } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import React, { Component } from 'react';
import xiaoxue from "../../assets/img/xiaoxue.png"
import chuzhong from "../../assets/img/chuzhong.png"
import gaozhong from "../../assets/img/gaozhong.png"
import xinqu from "../../assets/img/xingqu.png"
class App extends Component {
    state = {
        navlist: [
            {
                id: "1",
                color:"#0ad927",
                img: xiaoxue,
                title: "小学"
            },
            {
                id: "2",
                color:"#f8991b",
                img: chuzhong,
                title: "初中"
            },
            {
                id: "3",
                color:"#128deb",
                img: gaozhong,
                title: "高中"
            },
            {
                id: "4",
                color:"#f06687",
                img: xinqu,
                title: "兴趣"
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
                this.props.history.push('/repair');
                break;
            case "4":
                this.props.history.push('/homework');
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