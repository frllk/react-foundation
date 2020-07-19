/**
 * 性能优化
 */
import React, { Component, PureComponent } from 'react'

export default class index extends PureComponent {
  state = {
    count: 0,
    obj: {
      a: 1,
      b: 2
    },
    arr: [
      { id: 0, name: '小红' },
      { id: 1, name: '小蓝' },
      { id: 2, name: '小绿' }
    ]
  }

  // /**
  //  * 触发时机：更新时
  //  * @param {*} nextProps 最新的props
  //  * @param {*} nextState 最新的状态数据
  //  */
  // shouldComponentUpdate (nextProps, nextState) {
  //   console.log(this.state.count, nextProps, nextState);
  //   // 最新值和旧值不相等
  //   return this.state.count !== nextState.count
  // }

  // 点击相加
  handlerAdd = () => {
    this.setState({
      count: 1
    })
  }
  handlerObj = () => {
    // 错误的做法：直接修改引用类型的值=>
    // 原因：PureComponent内部比较=>遇到引用类型=>比较的是引用地址=>如果引用地址一样=>不会更新
    // this.state.obj.b = 10
    // let nowObj = { ...this.state.obj, b: 1000 }
    // 错误
    // this.state.arr.push({ id: 3, name: '李雷' })
    let newArr = [...this.state.arr, { id: 3, name: '李雷' }]

    this.setState({
      // obj: nowObj,
      arr: newArr
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
        <h2>{this.state.obj.b}</h2>
        <ul>
          {
            this.state.arr.map(item => <li key={item.id}>{item.name}</li>)
          }
        </ul>
        <button onClick={this.handlerObj}>改变引用类型的值</button>
        <hr />
        <Child count={this.state.count} />
      </div>
    )
  }
}

// 纯组件
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

