import React, { Component } from 'react'
import logo from '../logo.svg'

export default class app extends Component {
  render() {
    return (
      <div>
        <img className='logo' src={logo} alt=""/>
        <p className='title'>第一个react项目</p>
      </div>
    )
  }
}
