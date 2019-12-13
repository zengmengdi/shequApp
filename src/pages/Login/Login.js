import React, { Component } from 'react';
import { Link } from "react-router-dom"
import "./Login.css"
import { Toast} from 'antd-mobile';
import store from "../../store"
import QQ from "../../assets/img/QQ.png"
import Weibo from "../../assets/img/weibo.png"
import Weixin from "../../assets/img/weixin.png"
export default class App extends Component {
    state = {
        user: {
            name: "",
            pass: "",
            type: "2"
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
    ChangeUser(e, props, index) {
        var user = this.state.user;
        switch (props) {
            case "isAgree":
                user[props] = e.target.checked
                break;
            case "hobby":
                //通过修改aihao数组的isChecked,来通过filter获取当前选中的项，再通过map获取到value存入hobby中
                this.aihao[index].isChecked = !this.aihao[index].isChecked
                var arr = this.aihao.filter(item => item.isChecked)
                user[props] = arr.map(item => { return item.value })
                break;
            default:
                user[props] = e.target.value
                break;
        }
        this.setState({
            user
        })
    }
    login() {
        console.log(this.state.user);
        this.$axios({
            url: "/login",
            method: "post",
            data: this.$qs.stringify(this.state.user)
        }).then(res => {
            if (res.data.isok) {
                Toast.success('登录成功', 1);
                store.dispatch({
                    type:"storename",
                    payload:this.state.user.name
                })
                localStorage.setItem('name',this.state.user.name);                
                this.props.history.push('/index')
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"></div>
                    <div className="hMid"><h2>登录</h2></div>
                    <div className="hRight"></div>
                </div>
                <div className="Lmain">
                    <div className="iItem">
                        <span className="iconfont icon-user_name"></span>
                        <input type="text" value={this.state.user.name}
                            onChange={(e) => this.ChangeUser(e, "name")}
                            className="input1" placeholder="请输入用户名" />
                    </div>
                    <div className="iItem">
                        <span className="iconfont icon-wodemima"></span>
                        <input type="password" value={this.state.user.pass}
                            onChange={(e) => this.ChangeUser(e, "pass")}
                            className="input2" placeholder="请输入密码" />
                    </div>
                    <div className="btndiv">
                        <button className="btn-login" onTouchEnd={() => this.login()}>登录</button>
                    </div>
                </div>
                <div className="lFooter">
                    <div>
                        <Link to="/register" className="areg">注册</Link>
                    </div>
                    <div className="Ftext">
                        <span className="spantxt">或者</span>
                        <p>社交账号登录</p>
                        <div className="Lchoose">
                            <div>
                                <img src={QQ} alt=""/>
                            </div>
                            <div>
                                <img src={Weibo} alt=""/>
                            </div>
                            <div>
                                <img src={Weixin} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}