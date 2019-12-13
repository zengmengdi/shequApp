import React, { Component } from 'react';
export default class App extends Component {
    state = {}
    render() {
        return (
            <div className="HDbtn">
                <button className="btn-share f20">
                    分享
                </button>
                <button className="btn-ask f20">
                    与我联系
                </button>
            </div>
        )
    }
}