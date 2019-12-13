import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import "./vtoplist.css"
import Item from "../../components/TTopitem/TTopitem"
export default class App extends Component {

    constructor() {
        super()
        this.state = {
            teacherlist: []
        }
    }
    componentDidMount() {
        this.$axios({
            url: "/teacherTop"
        }).then(res => {
            if (res.data.isok) {
                // Toast.success('获取家教排行榜成功', 1);
                this.setState({
                    teacherlist: res.data.data,
                });
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    render() {
        return (
            <div className="vtoplist">
                {this.state.teacherlist.map(item=>{
                    return  <Item key={item.id} item={item}/>
                })}
               
            </div>
        )
    }
}