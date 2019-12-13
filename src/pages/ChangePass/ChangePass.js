import React, { Component } from 'react';
import Back from "../../components/Back/Back"
import { Toast } from 'antd-mobile';
export default class App extends Component {
    state = {
        user: {
            name: "",
            oldpass: "",
            newpass: ""
        },
        confirm: ""
    }
    componentDidMount() {
        this.$axios({
            url: "/findUser",
            method: "post",
            data: {
                name: "tom"
            }
        }).then(res => {
            if (res.data.isok) {
                Toast.success('查询成功', 1);
                var tempuser={
                    name: "",
                    oldpass: "",
                    newpass: ""
                }
                var users=res.data.data[0];
                tempuser.name=users.name;
                tempuser.oldpass=users.pass;
                console.log(tempuser);
                
                this.setState({
                    user:tempuser
                })
                // this.props.history.push('/login')
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    componentWillUnmount(){
        return false;
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
    changepass() {
        if (this.state.confirm !== this.state.user.newpass) {
            Toast.fail("两次密码输入不一致", 1);
            return
        }
        console.log(this.state.user, this.state.confirm);
        this.$axios({
            url: "/changePassUser",
            method: "post",
            data: this.state.user
        }).then(res => {
            if (res.data.isok) {
                Toast.success('修改成功', 1);
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
                    <div className="hLeft"><Back /></div>
                    <div className="hMid"><h2>修改密码</h2></div>
                    <div className="hRight"></div>
                </div>
                <div className="Lmain">
                    <div className="iItem">
                        <span className="iconfont icon-user_name"></span>
                        <input type="text" value={this.state.user.name}
                            className="input1" placeholder="请输入用户名" disabled />
                    </div>
                    <div className="iItem">
                        <span className="iconfont icon-wodemima"></span>
                        <input type="password" value={this.state.user.oldpass}
                            className="input3" placeholder="旧密码" disabled />
                    </div>
                    <div className="iItem">
                        <span className="iconfont icon-wodemima"></span>
                        <input type="password" value={this.state.user.newpass}
                            onChange={(e) => this.ChangeUser(e, "newpass")}
                            className="input3" placeholder="请输入新密码" />
                    </div>
                    <div className="iItem">
                        <span className="iconfont icon-querenmima"></span>
                        <input type="password" value={this.state.confirm}
                            onChange={(e) => this.ChangeP(e)}
                            className="input2" placeholder="请确认新密码" />
                    </div>
                    <div className="btndiv">
                        <button className="btn-login" onTouchEnd={() => this.changepass()}>修改密码</button>
                    </div>
                </div>
            </div >
        )
    }
}