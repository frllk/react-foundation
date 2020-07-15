/**
 * 表单处理
 */
import React, { Component } from 'react'
import './index.css'

class Child extends React.Component {
  render () {
    return (
      <div>我是子组件</div>
    )
  }
}

// 父组件
export default class index extends Component {
  // 定义响应数据
  state = {
    count: ''
  }

  // 非受控组件：ref(获取DOM元素/组件实例)
  inputRef = React.createRef()
  childRef = React.createRef()
  // 受控组件：v-model(双向绑定)
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
    console.log('input ref：', this.inputRef, this.inputRef.current.value);
    this.inputRef.current.style.backgroundColor = 'red'
    this.inputRef.current.style.color = "#fff"
    console.log('获取类组件实例：', this.childRef);

  }


  render () {
    return (
      <div className="form">
        <h1>react 表单处理</h1>
        {/* 表单 */}
        <form >
          <div>{this.state.count}</div>
          <div>
            <label>受控组件：</label>
            {/* 双向绑定 */}
            <input placeholder="请输入" type="text" value={this.state.count} onChange={this.hChange} />
          </div>
          <div>
            {/* ref对象 */}
            <label>非受控组件：</label>
            <input ref={this.inputRef} type="text" />
          </div>
          <button onClick={this.hSub} type="submit">提交</button>
        </form>
        <hr />
        <Child ref={this.childRef} />
      </div>
    )
  }
}
