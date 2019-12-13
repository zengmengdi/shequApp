import { Carousel, Toast } from 'antd-mobile';
import React, { Component } from 'react';
import BannerImg from "../BannerImg/BannerImg"
export default class App extends Component {
    state = {
        data: [],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        this.$axios({
            url: "/homeBanner"
        }).then(res => {
            if (res.data.isok) {
                // Toast.success('获取banner成功', 1);

                this.setState({
                    data: res.data.data,
                });
            } else {
                Toast.fail(res.data.info, 1);
            }
        })
    }
    render() {
        return (
            <Carousel infinite autoplay>
                {this.state.data.map(val => {
                    return <div key={val.id}>
                        <BannerImg item={val} />
                    </div>
                }
                )}
            </Carousel>
        )
    }
}