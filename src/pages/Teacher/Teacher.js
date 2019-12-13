import React, { Component } from 'react';
import Back from "../../components/Back/Back"
import SearchInput from "../../components/SearchInput/SearchInput"
import Publish from "../../components/Publish/Publish"
import Banner from "../../components/BannerTeacher/Banner"
import Grid from "../../views/TeacherGrid/Grid"
import TopTeacherList from "../../views/TopList/TopList"
import "./Teacher.css"

export default class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"><Back /></div>
                    <div className="hMid"><h2>找家教</h2></div>
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
                    <div className="InWeather">
                        <div className="IW">
                            <div className="iiLeft">
                                <span className="iconfont icon-distance"></span>
                            </div>
                            <div className="iiRight">
                                <p><b className="f222">周边老师</b></p>
                                <p className="f222">发现身边好老师</p>
                            </div>
                        </div>
                        <div className="IW">
                            <div className="iiLeft">
                                <span className="iconfont icon-xiaoxue"></span>
                            </div>
                            <div className="iiRight">
                                <p><b className="f222">我要提问</b></p>
                                <p className="f222">难题名师帮你解</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="TeaList">
                    <Grid />
                </div>
                <div className="teacherTop">
                    <p className="f222">top排行榜</p>
                    <div className="ttmain">
                        <TopTeacherList />
                    </div>
                </div>
            </div>
        )
    }
}