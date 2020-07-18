/**
 * 登录组件
 */
import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
  state = {
    userName: '',
    password: ''
  }
  componentDidMount () {
    console.log('login===', this)
  }
  handlerInput = (e) => {
    // console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // 登录
  login = () => {
    console.log(this.props.history)
    const { userName, password } = this.state
    const { push } = this.props.history
    localStorage.setItem('token', JSON.stringify({ userName, password }))
    push({ pathname: '/home', params: { userName, password } })
  }
  render () {
    return (
      <div className="login">
        <h1>登录</h1>
        <div><label>用户名：</label><input name="userName" type="text" onChange={this.handlerInput} value={this.state.userName} /></div>
        <div><label>密码：</label><input name="password" type="password" onChange={this.handlerInput} value={this.state.password} /></div>
        <div><button onClick={this.login}>登录</button></div>
      </div>
    )
  }
}
