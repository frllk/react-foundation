/**
 * 组件通信
 */
import React, { Component } from 'react'

// 子组件
const Fnc = (props) => {
  console.log('函数子组件接收传递数据', props)
  return (
    <div>
      <h2>函数子组件</h2>
      <p>{props.a}</p>
    </div>
  )
}

class Child extends Component {
  render () {
    console.log('类组件接收传递数据', this.props)
    return (
      <div>
        <h2>类子组件</h2>
        <p>{this.props.b}</p>
      </div>
    )
  }
}

// 父组件
export default class index extends Component {
  state = {
    a: 1,
    b: [1, 2, 3, 4, 5]
  }
  render () {
    return (
      <div>
        <h1>组件通信</h1>
        <hr />
        <Fnc a={this.state.a} />
        <hr />
        <Child b={this.state.b} />
      </div>
    )
  }
}
