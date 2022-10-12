import { useEffect, useRef, useState } from 'react'
import { CaretDownFilled } from '@ant-design/icons'
import s from './Dropdown.module.css'

const mapDropdownType = {
  CODE: 'code',
  COLOR: 'color',
  STONE: 'stone',
  SIZE: 'size',
  COUNT: 'count',
  LENGTH: 'length',
  WIDTH: 'width',
}

export default function Dropdown({
  title = '',
  list = [''],
  currentSelect = '',
  onSelect,
  type = '',
  onStartClick,
}) {
  const inputEl = useRef()
  const [select, setSelect] = useState(currentSelect)
  const [show, setShow] = useState(false)
  const [timer, setTimer] = useState(null)

  const handleClick = (i) => {
    setSelect(i)
    onSelect(i, type)
    setShow(false)
  }

  const handleChange = () => {
    const inputVal = inputEl.current.value
    setSelect(inputVal)
  }

  const handleKeyUp = (e) => {
    if (e.keyCode !== 13 || !inputEl?.current) return
    const event = e || window.event
    event.preventDefault()
    onSelect(select, type)
    inputEl.current.blur()
    return false
  }

  const handleSelectClick = (type) => {
    if (timer) clearTimeout(timer)
    onStartClick(type)
    setShow(!show)
    setTimer(
      setTimeout(() => {
        setShow(false)
      }, 3000),
    )
  }

  const handleMouseOver = () => {
    clearTimeout(timer)
    setTimer(null)
  }

  useEffect(() => {
    let _isMouted = true
    if (_isMouted) {
      setSelect(currentSelect)
    }
    return () => {
      _isMouted = false
      clearTimeout(timer)
    }
  }, [currentSelect, timer])

  const renderDropdownContent = (dropdownType) => {
    switch (dropdownType) {
      case mapDropdownType.CODE:
        return (
          <div className={s.select_wrap}>
            <input
              ref={inputEl}
              className={s.select_name}
              style={{ outline: 'none', border: 'none' }}
              placeholder="请输入编码"
              type="text"
              maxLength="15"
              value={select}
              onKeyUp={handleKeyUp}
              onChange={handleChange}
            />
          </div>
        )
      case mapDropdownType.COUNT:
        return (
          <div className={s.select_wrap}>
            <div className={s.select_wrap}>
              <input
                ref={inputEl}
                className={s.select_name}
                style={{ width: '90px', outline: 'none', border: 'none' }}
                type="number"
                value={select}
                onKeyUp={handleKeyUp}
                onBlur={() => onSelect(select, type)}
                onChange={handleChange}
              />
            </div>
            <p style={{ position: 'absolute', right: '-27px', bottom: '5px', fontWeight: 700 }}>
              x12
            </p>
          </div>
        )
      case mapDropdownType.WIDTH:
        return (
          <div className={s.select_wrap}>
            <div className={s.select_wrap}>
              <input
                ref={inputEl}
                className={s.select_name}
                style={{ width: '90px', outline: 'none', border: 'none' }}
                type="number"
                value={select}
                readOnly={true}
              />
            </div>
            <p style={{ position: 'absolute', right: '10px', bottom: '5px', fontWeight: 700 }}>
              mm
            </p>
          </div>
        )
      default:
        return (
          <div className={s.select_wrap}>
            <p className={s.select_name} onClick={() => handleSelectClick(type)}>
              {select}
              {list && (
                <CaretDownFilled
                  style={{ color: 'rgb(25, 50, 227)', transform: 'translateX(10px)' }}
                />
              )}
            </p>

            <ul
              style={{ display: show && list.length > 0 ? 'block' : 'none' }}
              onMouseOver={handleMouseOver}
              onMouseLeave={() => setShow(false)}
              onFocus={() => 0}>
              {list.map((i, index) => (
                <li key={index} onClick={() => handleClick(i)}>
                  <p>{i}</p>
                </li>
              ))}
            </ul>
          </div>
        )
    }
  }

  return (
    <div className={s.drop_down_wrap}>
      <div className={s.title}>{title}</div>
      {renderDropdownContent(type)}
    </div>
  )
}
