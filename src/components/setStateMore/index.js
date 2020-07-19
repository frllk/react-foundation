/**
 * setState详解
 * 类组件：setState()=>父类Component
 * 作用：1.修改state的数据 2.刷新页面
 * 特点：
 * 1.异步的（共同点）
 * 语法：
 * 1.setState({key:newVal})（推荐） ===>多次执行，只执行最后一次
 * 2.setState(func:回调)  ===> 多次执行，累加（全部执行） 
 */
import React, { Component } from 'react'

export default class index extends Component {
  state = {
    count: 0
  }

  // 使用对象语法：点击自加
  handlerObj = () => {
    // **********考异步问题====================
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('handlerAddCallBack：新值1', this.state.count)
    })

    // 旧值 => 错误的
    console.log('handlerAdd：旧值', this.state.count)
    // 考多次执行问题====================
    // **********多次执行=>执行最后一次（类似函数防抖，只执行最后一次）
    this.setState({
      count: this.state.count + 2
    }, () => {
      console.log('handlerAddCallBack：新值2', this.state.count)
    })
    this.setState({
      count: this.state.count + 3
    }, () => {
      console.log('handlerAddCallBack：新值3', this.state.count)
    })
  }

  // 使用函数语法：点击自加
  handlerFn = () => {
    /**
     * 基本用法
     * callback:state 最新的state props：最新的props
     */
    this.setState((state, props) => {
      // 返回的对象：包含要修改的state数据
      return {
        count: state.count + 1
      }
    }, () => {
      console.log('函数语法：新值1', this.state.count)
    })
    // **********考多次执行问题=> 会累加 ===================
    // 回调不管是在哪里执行，拿到的都是最新的值
    this.setState((state, props) => {
      // 返回的对象：包含要修改的state数据
      return {
        count: state.count + 2
      }
    }, () => {
      console.log('函数语法：新值2', this.state.count)
    })
    this.setState((state, props) => {
      // 返回的对象：包含要修改的state数据
      return {
        count: state.count + 10
      }
    }, () => {
      console.log('函数语法：新值3', this.state.count)
    })
    // **********考异步问题====================
    console.log('函数语法：旧值', this.state.count)
  }

  render () {
    return (
      <div>
        <h1>setState详解</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handlerObj}>对象语法</button>
        <button onClick={this.handlerFn}>函数语法</button>
      </div>
    )
  }
}
