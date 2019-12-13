import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// import { Button } from 'antd-mobile';
class App extends Component {
    state = {}
    showall() {
        console.log("111");

    }
    render() {
        // return <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>我要发布</Button>
        return <button className="f222 publishbtn">我要发布</button>
    }
}
export default withRouter(App)