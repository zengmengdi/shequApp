import React, { Component } from 'react';
import WriteReview from "../../components/Writereview/Writeview"
import Item from "../../components/ReviewItem/ReviewItem"
export default class App extends Component {
    state = {
        reviewlist: []
    }
    componentWillReceiveProps(){
        this.setState({})
    }
    render() {
        let { reviewlist ,waterid} = this.props
        return (
            <div className="wdfort">
                <div className="flex">
                    <h3 className='f30 wdttitle wdfortfff'>他们都在说</h3>
                    <WriteReview initcommont={()=>this.props.initcommont()} waterid={waterid} apiurl={this.props.apiurl}/>
                </div>
                <hr />
                <div>
                    {reviewlist.map(item => {
                        return <Item key={item.id} item={item}/>
                    })}
                </div>
            </div>
        )
    }
}