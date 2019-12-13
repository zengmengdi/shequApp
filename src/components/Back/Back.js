import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class App extends Component {
    state = {}
    back(){
        this.props.history.go(-1)
    }
    render() {
        return (
            <span className="iconfont icon-back f222" onTouchEnd={this.back.bind(this)}></span>
        )
    }
}
export default withRouter(App)