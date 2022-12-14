import { useState } from 'react'
import s from './Toolbar.module.css'

export default function Toolbar({ onChange }) {
  const [choose, setChoose] = useState({ id: 5, name: '按人气' })

  const chooseList = [
    { id: 1, name: '价格↑' },
    { id: 2, name: '价格↓' },
    { id: 3, name: '最新' },
    { id: 4, name: '相关' },
    { id: 5, name: '按人气' },
  ]
  const [showChoose, setShowChoose] = useState(false)
  const handeClick = (item) => {
    onChange(item)
    const _choose = Object.assign({}, item)
    setChoose(_choose)
    setShowChoose(false)
  }
  return (
    <div className={s.toolbar_wrap}>
      <div className={s.left}>
        <p>产品视图</p>
        <p>视</p>
        <p>图</p>
      </div>
      <div className={s.right}>
        <div className={s.title} onClick={() => setShowChoose(!showChoose)}>
          <p>排序：</p>
          <p>{choose.name}</p>
          <p
            className={s.jiantou}
            style={{
              transform: showChoose ? 'rotate(-135deg) translate(-50%,-50%)' : 'rotate(45deg)',
            }}></p>
        </div>
        <div
          className={s.choose_list_wrap}
          style={{
            display: showChoose ? 'block' : 'none',
          }}
          onMouseOut={() => setShowChoose(false)}
          onMouseOver={() => setShowChoose(true)}
          onFocus={() => 0}
          onBlur={() => 0}>
          <ul className={s.choose_list}>
            {chooseList.map((item, index) => (
              <li className={s.choose_list_li} key={index} onClick={() => handeClick(item)}>
                <p className={s.icon}>{item.id === choose.id ? <i></i> : null}</p>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
