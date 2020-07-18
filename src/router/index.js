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
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './index.css'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Home</h1>
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
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

// 新闻中心
class News extends Component {
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
        <Link to="/">首页</Link>
        <Link to="/news/123">新闻</Link>
        <Link to="/about">关于我们</Link>
        <Link to="/contact">联系我们</Link>
      </nav>
      {/* 配置路由规则 */}
      <Switch>
        {/* 首页 */}
        {/* 默认：模糊匹配  exact：精确匹配 */}
        <Route path="/" exact component={Home} />
        {/* 关于我们 */}
        <Route path="/about" component={Abount} />
        {/* 联系我们 */}
        <Route path="/contact" component={Contact} />
        {/* 动态路由=>详情 */}
        <Route path="/news/:id" component={News} />
        {/* 404页面 */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App