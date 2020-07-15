import React, { Component } from 'react';

// 导入组件样式
import './index.css'

class Index extends Component {
  // js逻辑

  // 模板
  render () {
    return (
      <div className="box">
        <h1>评论</h1>
        {/* 发表评论 */}
        <div className="pub">
          <p><input type="text" /></p>
          <p><textarea /></p>
          <p><button className="btn">发表评论</button></p>
        </div>
        {/* 评论列表 */}
        <hr className="line" />
        <ul className="list">
          <li>
            <p className="pline">小红</p>
            <p>发表评论了！</p>
          </li>
          <li>
            <p className="pline">小蓝</p>
            <p>刚发表过！</p>
          </li>
          <li className="nodata"><p>暂无评论！</p></li>
        </ul>
      </div>
    );
  }
}

export default Index;