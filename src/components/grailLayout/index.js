import React, { Component } from 'react'
import Layout1 from './layout1'
import Layout2 from './layout2'
import Layout3 from './layout3'

export default class index extends Component {
  render () {
    return (
      <div>
        <h1>圣杯布局</h1>
        <hr />
        <Layout1 />
        <hr />
        <Layout2 />
        <hr />
        <Layout3 />
      </div>
    )
  }
}
