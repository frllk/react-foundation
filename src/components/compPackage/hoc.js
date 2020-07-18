/**
 * 高阶组件：数据和视图的分离(核心思想)
 * 步骤：
 * 1. 创建一个函数，名称约定以 with 开头
 * 2. 指定函数参数，参数应该以大写字母开头（作为要渲染的组件）
 * 3. 在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回
 * 4. 在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件
 * 5. 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件,并将其渲染到页面中
 */

import './index.css'
import React, { Component } from 'react'

const withMouse = (WrappedComponent) => {
  return class Mouse extends Component {
    // js逻辑：复用data数据和功能
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

    // 模板
    render () {
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
}



// 调用测试
// 使用高阶组件：withMouse
const Fnc = (props) => {
  console.log(props);
  const { x, y } = props
  return (
    <div>
      <h2>我是被增强的组件:{x}-{y}</h2>
    </div>
  )
}
const Fnc2 = (props) => {
  console.log(props);
  const { x, y } = props
  return (
    <div>
      <h2 style={{ color: 'orange' }} >我是被增强的组件:{x}-{y}</h2>
    </div>
  )
}
const NewCom = withMouse(Fnc)
const NewCom2 = withMouse(Fnc2)
export default class TestHoc extends Component {
  render () {
    return (
      <div>
        <h1>测试高阶组件</h1>
        <NewCom a={1} />
        <NewCom2 />
      </div>
    )
  }
}

