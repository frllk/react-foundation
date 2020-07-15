import React from 'react'
import './ClaComp.css'

class ClaComp extends React.Component {
  // js逻辑
  abc = 123
  render () {
    return (
      <div className='cla_box'>
        <h2>我是单文件类组件</h2>
        <p>{this.abc}</p>
      </div>
    )
  }
}
export default ClaComp