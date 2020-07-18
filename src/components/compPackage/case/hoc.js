// 创建高阶组件
// 1. 创建一个函数，名称约定以 with 开头 
// 2. 指定函数参数，参数应该以大写字母开头（作为要渲染的组件）
// 3. 在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回 
// 4. 在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件
// 5. 调用该高阶组件，传入要增强的组件，通过返回值拿到增强后的组件,并将其渲染到页面中 
import React, { Component } from 'react';
const withMouse = (WrappedComponent) => {
  return class hoc extends Component {
    state = {
      x: 0,
      y: 0
    }

    handlerPosition = (e) => {
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
      return (
        <div>
          <WrappedComponent {...this.state} {...this.props} />
        </div>
      );
    }
  }
}

// 调用测试
const Fnc = (props) => {
  console.log(props);
  return (
    <h1 style={{ color: 'red' }}>{props.title}{props.x}:{props.y}</h1>
  )
}
// 拿到高阶组件
const WithFnc = withMouse(Fnc);
console.log(
  WithFnc
);
class Index extends Component {
  render() {
    return (
      <div>
        <WithFnc title='鼠标位置：' />
      </div>
    );
  }
}

export default Index;
