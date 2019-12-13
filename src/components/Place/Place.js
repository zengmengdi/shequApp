import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class App extends Component {
    state = {}
    showall() {
        console.log("111");

    }
    render() {
        return (
            <span className="iconfont icon-distance1 f222" onTouchEnd={() => this.showall()}></span>
        )
    }
}
export default withRouter(App)