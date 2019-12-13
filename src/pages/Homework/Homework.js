import React, { Component } from 'react';
import Back from "../../components/Back/Back"
import SearchInput from "../../components/SearchInput/SearchInput"
import Publish from "../../components/Publish/Publish"
import Banner from "../../components/BannerHome/Banner"
import Grid from "../../views/HomeworkGrid/Grid"
import "./Homework.css"
export default class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"><Back /></div>
                    <div className="hMid"><h2>找家政</h2></div>
                    <div className="hRight">
                        <span className="iconfont icon-user_name1"></span>
                    </div>
                </div>
                <div className="InMain">
                    <div className="InSearch">
                        <div className="SLeft"><SearchInput /></div>
                        <div className="SRight"><Publish /></div>
                    </div>
                    <div className="InBanner">
                        <Banner />
                    </div>
                </div>
                <div className="HomeList">
                    <Grid />
                </div>
               
            </div>
        )
    }
}