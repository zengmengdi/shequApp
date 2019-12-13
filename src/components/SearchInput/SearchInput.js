import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
export default class App extends Component {
    state = {}
    render() {
        return (
            <SearchBar placeholder="Search" style={{ fontSize: "0.3rem" }} maxLength={8} />
            // <input type="text" className="searchinput"/>

        )
    }
}