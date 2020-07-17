import React, { Component } from 'react'
import { Consumer } from './Provider'

export default class Child2 extends Component {
  // 接收共享数据(回调函数)
  receiveData = (data) => {
    console.log('receiveData', data);
    return <p style={{ backgroundColor: 'red', color: '#fff' }}>{data}</p>
  }
  render () {
    return (
      <div>
        <h3>Child2：类子组件2</h3>
        <hr />
        <Child3 />
        {/* 获取共享数据 */}
        <Consumer>{this.receiveData}</Consumer>
      </div>
    )
  }
}

const Child3 = () => {
  return (
    <div>
      <h4>Child3：函数子组件</h4>
      {/* 获取根组件的数据 */}
      <Consumer>{(data) => {
        console.log('获取根组件的数据', data);
        return <p>{data}</p>
      }}</Consumer>
    </div>
  )
}