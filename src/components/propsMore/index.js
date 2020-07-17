/**
 * props高级玩法
 * 1.children：如果组件下有子节点（可以是任意值），props对象就会有children属性
 * 2.props传值校验
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'; // ES6

// 父组件
export default class Index extends Component {
  state = {
    colors: ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'],
    obj: {
      a: '1', b: true
    }
  }
  render () {
    return (
      <div>
        <h1>Props高级玩法</h1>
        <hr />
        <Child>123</Child>
        <hr />
        <Fnc>12345</Fnc>
        <hr />
        <Colors colors={this.state.colors} obj={this.state.obj} />
        <hr />
        <Colored a={() => { console.log(123) }}></Colored>
      </div>
    )
  }
}
// 类子组件
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
// 函数子组件
const Fnc = (props) => {

  console.log('函数组件props', props);
  return (
    <div>
      <h2>函数组件</h2>
    </div>
  )
}

// 封装组件
/**
 * 渲染颜色列表
 * @param {*} props 接收颜色值数组并渲染
 */
const Colors = (props) => {
  const { colors } = props
  return (
    <ul>
      {
        colors.map(item => <li style={{ background: item, color: '#fff' }} key={item}> {item} </li>)
      }
      <li>{props.a}</li>
    </ul>
  )
}
// 类型校验
Colors.propTypes = {
  colors: PropTypes.array.isRequired,
  a: PropTypes.number.isRequired,
  // obj: PropTypes.object
  obj: PropTypes.shape({
    a: PropTypes.string.isRequired,
    b: PropTypes.bool.isRequired
  })
}
Colors.defaultProps = {
  a: 0
}

// 类组件
class Colored extends Component {
  // 2.校验
  static propTypes = {
    a: PropTypes.func.isRequired,
    b: PropTypes.array.isRequired,
    c: PropTypes.number
  }
  static defaultProps = {
    b: [],
    c: 1000
  }
  render () {
    return (
      <div>
        <h2>封装的类组件</h2>
        <b>{this.props.c}</b>
      </div>
    )
  }
}
// // 1.类组件校验=>不推荐
// Colored.propTypes = {
//   a: PropTypes.func.isRequired,
//   b: PropTypes.bool
// }