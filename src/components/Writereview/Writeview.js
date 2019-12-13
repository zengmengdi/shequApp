import React, { Component } from 'react';
import "./Writeview.css"
import { Toast } from 'antd-mobile';
export default class App extends Component {
    state = {
        review: {
            username: localStorage.getItem('name'),
            waterId: "",
            content: "",
            time: "",
        },
        temp: {}
    }
    componentDidMount() {
        this.setState({
            review: {
                ...this.state.review,
                waterId: this.props.waterid,
            }
        })
        // this.state.review.waterId = this.props.waterid;
    }
    changeInput(e) {
        var review = this.state.review;
        review.content = e.target.value;
        this.setState({
            review
        })
    }
    writeRe(e) {

        this.setState({
            review: {
                ...this.state.review,
                content: "",
            },
            temp: {}
        }, () => {
            console.log(this.state.review);

        })
        this.refs.mask2.style.left = 0;
    }
    hidmak(e) {
        e.stopPropagation();
        this.refs.mask2.style.left = "-100vw"
    }
    con2(e) {
        console.log("点到了");
        e.stopPropagation();
    }
    cancel(e) {
        e.stopPropagation();
        this.refs.mask2.style.left = "-100vw"
    }
    subReview(e) {
        e.stopPropagation();
        var date = new Date().getTime();
        this.setState({
            review: {
                ...this.state.review,
                time: date,
            }
        })
        // this.state.review.time = date;
        console.log(this.state.review);
        if (!this.state.review.content) {
            Toast.fail("请输入评论内容", 1);
            return
        }
        if (this.props.apiurl === "/addComment") {
            
            this.state.temp = this.state.review;
        }
        if (this.props.apiurl === "/addRepairComment") {
            this.state.temp.name = this.state.review.username;
            this.state.temp.repairId = this.state.review.waterId;
            this.state.temp.content = this.state.review.content;
            this.state.temp.time = this.state.review.time;
            console.log(this.state.temp);
        }
        this.$axios({
            url: this.props.apiurl,
            method: "get",
            params: this.state.temp
        }).then(res => {

            if (res.data.isok) {
                this.setState({
                    review: {
                        ...this.state.review,
                        content: "",
                    }
                })
                Toast.success("添加评论成功", 1);
                this.props.initcommont()
                this.refs.mask2.style.left = "-100vw"
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    render() {
        return (
            <div className="Writereview" onTouchEnd={(e) => this.writeRe(e)}>
                <span className="iconfont icon-liuyan"></span>
                <span className="f222">写评论</span>
                <div ref="mask2" className="mask" onTouchEnd={(e) => this.hidmak(e)}>
                    <div className="con2" onTouchEnd={(e) => this.con2(e)}>
                        <textarea value={this.state.review.content} onChange={(e) => this.changeInput(e)} className="reviewtext f20" placeholder="请输入评论......"></textarea>
                        <div className="flex reviewbtn f222">
                            <button className="rbtn1" onTouchEnd={(e) => this.cancel(e)}>返回</button>
                            <button className="rbtn2" onTouchEnd={(e) => this.subReview(e)}>提交</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}