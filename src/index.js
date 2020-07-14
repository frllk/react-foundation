// react入口文件

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
console.log(div1, div2);


let b = 'hello jsx 插值表达式'
// 只能有一个根标签，采用小驼峰命名
const div3 = (
  <div className='div'>
    <div>
      <h1>12345</h1>
      <p>{b}</p>
    </div>
  </div>

)

ReactDOM.render(div3,
  document.getElementById('root')
);