/**
 * props高级玩法
 * 1.children：如果组件下有子节点（可以是任意值），props对象就会有children属性
 */

import React, { Component } from 'react'

export default class Index extends Component {
  render () {
    return (
      <div>
        <h1>Props高级玩法</h1>
        <hr />
        <Child>123</Child>
        <hr />
        <Fnc>12345</Fnc>
      </div>
    )
  }
}
class Child extends Component {
  render () {
    console.log('类组件children：', this.props.children)
    return (
      <div>
        <h2>类子组件</h2>
      </div>
    )
  }
}
// 函数组件
const Fnc = (props) => {
  console.log('函数组件props', props);
  return (
    <div>
      <h2>函数组件</h2>
    </div>
  )
}