// react入口文件

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from '@testing-library/react';
import FunComp from './components/FunComp'
import ClaComp from './components/ClaComp'
import ClaCompEvent from './components/events/ClaCompEvent'
import FunCompEvent from './components/events/FunCompEvent'
import ResponsiveIndex from './components/responsive'
import FormIndex from './components/form'
import Comment from './components/comment'
import Communication from './components/communication'
import Context from './components/context'
import PropsMore from './components/propsMore'
import GrailLayout from './components/grailLayout'


// 使用React.createElement创建react元素
// const h1 = React.createElement('h1', { id: 'test' }, 'hello react！')
// const z = React.createElement('span', { style: { display: 'block', color: 'red' } }, '我是span标签！')
// const p = React.createElement('p', { style: { background: 'blue' } }, '我是p标签！', z)
// const div1 = React.createElement('div', { className: 'div' }, h1, p, z, 1000, 'str')

// 使用jsx创建react元素
// jsx：标记语言  jsx：html标签都可以写，支持所有html标记
const h1 = <div className="div">
  <h1>hello jsx!</h1>
  <p>我是p标签</p>
  <span>我是span</span>
  <div>
    <h2>我是h2</h2>
  </div>
</div>

// 对比
let div1 = <div>我是div1</div>
let div2 = React.createElement('div', null, '我是div2')
console.log('虚拟dom', div1, div2);

// 数据绑定*************************************************************
// - 单大括号中可以使用任意的 JavaScript 表达式 （值，变量，函数调用，三元运算符，数组(基本类型，jsx)）
// - JSX 自身也是 JS 表达式 （语法糖：React.createElement()）
// - 注意：不能在{}中出现语句和对象（比如：if/for，{a:100} 等） 


let fn = () => {
  // 返回一个值=>显示在模板里面
  console.log('fn执行了')
  return (<span>10000</span>)
}
let b = 'hello jsx 插值表达式', abc = '123', obj = { a: 1, b: 2 }, title = '数据绑定'
// 只能有一个根标签，采用小驼峰命名
const div3 = (
  <div className='div'>
    <div>
      <h1>{b}</h1>
      <h1>{title}</h1>
      <p>值：{1}</p>
      <ul>
        <li>字符串：{'str'}</li>
        <li>bool+三元：{true ? 1 : 0}</li>
        <li>变量：{abc}</li>
        <li>函数调用：{fn()}</li>
        <li>{<b>我是b标签</b>}</li>
        <li>数组：{[1, 2, 3]}</li>
        {/* 不支持写obj对象，但是可以写对象的键 */}
        {/* <li>{{ a: 1, b: 2 }}</li> */}
        <li>obj.a：{obj.a}</li>
      </ul>
    </div>
  </div>
)


// 条件渲染*************************************************************
let loaded = false // 数据是否请求成功
// 函数方式
let isLoaded = (loaded) => {
  if (loaded) {
    return (
      <div>
        <p><span>请求成功了！</span></p>
      </div>
    )
  } else {
    return (
      <div>
        <p><b>请求中......！</b></p>
      </div>
    )
  }
}
const loading = (
  <div className="div">
    {/* 三元表达式的形式 */}
    <h1>{loaded ? <span>请求成功了</span> : <span>请求中...</span>}</h1>
    {/* 函数调用形式：比较复杂时使用 */}
    <p>{isLoaded(true)}</p>
  </div>
)

// 列表渲染*************************************************************
// 假数据
const songs = [
  { id: 1, color: 'red', name: '野狼disco' },
  { id: 2, color: 'orange', name: '像我这样的人' },
  { id: 3, color: 'blue', name: '桥边姑娘' },
]

// 使用map方法做列表渲染
const renderSongs = () => {
  return songs.map((item, i) => {
    return <li key={item.id}>{item.name}</li>
  })
}

// jsx样式处理
// 行内样式-style
// 类名 - className（推荐）

// 列表渲染模板
// jsx会调用React.createElement创建元素，并将元素渲染到对应标签中
const list_tpl = (
  <div>
    <ul>
      {
        // 取出数组中的项放到这里渲染
        // [<li>1</li>, <li>2</li>]
        songs.map((item, i) => {
          return <li className='item' key={item.id} style={{ backgroundColor: item.color, color: '#fff' }}>{item.name}</li>
        })
        // renderSongs()
      }
    </ul>
  </div>
)





//************************************组件******************************************** */
// 1 使用函数创建组件
// - 函数组件：使用 JS 的函数（或箭头函数）创建的组件 
//   - 函数体内要返回元素（jsx）
// - 渲染函数组件：用函数名作为组件标签名

// 函数组件首字母大写 大驼峰形式
function Fnc () {
  const num = 100
  // 返回模板
  return (
    <div>
      <h1>我是函数组件1</h1>
      <p>{num}</p>
    </div>
  )
}
const Fnc2 = () => {
  return (
    <div>
      <h1>我是函数组件2</h1>
    </div>
  )
}

// 2.使用class创建组件
// 语法
// - 类组件：使用 ES6 的 class关键字 创建的组件 
// - 类组件应该继承 React.Component 父类，从而可以使用父类中提供的方法和属性  - 
// - 类里面实现父类提供的render()， 返回一个模板
// 标签名=>类名

class Compt extends React.Component {
  render () {
    return (
      <div>
        <h1>我是类组件</h1>
        <FunComp />
      </div>
    )
  }
}
// jsx模板
const div6 = (
  <div>
    <h1>函数组件</h1>
    <Fnc></Fnc>
    <Fnc2></Fnc2>
    <hr />
    <Compt></Compt>
    <hr />
    <h1>单文件组件</h1>
    <FunComp />
    <ClaComp />
  </div>
)

// jsx模板
const tpl = (
  <div>
    {/* <GrailLayout />
    <hr /> */}
    {/* <ClaCompEvent />
    <hr />
    <FunCompEvent />
    <hr />
    <ResponsiveIndex />
    <hr />
    <FormIndex />
    <hr /> */}
    {/* <Comment /> */}
    {/* <Communication /> */}
    {/* <Context /> */}
    <PropsMore />
  </div>
)

ReactDOM.render(tpl,
  document.getElementById('root')
);