import React, { Component } from 'react';

class Article extends Component {
  render() {

    return (<div>
      <p>{this.props.info.color} {this.props.info.type}</p>
    </div>)
  }
}

export default Article