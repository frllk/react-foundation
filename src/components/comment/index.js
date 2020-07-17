import React, { Component } from 'react';

// 导入评论列表组件
import List from './list'

// 导入组件样式
import './index.css'

class Index extends Component {
  // js逻辑
  // 定义响应式数据
  state = {
    // form: {
    //   name: '', // 评论人
    //   content: '', // 评论内容
    // },
    name: '', // 评论人
    content: '', // 评论内容
    // 评论列表
    list: [
      // { id: 0, name: '特朗普', content: '我来了！' },
      // { id: 1, name: '普京', content: '我是战斗民族！' }
    ],

  }


  // 批量处理多个表单元素的双向绑定
  handlerInput = (e) => {
    // console.log(e.target.name, e.target.value);

    this.setState({
      // key:val
      [e.target.name]: e.target.value
    })
  }

  /**
   * 发表评论
   * 1.获取评论数据
   * 2.修改list数据=>新增一条
   * 3.setState
   */
  pub = () => {
    const { name, content, list } = this.state
    if (!name || !content) {
      return alert('评论人或者评论内容不能为空！')
    }

    console.log(name, content)
    // list.unshift({ id: list.length, name, content })
    this.setState({
      list: [{ id: list.length, name, content }, ...list],
      // 清空输入值
      name: '',
      content: ''
    })
  }


  // 模板
  render () {
    return (
      <div className="box">
        <h1>评论</h1>
        {/* 发表评论 */}
        <div className="pub">
          <p><input name="name" type="text" value={this.state.name} onChange={this.handlerInput} /></p>
          <p><textarea name="content" value={this.state.content} onChange={this.handlerInput} /></p>
          <p><button onClick={this.pub} className="btn">发表评论</button></p>
        </div>
        {/* 评论列表 */}
        <hr className="line" />
        {/* 评论列表组件 */}
        <List list={this.state.list} ></List>
      </div>
    );
  }
}

export default Index;