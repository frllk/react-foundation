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
import './FunComp.css'

const FunComp = () => {
  // js逻辑
  let a = 10
  // 返回模板
  return (
    <div className='fun_box'>
      <h2>我是单文件函数组件</h2>
      <p>{a}</p>
    </div>
  )
}

// 导出组件
export default FunComp
