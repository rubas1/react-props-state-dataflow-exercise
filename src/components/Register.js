import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
     <h3>You cannot reserve during these times:</h3>
     <p> {this.props.reservations.map(r => <p>{r.day} @ {r.time}</p>)}</p>
    </div>)
  }
}

export default Register