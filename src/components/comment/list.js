/**
 * 评论列表组件：
 * 组件拆分，增加可维护性，分工明确
 */
import React from 'react'

const List = (props) => {
  // 通过props获取父组件传递的数据
  console.log(props)
  // 评论列表渲染
  const renderList = () => {
    // const list = [
    //   { id: 0, name: '特朗普', content: '我来了！' },
    //   { id: 1, name: '普京', content: '我是战斗民族！' }
    // ]
    // 获取状态数据
    // 通过props获取父组件传递的数据
    const { list } = props
    return list.length ? list.map(item => {
      return (
        <li key={item.id}>
          <p className="pline">{item.name}</p>
          <p>{item.content}</p>
        </li>
      )
    }) : <li className="nodata"><p>暂无评论！</p></li>
  }

  return (
    <ul className="list">
      {/* 评论列表渲染 */}
      {renderList()}
    </ul>
  )
}
export default List