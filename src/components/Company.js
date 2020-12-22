import React, { Component } from 'react';
import SubCompany from './SubCompany'

class Company extends Component {
  render(){
    let name = this.props.name
    let revenue = this.props.revenue
    return (
      <div>
        <SubCompany name = {name} revenue = {revenue}/>
      </div>
    )
  }
}

export default Company