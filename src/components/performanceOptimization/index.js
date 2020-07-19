/**
 * 性能优化
 */
import React, { Component, PureComponent } from 'react'

export default class index extends Component {
  state = {
    count: 0
  }

  /**
   * 触发时机：更新时
   * @param {*} nextProps 最新的props
   * @param {*} nextState 最新的状态数据
   */
  shouldComponentUpdate (nextProps, nextState) {
    console.log(this.state.count, nextProps, nextState);
    // 最新值和旧值不相等
    return this.state.count !== nextState.count
  }

  // 点击相加
  handlerAdd = () => {
    this.setState({
      count: 1
    })
  }

  render () {
    console.log('父组件更新了');
    return (
      <div>
        <h1>组件更新机制性能优化</h1>
        <p>{this.state.count}</p>
        <button onClick={this.handlerAdd}>add</button>
        <hr />
        <Child count={this.state.count} />
      </div>
    )
  }
}

// rcjc
class Child extends PureComponent {

  // shouldComponentUpdate (nextProps) {
  //   console.log(nextProps, this.props)
  //   return this.props.count !== nextProps.count
  // }

  render () {
    console.log('我是子组件');
    return (
      <div>
        <h2>我是子组件</h2>
        <p>{this.props.count}</p>
      </div>
    )
  }
}

