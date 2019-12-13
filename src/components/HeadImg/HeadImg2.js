import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import * as qiniu from 'qiniu-js'
export default class App extends Component {
    state = {
        headimg: {
            name: localStorage.getItem('name'),
            img: ""
        },
        oldimg: ""
    }
    upload(e) {
        console.log("上传");
        console.log(e.target.files);
        var file = e.target.files[0];
        if (file.size > 2 * 1024 * 1024) {
            Toast.fail('文件大小超过限制', 1);
            return;
        }
        var extname = file.name.slice(file.name.lastIndexOf('.'))
        if (extname !== '.jpg' && extname !== '.png') {
            Toast.fail('文件格式不对', 1);
            return;
        }
        var name = new Date().getTime() + extname;
        this.$axios({
            url: '/getToken',
        }).then(res => {
            var token = res.data.token;
            var url = res.data.url + '/'
            qiniu.upload(file, name, token).subscribe(d => {
                console.log("====upload qiniu====");
                console.log(d);
                if (d.total.percent === 100) {
                    this.state.headimg.img = url + name;
                    console.log('==============='+this.state.headimg.img);   
                }
            })
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
                    oldimg: this.state.headimg.img
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
                this.setState({
                    oldimg: res.data.data[0].img
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
                        <input type="file" className="headfile" placeholder="请选择文件换头像" onChange={(e) => this.upload(e)} />
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