import React, { Component } from 'react';
import './index.css'

class Child3 extends Component {
  render () {
    console.log('Child3更新了');

    return (
      <div className="box">
        <h3>Child3</h3>
      </div>
    );
  }
}

class Child5 extends Component {
  render () {
    console.log('Child5更新了');

    return (
      <div className="box">
        <h3>Child5</h3>
      </div>
    );
  }
}

class Child4 extends Component {
  render () {
    console.log('Child4更新了');

    return (
      <div className="box">
        <h3>Child4</h3>
        <Child5 />
      </div>
    );
  }
}



// 第二级父组件2
class Par2 extends Component {
  state = {
    b: 0
  }

  update = () => {
    this.setState({
      b: this.state.b + 1
    })
  }
  render () {
    console.log('Par2组件更新了');
    return (
      <div className="par2">
        <h2>Par2状态数据b：{this.state.b}</h2>
        <p className="btn"><button onClick={this.update}>更新Par2状态</button></p>
        <div className="next">
          <Child3 />
          <Child4 />
        </div>
      </div>
    );
  }
}


// 第二级父组件1的子组件
const Child1 = function (props) {
  console.log('Child1更新了');
  return (
    <div className="box">
      <h3>Child1</h3>
    </div>
  )
}

// 第二级父组件1
class Par1 extends Component {
  render () {
    console.log('Par1组件更新了');
    return (
      <div className="par1">
        <h2>Par1</h2>
        <Child1 />
      </div>
    );
  }
}

// 跟组件
class App extends Component {
  state = {
    a: 0
  }

  update = () => {
    this.setState({
      a: this.state.a + 1
    })
  }

  render () {
    console.log('跟组件App更新了');
    return (
      <div className="app">
        <h1>App状态数据a：{this.state.a}</h1>
        <p className="btn"><button onClick={this.update}>更新App状态</button></p>
        <div className="next">
          <Par1 />
          <Par2 />
        </div>
      </div>
    );
  }
}

export default App;