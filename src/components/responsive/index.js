/**
 * react 中使用state定义响应数据（类组件）
 */

import React from 'react'
import './index.css'

class Index extends React.Component {
  // 定义响应数据
  // 方式一：
  // constructor() {
  //   super()
  //   // 定义响应数据=>实例的属性和方法
  //   this.state = {
  //     count: 0
  //   }
  // }
  // 方式二：推荐
  // 定义响应数据=>实例的属性和方法
  state = {
    count: 0
  }
  // 定义事件处理函数
  hAddCount = () => {
    // 错误做法：直接修改不是响应式的 
    // 正确姿势=>setState
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return (
      <div className="responsive-box">
        <h1>react响应式 --- state</h1>
        <p>绑定：{this.state.count}</p>
        <button onClick={this.hAddCount}>点击count加1</button>
      </div>
    )
  }
}
export default Index