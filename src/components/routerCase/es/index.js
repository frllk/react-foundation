/**
 * 企业服务组件
 */
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { RouteTwoConfig } from '../../../router/routerConfig'
import './index.css'
// import Web from '../../../components/routerCase/es/web'

export default class Es extends Component {
  render () {
    return (
      <div>
        <nav className="navs">
          <Link to="/home">首页</Link>
          <Link to="/es/web">web前端</Link>
          <Link to="/es/bigdata">大数据</Link>
          <Link to="/es/architect">架构师</Link>
          <Link to="/es/product">产品经理</Link>
        </nav>
        {/* <Route path='/es/web' component={Web} /> */}
        {
          RouteTwoConfig.map((item, i) => <Route key={i} path={item.path} component={item.component} />)
        }
      </div>
    )
  }
}
