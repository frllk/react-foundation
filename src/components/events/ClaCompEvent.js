/**
 * 事件绑定
 */
import React, { Component } from 'react'
import './ClaCompEvent.css'

class ClaCompEvent extends Component {
  // js逻辑
  // 原型方法
  // 点击事件处理函数
  handlerClick (e) {
    console.log('点击了button...', e, e.target);
  }

  // 实例方法
  // 阻止默认行为的事件处理函数
  handlerJump = (e) => {
    console.log('跳转', e)
    // 不支持阻止默认行为
    // return false

    e.preventDefault()
  }
  // 模板
  render () {
    return (
      <div className="cla_box">
        <h1>我是类组件-事件绑定</h1>
        <button onClick={this.handlerClick}>点击事件</button>
        <a onClick={this.handlerJump} href="https://www.baidu.com">跳转</a>
      </div>
    )
  }
}

export default ClaCompEvent