import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
export default class App extends Component {
    state = {
        headimg: {
            name: localStorage.getItem('name'),
            img: ""
        },
        oldimg:""
    }
    changeInput(e) {
        var headimg = this.state.headimg;
        headimg.img = e.target.value;
        this.setState({
            headimg
        })
    }
    changeImg(e) {
        e.stopPropagation();
        console.log('换头像');
        this.refs.mask2.style.left = 0
    }
    hidmak(e) {
        e.stopPropagation();
        this.refs.mask2.style.left = "-100vw"
    }
    con2(e) {
        // console.log("点到了");
        e.stopPropagation();
    }
    cancel(e) {
        e.stopPropagation();
        this.refs.mask2.style.left = "-100vw"
    }
    submitHead(e) {
        e.stopPropagation();
        this.$axios({
            url: "/updateUser",
            method: "post",
            data: this.state.headimg
        }).then(res => {
            if (res.data.isok) {
                Toast.success('换头像成功', 1);
                this.setState({
                    oldimg:this.state.headimg.img
                })
                this.refs.mask2.style.left = "-100vw"
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    componentDidMount() {
        this.$axios({
            url: "/findUser",
            method: "post",
            data: {
                name: localStorage.getItem('name')
            }
        }).then(res => {
            console.log(res);
            
            if (res.data.isok) {
                // Toast.success('查找头像', 1);
                this.setState({
                    oldimg:res.data.data[0].img
                })
                
                console.log(this.state.headimg.img);
                this.setState({})
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    render() {
        return (
            <div>
                <img onTouchEnd={(e) => this.changeImg(e)} src={this.state.oldimg} alt="" />
                <div ref="mask2" className="mask" onTouchEnd={(e) => this.hidmak(e)}>
                    <div className="con3" onTouchEnd={(e) => this.con2(e)}>
                        <input type="text" className="headinput f20" value={this.state.headimg.img}
                            onChange={(e) => this.changeInput(e)} placeholder='请输入头像地址' />
                        <div className="flex reviewbtn f20">
                            <button className="rbtn1" onTouchEnd={(e) => this.cancel(e)}>返回</button>
                            <button className="rbtn2" onTouchEnd={(e) => this.submitHead(e)}>提交</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}