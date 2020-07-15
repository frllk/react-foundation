/**
 * 创建单文件的函数组件
 * 1. 创建Hello.js
 * 2. 在 Hello.js 中导入React 核心包
 * 3. 创建组件（函数 或 类） 
 * 4. 在 Hello.js 中导出该组件 
 * 5. 在 index.js 中导入 Hello 组件 
 * 6. 渲染组件 
 */

import React from 'react'
import './FunCompEvent.css'

const FunCompEvent = () => {
  const hClick = (e) => {
    console.log('点击事件2......', e, e.target)
  }
  // 返回模板
  return (
    <div className='fun_box'>
      <h2>我是函数组件-事件绑定</h2>
      <p onClick={(e) => { console.log('点击事件1....', e); }}>点击事件1</p>
      <p onClick={hClick}>点击事件2</p>
    </div>
  )
}

// 导出组件
export default FunCompEvent
