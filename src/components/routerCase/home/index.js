/**
 * 首页组件
 */
import React, { Component } from 'react'
import './index.css'

export default class Home extends Component {
  state = {
    userName: ''
  }
  componentDidMount () {
    // console.log('获取传递的参数', this.props.location)
    const token = localStorage.getItem('token')
    const { userName } = JSON.parse(token)
    this.userName = userName
    console.log('home - componentDidMount ', this, token)
    this.setState({
      userName
    })
  }
  render () {
    return (
      <div className="home">
        <h1>欢迎，{console.log('1111', this.userName)}{this.state.userName}</h1>
      </div>
    )
  }
}