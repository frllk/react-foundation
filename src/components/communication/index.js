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
      <button onClick={props.fn}>调用父组件的方法</button>
    </div>
  )
}

class Child extends Component {
  constructor(props) {
    super(props)
    console.log('构造器中使用props', this.props)
  }

  render () {
    console.log('类组件接收传递数据', this.props)
    this.props.b.push(888)
    return (
      <div>
        <h2>类子组件</h2>
        <p>{this.props.b}</p>
        {this.props.tpl}
      </div>
    )
  }
}

// 父组件
export default class index extends Component {
  state = {
    a: 1,
    b: [1, 2, 3, 4, 5],
    obj: {
      a: 2, b: 4
    }
  }

  parFn = () => {
    console.log('我是父组件的方法', this.state);
  }
  render () {
    return (
      <div>
        <h1>组件通信</h1>
        <p>{this.state.b}</p>
        <hr />
        <Fnc a={this.state.a} fn={this.parFn} str="some msg from parent" obj={this.state.obj} />
        <hr />
        <Child b={this.state.b} isHide={false} tpl={<p>123 =》 传递的是虚拟dom，虚拟dom是一个object对象</p>} />
      </div>
    )
  }
}
