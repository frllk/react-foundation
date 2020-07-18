import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class NotFound extends Component {
  render () {
    return (
      <div style={{ color: 'red' }}>
        <h1>notFound</h1>
        <Link to="/home">迷路了吗？带你回家</Link>
      </div>
    )
  }
}
