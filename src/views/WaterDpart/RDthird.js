import React, { Component } from 'react';
export default class App extends Component {
    state = {}
    render() {
        let { item } = this.props;
        return (
            <div className="wdthir">
                <h3 className='f30 wdttitle'>商家信息</h3>
                <hr />
                <div className="wdtcon f222">
                    {item.type}
                </div>
            </div>
        )
    }
}