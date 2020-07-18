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
import { BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter } from 'react-router-dom'
import './index.css'
import Login from './login'


const Fnc = (props) => {
  console.log('Fnc', props);
  return <div>
    <h2>我是首页的子组件</h2>
  </div>
}

const Fnx = (props) => {
  console.log('Fnx', props);
  return (
    <div>
      <h2>我是Fnx组件</h2>
    </div>
  )
}

// withRouter高阶组件：让一个组件的props增加了一些路由属性和方法，history、match、location。
const NewFnx = withRouter(Fnx)

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
        <hr />
        <Fnc {...this.props} />
        <hr />
        <NewFnx />
      </div>
    )
  }
}

// 关于我们二级路由组件
const AboutTwo = () => {
  return (
    <div>
      <h3>关于我们二级路由组件</h3>
    </div>
  )
}

// 关于我们
class Abount extends Component {
  render () {
    return (
      <div>
        <h1>Abount</h1>
        <p><Link to="/about/two">关于我们二级路由</Link></p>
        <Route path="/about/two" component={AboutTwo} />
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

// 封装Auth组件：路由守卫
const Auth = ({ path, component: Com }) => {
  return (
    <Route path={path} exact render={(props) => {
      console.log('auth======', props); // => 能干路由守卫？
      const token = localStorage.getItem('token')
      if (token) {
        return <Com {...props} />
      } else {
        // 跳转到登录
        return <Redirect to="/login" />
      }
    }} />
  )
}

// 配置
const RouteConfig = [
  { path: '/contact', component: Contact, isAuth: false },
  { path: '/news/:id', component: News, isAuth: false },
  { path: '/login', component: Login, isAuth: false }
]

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
      {/* 配置路由规则=>一级路由 */}
      <Switch>
        {/* 路由重定向 */}
        <Redirect from="/" to="/home" exact />
        {/* 首页 */}
        {/* 默认：模糊匹配  exact：精确匹配 */}
        {/* component={Home} */}
        {/* <Route path="/home" component={Home} /> */}
        <Auth path="/home" component={Home} />
        {/* <Route path="/home" exact render={(props) => {
          // console.log(props); => 能干路由守卫？
          // 根据token判断
          const token = 0
          if (token) {
            return <Home {...props} />
          } else {
            // 跳转到登录
            return <Redirect to="/login" />
          }
        }} /> */}
        {/* 关于我们 */}
        {/* <Route path="/about" component={Abount} /> */}
        <Auth path="/about" component={Abount} />
        {/* 联系我们 */}
        <Route path="/contact" component={Contact} />
        {/* 动态路由=>详情 */}
        {/* <Route path="/news/:id" component={News} /> */}
        {/* 登录 */}
        {/* <Route path="/login" component={Login} /> */}
        {
          // RouteConfig.map((item, i) => {
          //   console.log('item=====', item);
          //   return <Route key={i} path={item.path} component={item.component} />
          // })
          RouteConfig.map((item, i) => <Route key={i} path={item.path} component={item.component} />)
        }
        {/* 404页面 */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App