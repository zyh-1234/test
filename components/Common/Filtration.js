import { useState } from 'react'
import { filterData } from './Filtration.config.js'
import s from './Filtration.module.css'

export default function Filtration() {
  const [curSelect, setCurSelect] = useState({ Color: {}, Design: {} })
  const [show, setShow] = useState({
    1: { 0: false, 1: false, 2: false },
    2: { 0: false, 1: false, 2: false },
  })
  const handleClick = (node, index, gp) => {
    const copyShow = { ...show }
    const copyCurSelect = { ...curSelect }
    if (node.type != 3) {
      copyShow[node.type][index] = !show[node.type][index]
      setShow(copyShow)
    }

    if (node.type == 3 || (node.type == 2 && node.childs.length == 0)) {
      copyCurSelect[`${gp.name}`] = node
      setCurSelect(copyCurSelect)
    }
  }

  const handleClear = (name) => {
    const _curSelect = Object.assign({}, { ...curSelect })
    _curSelect[name] = {}
    setCurSelect(_curSelect)
  }
  return (
    <div className={s.filtration_wrap}>
      <div className={s.filter_current_wrap}>
        <p>FILTERS</p>
        <ul className={s.filter_current}>
          {curSelect['Color'].name && (
            <li key="1">
              <div>Color： {curSelect['Color'].name}</div>
              <div
                className={s.clear}
                onClick={() => {
                  handleClear('Color')
                }}></div>
            </li>
          )}
          {curSelect['Design'].name && (
            <li key="2">
              <div>Design： {curSelect['Design'].name}</div>
              <div
                className={s.clear}
                onClick={() => {
                  handleClear('Design')
                }}></div>
            </li>
          )}
          {curSelect['Design'].name || curSelect['Color'].name ? (
            <li key="4" onClick={() => setCurSelect({ Color: {}, Design: {}, LENGTH: {} })}>
              Clean
            </li>
          ) : null}
        </ul>
      </div>

      <div className={s.filtration_content}>
        <ul className={s.filtration_ul_1}>
          {filterData.map((first, firstIndex) => (
            <li key={first.id} className={s.filtration_li_1}>
              <p className={s.title} onClick={() => handleClick(first, firstIndex)}>
                <span>{first.name}</span>
                <span
                  className={s.jiantou}
                  style={{
                    transform: show[first.type][firstIndex] ? 'rotate(45deg)' : 'rotate(-45deg)',
                  }}></span>
              </p>
              <ul
                className={s.filtration_ul_2}
                style={{ display: show[first.type][firstIndex] ? 'block' : 'none' }}>
                {first.childs.map((sec, secIndex) => (
                  <li key={sec.id}>
                    <p onClick={() => handleClick(sec, secIndex, first)}>
                      <span className={`${sec.childs.length ? '' : 'filtration_ul_li_p'}`}>
                        {sec.name}
                      </span>
                      <span
                        className={s.jiantou}
                        style={{
                          display: sec.childs.length ? 'block' : 'none',
                          transform: show[sec.type][secIndex] ? 'rotate(45deg)' : 'rotate(-45deg)',
                        }}></span>
                    </p>
                    {sec.childs.length ? (
                      <ul
                        className={s.filtration_ul_3}
                        style={{ display: show[sec.type][secIndex] ? 'block' : 'none' }}>
                        {sec.childs.map((third) => (
                          <li
                            key={third.id}
                            className={s.filtration_li_3}
                            onClick={() => handleClick(third, 0, first)}>
                            <img alt={third.name} src={third.icon} />
                            <p className={s.filtration_ul_li_p}>{third.name}</p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
