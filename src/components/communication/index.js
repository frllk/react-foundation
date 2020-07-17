/**
 * 组件通信
 * props特点：
 * 1.可以传递任意类型的数据
 * 2.props传递的数据是只读的==》单向数据流
 * 3.使用类组件时，如果写了构造函数，应该将 props 传递给 super()，否则，无法在构造函数中获取到 props！ 
 */
import React, { Component } from 'react'
import './index.css'

// 子组件
const Fnc = (props) => {
  console.log('函数子组件接收传递数据', props)
  return (
    <div>
      <h2>函数子组件</h2>
      <p>{props.a}</p>
      {/* 给事件处理函数=》传递实参=》函数套函数 */}
      <button onClick={() => {
        // 调用
        props.fn(100)
      }}>调用父组件的方法</button>
      {/* 修改父组件的state数据a */}
      <button onClick={props.ca}>修改父组件的state数据a</button>
    </div>
  )
}

class Child extends Component {
  constructor(props) {
    super(props)
    console.log('构造器中使用props', this.props)
  }

  state = {
    // a: 20000 // 状态提升：提升到父组件去定义
  }

  render () {
    console.log('类组件接收传递数据', this.props)
    this.props.b.push(888)
    return (
      <div>
        <h2>类子组件</h2>
        <p>{this.props.a}</p>
        <p>{this.props.b}</p>
        {this.props.tpl}
        <button onClick={(e) => {
          console.log(e);
          this.props.fn(e, 1000)
        }}>调用父组件传递的方法=》子传父</button>
      </div>
    )
  }
}

// 父组件
export default class index extends Component {
  state = {
    a: 20000,
    b: [1, 2, 3, 4, 5],
    obj: {
      a: 2, b: 4
    }
  }

  // 父组件的方法
  parFn = (data) => {
    console.log('我是父组件的方法=>接收子组件数据', data);
  }

  /**
   * 子传父
   * 1.在父组件中定义接收子组件共享数据的方法
   * 
  */
  parData = (e, n) => {
    console.log('接收子组件数据：', e, n)
  }

  // 修改共享数据的方法
  changeA = () => {
    this.setState({
      a: Math.random() * 10000
    })
  }

  render () {
    return (
      <div>
        <h1>组件通信</h1>
        <p>{this.state.b}</p>
        <button onClick={this.changeA}>修改a</button>
        <hr />
        <Fnc a={this.state.a} ca={this.changeA} fn={this.parFn} str="some msg from parent" obj={this.state.obj} />
        <hr />
        <Child a={this.state.a} b={this.state.b} fn={this.parData} isHide={false} tpl={<p>123 =》 传递的是虚拟dom，虚拟dom是一个object对象</p>} />
      </div>
    )
  }
}
