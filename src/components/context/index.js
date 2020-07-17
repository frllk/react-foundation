/**
 * React组件是一等公民
 * 使用Context对象跨多级组件通信
 * 步骤：
 * 1.创建Context对象：React.createContexxt() => Provider(提供数据) 和 Consumer（接收数据）组件
 * 2.使用Provider组件包裹要共享数据的组件 ，通过Provider组件的value属性提供共享数据
 * 3.使用Consumer组件接收共享数据
 */
import React, { Component } from 'react'
import Child1 from './Child1'
import { Provider } from './Provider'

export default class App extends Component {
  state = {
    a: 10000
  }
  changeA = () => {
    this.setState({
      a: Math.random() * 10000
    })
  }
  render () {
    return (
      <Provider value={this.state.a}>
        <h1>App</h1>
        <button onClick={this.changeA}>修改a</button>
        <hr />
        <Child1 />
      </Provider>
    )
  }
}
