import React, { Component } from 'react';
import './cursor.css'

/**
 * render props模式
 * 复用的是组件的状态和操作状态的方法，传入的是任意的UI（组件数据和UI的分离）
 */
// 定义Mouse组件
class Mouse extends Component {

  state = {
    x: 0,
    y: 0
  }

  handlerPosition = (e) => {
    console.log(e);
    this.setState({
      x: e.x,
      y: e.y
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handlerPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handlerPosition)

  }



  render() {
    return this.props.render(this.state)
    // <div>
    {/* <h1>鼠标位置：{this.state.x}:{this.state.y}</h1> */ }

    // </div>

  }
}


class RenderProps extends Component {

  showUi(state) {
    console.log(state);
    return (
      <h1 style={{ color: 'red' }}>显示鼠标位置：{state.x}:{state.y}</h1>
    )
  }
  render() {
    return (
      <div>
        <Mouse render={this.showUi} />
      </div>
    );
  }
}

export default RenderProps;