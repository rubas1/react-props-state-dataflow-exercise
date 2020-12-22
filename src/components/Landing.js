import React, { Component } from 'react';

class Landing extends Component {

    render() {
        let hot=this.props.store.filter(t => t.hottest===true)
        return (<div>
            <p>Welcome, {this.props.user}, The hottest item is {hot.item} for {hot.price}</p>
        </div>)
    }
}

export default Landing