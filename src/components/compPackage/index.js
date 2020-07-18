/**
 * 组件封装：可复用，方便维护
 * 组件封装案例：鼠标效果
 */
import React, { Component } from 'react'
import './index.css'

export default class index extends Component {

  state = {
    x: 0,
    y: 0
  }
  // 鼠标移动
  componentDidMount () {
    // 监听鼠标移动事件
    window.addEventListener('mousemove', this.handlerMove)
  }

  // 鼠标移动事件处理函数
  handlerMove = (e) => {
    // console.log(e.pageX, e.pageY);
    this.setState({
      x: e.pageX,
      y: e.pageY
    })
  }


  // 清理工作
  componentWillUnmount () {
    // 事件解绑
    window.removeEventListener('mousemove', this.handlerMove)
  }

  render () {
    return (
      <div>
        <h1 className="color">鼠标移动效果:{this.state.x}-{this.state.y}</h1>
      </div>
    )
  }
}
