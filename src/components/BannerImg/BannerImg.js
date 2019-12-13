import React, { Component } from 'react';
export default class App extends Component {
    state = {}
    render() {
        let {item} =this.props
        return (
            <div>
                <img
                    src={item.img}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top', height: '3rem' }}
                />
            </div>
        )
    }
}