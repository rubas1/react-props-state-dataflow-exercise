import React, { Component } from 'react';


class SubCompany extends Component {
  render() {
    let name = this.props.name
    let revenue = this.props.revenue
    return (<div>
      <h4>{name} {revenue}</h4>
    </div>)
  }
}

export default SubCompany