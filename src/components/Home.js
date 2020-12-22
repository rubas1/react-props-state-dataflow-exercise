import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        if(this.props.shouldDis){
            this.props.store.forEach(t => (t.price = t.price*(1-t.discount)))
        }
        return(<div>Store:
           {this.props.store.map(t => <Item item={t.item} price={t.price} />)}
            </div>
        )
    }
}

export default Home