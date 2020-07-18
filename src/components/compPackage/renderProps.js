/**
 * renderProps模式：数据和视图分离
 * 1. 创建Mouse组件，在组件中提供复用的状态逻辑代码（1. 状态  2. 操作状态的方法）
 * 2. 将要复用的状态作为 props.render(state) 方法的参数，暴露到组件外部
 * 3. 使用 props.render() 的返回值作为要渲染的内容
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class RenderProps extends Component {

  // 定义对外的API：需要传递的数据
  static propTypes = {
    render: PropTypes.func.isRequired
  }

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

  // 模板 => 由使用组件者 => 传入
  render () {
    return this.props.render(this.state)
  }
}


// 测试调用
export default class Test extends Component {
  render () {
    return <div>
      <RenderProps render={(data) => {
        console.log(data);
        return <h1>鼠标移动位置信息：{data.x}-{data.y}</h1>
      }} />
      <RenderProps render={(data) => {
        console.log(data);
        return <h2 style={{ color: '#000' }}>位置信息：{data.x}-{data.y}</h2>
      }} />
    </div>
  }
}