/**
 * 自定义Route组件
 * 封装Auth组件：路由守卫
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './login'

const Auth = ({ path, component: Com }) => {
  return (
    <Route path={path} exact render={(props) => {
      console.log('auth===', props)
      const userInfo = JSON.parse(localStorage.getItem('token')) || {}
      console.log('token===', userInfo)

      if (userInfo) {
        // console.log('1', props);
        return <Com {...props} />
      } else {
        // console.log('2', props);
        return <Redirect to='/login' />
      }
    }} />
  )
}
export default Auth