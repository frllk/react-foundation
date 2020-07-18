/**
 * 路由基本使用
 * 步骤：
 * 1.安装： npm i react-router-dom
 * 2.导入路由的三个核心组件：Router / Route / Link
 * 3.使用 Router 组件包裹整个应用（重要）
 * 4.使用 Link 组件作为导航菜单（路由入口）
 * 5.使用 Route 组件配置路由规则和要展示的组件（路由出口）
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import './index.css'
import Login from './login'


const Fnc = (props) => {
  console.log('Fnc', props);
  return <div>
    <h2>我是首页的子组件</h2>
  </div>
}

class Home extends Component {
  componentDidMount () {
    console.log('获取传递的参数', this.props.location)
  }
  render () {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={() => {
          // this.props.history.goBack()
          // go方法：传0/空 => 刷新页面
          this.props.history.go(-1)
        }}>编程式导航</button>
        <Fnc {...this.props} />
      </div>
    )
  }
}
// 关于我们
class Abount extends Component {
  render () {
    return (
      <div>
        <h1>Abount</h1>
      </div>
    )
  }
}
// 关于我们
const Contact = (props) => {
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => {
        console.log(props);
        props.history.push('/')
      }}>跳路由</button>
    </div>
  )
}

// 新闻中心
class News extends Component {
  componentDidMount () {
    // 获取动态路由参数
    console.log('news', this.props, this.props.match.params)
  }
  render () {
    return (
      <div>
        <h2>新闻中心</h2>
      </div>
    )
  }
}
// 404组件
const NotFound = () => {
  return (
    <div>
      <h1 className="red">NotFound</h1>
      <Link to="/home">迷路了吗？带你回家</Link>
    </div>
  )
}

// 根组件
const App = () => {
  // 模板
  return (
    <Router>
      <nav className="menu">
        <Link to="/home">首页</Link>
        <Link to="/news/123">新闻</Link>
        <Link to="/about">关于我们</Link>
        <Link to="/contact">联系我们</Link>
      </nav>
      {/* 配置路由规则 */}
      <Switch>
        {/* 路由重定向 */}
        <Redirect from="/" to="/home" exact />
        {/* 首页 */}
        {/* 默认：模糊匹配  exact：精确匹配 */}
        <Route path="/home" exact component={Home} />
        {/* 关于我们 */}
        <Route path="/about" component={Abount} />
        {/* 联系我们 */}
        <Route path="/contact" component={Contact} />
        {/* 动态路由=>详情 */}
        <Route path="/news/:id" component={News} />
        {/* 登录 */}
        <Route path="/login" component={Login} />
        {/* 404页面 */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App