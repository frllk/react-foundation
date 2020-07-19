import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import RouteConfig from '../../router/routerConfig'
import Auth from './auth'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div style={{ marginTop: "100px", fontSize: '14px', borderTop: "5px solid red" }}>
          <nav className="menu">
            <Link to="/home">首页</Link>
            <Link to="/open">公开课</Link>
            <Link to="/experience">体验课</Link>
            <Link to="/vip">VIP课</Link>
            <Link to="/es">企业服务</Link>
            <Link to="/news">新闻中心</Link>
          </nav>
          <Switch>
            {/* 路由重定向 */}
            <Redirect from="/" to="/home" exact />
            {
              RouteConfig.map((item, i) => {
                if (item.isAuth) {
                  return <Auth key={i} path={item.path} component={item.component} />
                }
                return <Route key={i} path={item.path} component={item.component} />
              })
            }
          </Switch>
        </div>
      </Router>
    )
  }
}
