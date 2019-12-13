import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Toast } from 'antd-mobile';
// import store from "../../store/index"
import HeadImg from "../../components/HeadImg/HeadImg2"
import "./All.css"
class App extends Component {
    state = {
        isopen: false,
        navlist: [
            {
                id: "1",
                icon: "icon-gaozhong",
                name: "找家教"
            },
            {
                id: "2",
                icon: "icon-shui",
                name: "送水到家"
            },
            {
                id: "3",
                icon: "icon-weixiu",
                name: "维修服务"
            }, {
                id: "4",
                icon: "icon-baomu",
                name: "家政服务"
            }
            , {
                id: "5",
                icon: "icon-shequ",
                name: "社区互动"
            },
            {
                id: "6",
                icon: "icon-xiaoxi",
                name: "消息中心"
            }, {
                id: "7",
                icon: "icon-collect",
                name: "我的收藏"
            }, {
                id: "8",
                icon: "icon-fabu",
                name: "我的发布"
            },
            {
                id: "9",
                icon: "icon-zhanghao",
                name: "账号设置"
            },
            {
                id: "10",
                icon: "icon-tuichu",
                name: "退出登录"
            }

        ]
    }
    showall() {
        // console.log("111");
        this.refs.mask.style.left = 0;
    }
    hideall(e) {
        this.refs.mask.style.left = "-100vw";
        // console.log('点大');
        e.stopPropagation();
    }
    gosome(e) {
        // console.log('点小');
        e.stopPropagation();
    }
    gorout(e, id) {
        // console.log("点item");
        e.stopPropagation();
        switch (id) {
            case "1":
                this.props.history.push(('/teacher'));
                break;
            case "2":
                this.props.history.push(('/water-list'));
                break;
            case "3":
                this.props.history.push(('/repair-list'));
                break;
            case "4":
                this.props.history.push(('/homework'));
                break;
            case "5":
                this.props.history.push(('/wait'));
                break;
            case "6":
                this.props.history.push(('/wait'));
                break;
            case "7":
                this.props.history.push(('/wait'));
                break;
            case "8":
                this.props.history.push(('/wait'));
                break;
            case "9":
                this.props.history.push(('/changepass'));
                break;
            case "10":
                this.$axios({
                    url:"/exit"
                }).then(res=>{
                    if(res.data.isok){
                        Toast.success(res.data.info, 1);
                        localStorage.removeItem('name')
                        this.props.history.push(('/login'));
                    }else{
                        Toast.fail(res.data.info, 1);
                    }
                })
                
                break;
            default:
                break;

        }

    }
    componentWillReceiveProps() {
        this.setState({})
    }
    
    render() {
        return (
            <div>
                <span className="iconfont icon-gengduo1 f222" onTouchEnd={() => this.showall()}></span>
                <div ref="mask" className="mask" onTouchEnd={(e) => this.hideall(e)}>
                    <div className="maskcon" onTouchEnd={(e) => this.gosome(e)}>
                        <div className="Auser">
                            <HeadImg />
                            {/* <span className="f30">{store.getState().username}</span> */}
                            <span>{localStorage.getItem('name')}</span>
                        </div>
                        <div className="Aitem">
                            {this.state.navlist.map(item => {
                                return (
                                    <div className="allitem" key={item.id} onTouchEnd={(e) => this.gorout(e, item.id)}>
                                        <span className={"f222 iconfont " + item.icon}></span>&nbsp;&nbsp;
                                        <span className="f222">{item.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(App)