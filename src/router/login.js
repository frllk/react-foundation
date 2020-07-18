/**
 * 登录组件
 * 路由：编程式导航
 */
import React, { Component } from 'react'

export default class login extends Component {

  // 点击登录
  login = () => {
    console.log(this);
    const { push, replace } = this.props.history
    // push('/')
    // 传参失败？ ===> 跳转的页面是重定向页面，参数丢失
    // push({ pathname: '/', params: { a: 1, b: 2 } })

    // 本地存储token
    localStorage.setItem('token', Math.random() * 10)

    push({ pathname: '/home', params: { a: 1, b: 2 } })
    // replace('/') // 无法回退
  }
  render () {
    return (
      <div>
        <h1>登录组件</h1>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}
