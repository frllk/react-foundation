/**
 * 表单处理
 */
import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  // 定义响应数据
  state = {
    count: ''
  }
  // 输入框事件处理函数
  hChange = (e) => {
    console.log(e.target.value);
    // 改变数据=>刷新视图
    this.setState({
      count: e.target.value
    })
  }
  // 表单提交
  hSub = (e) => {
    // 阻止默认行为
    e.preventDefault()
    // 获取表单数据
    console.log('表单提交', this.state);
  }
  render () {
    return (
      <div className="form">
        <h1>react 表单处理</h1>
        {/* 表单 */}
        <form >
          <input placeholder="请输入" type="text" value={this.state.count} onChange={this.hChange} />
          <div>{this.state.count}</div>
          <button onClick={this.hSub} type="submit">提交</button>
        </form>
      </div>
    )
  }
}
