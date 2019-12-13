import React, { Component } from 'react';
import All from "../../components/All/All"
import SearchInput from "../../components/SearchInput/SearchInput"
import Publish from "../../components/Publish/Publish"
import Place from "../../components/Place/Place"
import Banner from "../../components/Banner/Banner"
import Grid from "../../views/Grid/Grid"
import "./Index.css"


export default class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="Header">
                    <div className="hLeft"><All /></div>
                    <div className="hMid"><h2>龙山家园</h2></div>
                    <div className="hRight"><Place /></div>
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
                        <div className="IWLeft">
                            <span className="iconfont icon-tianqi"></span>
                        </div>
                        <div className="IWMain">
                            <p className="f222">多云/小雨  27/30C</p>
                            <p className="f222">3-4级/4-5级风</p>
                        </div>
                        <div className="IWRight">
                            <p className="f222">星期一</p>
                            <p className="f222">18:00</p>
                        </div>
                    </div>
                </div>
                <div className="InList">
                    <Grid/>
                </div>

            </div>
        )
    }
}