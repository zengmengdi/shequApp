import React, { Component } from 'react';
import "../Login/Login.css";
import Back from "../../components/Back/Back"
import { Toast} from 'antd-mobile';
export default class App extends Component {
    state = {
        user: {
            name: "",
            pass: "",
            tel: ""
        },
        confirm: ""
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
    ChangeP(e) {    
        this.setState({
            confirm: e.target.value
        })
    }
    adduser() {
        if(this.state.confirm!==this.state.user.pass){
            Toast.fail("两次密码输入不一致", 1);
            return
        }
        console.log(this.state.user, this.state.confirm);
        this.$axios({
            url: "/addUser",
            method: "post",
            data: this.state.user
        }).then(res => {
            if (res.data.isok) {
                Toast.success('注册成功', 1);
                this.props.history.push('/login')
            } else {
                Toast.fail(res.data.info, 1);
            }
        })

    }
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"><Back/></div>
                    <div className="hMid"><h2>注册</h2></div>
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
                        <span className="iconfont icon-huaban"></span>
                        <input type="text" value={this.state.user.tel}
                            onChange={(e) => this.ChangeUser(e, "tel")}
                            className="input" placeholder="请输入电话" />
                    </div>
                    <div className="iItem">
                        <span className="iconfont icon-wodemima"></span>
                        <input type="password" value={this.state.user.pass}
                            onChange={(e) => this.ChangeUser(e, "pass")}
                            className="input3" placeholder="请输入密码" />
                    </div>
                    <div className="iItem">
                        <span className="iconfont icon-querenmima"></span>
                        <input type="password" value={this.state.confirm}
                            onChange={(e) => this.ChangeP(e)}
                            className="input2" placeholder="请确认密码" />
                    </div>
                    <div className="btndiv">
                        <button className="btn-login" onTouchEnd={() => this.adduser()}>注册</button>
                    </div>
                </div>
            </div >
        )
    }
}