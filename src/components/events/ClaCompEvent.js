/**
 * 事件绑定
 */
import React, { Component } from 'react'
import './ClaCompEvent.css'

class ClaCompEvent extends Component {
  abc = 100
  // js逻辑
  // 原型方法
  // 点击事件处理函数
  handlerClick (e) {
    console.log('点击了button...', e, e.target, this, this.abc);
  }

  // this指向问题：方法一： bind  方法二（推荐）：书写时就确定了this=>上一层的this=>不能被修改
  // 实例方法
  // 阻止默认行为的事件处理函数
  handlerJump = (e) => {
    console.log('跳转', e, this, this.abc)
    // 不支持阻止默认行为
    // return false

    e.preventDefault()
  }

  // 不能这么写：页面渲染时会调用 ，后面不能调用了
  // 事件后面只能跟方法名 不能跟方法调用
  handlerClick3 = (e) => {
    console.log('点击事件3', e, this);
  }
  // 模板
  render () {
    return (
      <div className="cla_box">
        <h1>我是类组件-事件绑定</h1>
        <button onClick={this.handlerClick.bind(this)}>点击事件1</button>
        <button onClick={(e) => { console.log('点击事件2....', e, this, this.abc); }}>点击事件2</button>
        <button onClick={this.handlerClick3()}>点击事件3</button>
        <a onClick={this.handlerJump} href="https://www.baidu.com">跳转</a>
      </div>
    )
  }
}

export default ClaCompEvent