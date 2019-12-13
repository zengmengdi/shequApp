import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Toast } from 'antd-mobile';
import './index.css';
import qs from 'qs'
import "./assets/js/rem.js";
import "./assets/css/iconfont.css";
import "./assets/css/pub.css";
import 'antd-mobile/dist/antd-mobile.css';
import axios from "axios"
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from "react-router-dom"
// import $ from 'jquery'
Component.prototype.$axios = axios;
Component.prototype.$qs = qs
if (!localStorage.getItem('name') && window.location.href !== "'http://192.168.254.128:3001/#/login") {
    Toast.fail('您还未登录', 1)
    window.open('http://192.168.254.128:3001/#/login', "_self")
}
// 跳转页面：start
axios.interceptors.request.use(function (config) {
    // $(".loading").stop(true,true).fadeIn(400)
    Toast.loading('Loading...', 1, null, true);
    return config
})
axios.interceptors.response.use(response => {
    // $(".loading").stop(true,true).hide()
    // setTimeout(()=>{
    //     Toast.hide()
    // },1000)
    Toast.hide()
    if (response.data.code === -1) {
        window.open('http://192.168.254.128:3001/#/login', "_self")
        return {
            data: {
                isok: false,
                data: [],
                info: ""
            }
        }
    }

    if (response.data.isok) {
        console.log("--------请求的数据回来了" + response.config.url + "--------");
        console.log(response);
        console.log("----------over---------");
        return response;
    }

    return response;
})

// 跳转页面：end

// axios.interceptors.response.use(response => {
//     console.log("--------请求的数据回来了" + response.config.url + "--------");
//     console.log(response);
//     console.log("----------over---------");
//     if (response.data.code === -1) {
//         window.open('http://localhost:3001/#/login', "_self")
//     }
//     return response;
// })


ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
