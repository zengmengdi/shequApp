import React, { Component } from 'react';
import {Toast } from 'antd-mobile';
import Back from "../../components/Back/Back"
import Search from "../../components/Search/Search"
import HomeItem from "../../components/HomeItem/HomeItem"
import "./homeworklist.css"
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            homeworker: []
        }
    }
    componentDidMount() {
        var title = this.props.match.params.type;
        this.setState({
            title
        })
        console.log(this.state.title);
        
        this.$axios({
            url: "/findHomeWorker",
            method:"get",
            params:{
                type:this.props.match.params.type
            }
        }).then(res => {
            if (res.data.isok) {
                this.setState({
                   homeworker: res.data.data,
                });
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
                    <div className="hMid"><h2>{this.state.title}</h2></div>
                    <div className="hRight">
                        <Search />
                    </div>
                </div>
                <div className="homenav">
                    <select>
                        <option value="籍贯">籍贯</option>
                    </select>
                    <select>
                        <option value="工资">工资</option>
                    </select>
                    <select>
                        <option value="年龄段">年龄段</option>
                    </select>
                </div>
                <div className="homeitem">
                    {this.state.homeworker.map(item=>{
                        return <HomeItem key={item.id} item={item}/>
                    })}
                </div>
            </div>
        )
    }
}