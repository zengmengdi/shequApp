import React, { Component } from 'react';
import "./HDreview.css"
// import Item from "../../components/ReviewItem/ReviewItem"
export default class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <h3 className="hdmh3">雇主评价</h3>
                <hr />
                <div className="ReviewItem">
                    <div className="ReLeft">
                        <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=155881478,1626597966&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div className="ReRight">
                        <div className="ReRtop">
                            <div className="f20 revname">哇哇哇</div>
                            <span className="revtime f16">1小时前</span>
                        </div>
                        <p className="f16 revp">这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                        <hr />
                    </div>
                </div>
                <div className="ReviewItem">
                    <div className="ReLeft">
                        <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=155881478,1626597966&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div className="ReRight">
                        <div className="ReRtop">
                            <div className="f20 revname">哇哇哇</div>
                            <span className="revtime f16">1小时前</span>
                        </div>
                        <p className="f16 revp">这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                        <hr />
                    </div>
                </div>
                <div className="ReviewItem">
                    <div className="ReLeft">
                        <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=155881478,1626597966&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div className="ReRight">
                        <div className="ReRtop">
                            <div className="f20 revname">哇哇哇</div>
                            <span className="revtime f16">1小时前</span>
                        </div>
                        <p className="f16 revp">这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                        <hr />
                    </div>
                </div>
                <div className="ReviewItem">
                    <div className="ReLeft">
                        <img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=155881478,1626597966&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div className="ReRight">
                        <div className="ReRtop">
                            <div className="f20 revname">哇哇哇</div>
                            <span className="revtime f16">1小时前</span>
                        </div>
                        <p className="f16 revp">这家水店服务特别好，送水速度快，水喝着也不错，而且还经济实惠。。。</p>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}