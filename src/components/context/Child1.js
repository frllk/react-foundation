
import React, { Component } from 'react'
import Child2 from './Child2'

export default class Child1 extends Component {
  render () {
    return (
      <div>
        <h2>Child1：类子组件</h2>
        <hr />
        <Child2 />
      </div>
    )
  }
}