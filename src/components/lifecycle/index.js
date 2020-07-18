/**
 * 类组件-生命周期
 * 1.挂载时（创建时）
 * 执行顺序：1.执行constructor()=>new 实例化  2.render()=>渲染模板 3.componentDidMount()
 * 2.更新时
 * 
 * 3.销毁时
 * 
 */
import React, { Component } from 'react'

export default class index extends Component {
  constructor() {
    super()
    // 执行几次？=> 只执行一次
    console.log('1.执行constructor()=>new 实例化');
    // 作用：1.定义state（推荐在外面定义）响应数据  2.处理事件绑定，事件处理函数的this绑定（bind方式）=> 推荐在外面写箭头函数
    this.state = {
      a: 0
    }
  }

  componentDidMount () {
    // 执行几次？=> 只执行一次
    console.log('3.组件已经显示到页面：componentDidMount()');
    // 作用：1.操作DOM  2.发送ajax请求
  }

  render () {
    // 避免在这里更改数据=>会造成死循环（只要渲染就改数据，改数据就要重新渲染，然后死循环了）
    // 数据变化：多次执行
    console.log('2.render()=>渲染模板 ');
    return (
      <div>
        <h1>生命周期</h1>
      </div>
    )
  }
}

