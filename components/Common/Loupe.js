import { useState } from 'react'
import s from './Loupe.module.css'

/**
 * 放大镜:loupe
 * 放大倍率 magnification
 * 原视图 baseWidth
 * 放大视图 zoomWidth
 */
export default function Loupe({
  maxImg,
  img,
  title = 'loupe image',
  magnification = 3,
  baseWidth = 358,
  baseHeight = 358,
  loupeWidth = 358,
  imgPositionX = '-390px',
  transform = 'none',
}) {
  const zoomWidth = baseWidth * magnification
  const zoomHeight = baseHeight * magnification

  const [showLoupe, setShowLoupe] = useState(false) //显示放大镜
  const [position, setPosition] = useState({ x: 0, y: 0 }) //跟随位置

  const handleMouseEnter = () => {
    setShowLoupe(true)
  }

  const handleMouseOut = () => {
    setShowLoupe(false)
  }

  const handleMouseMove = (e) => {
    let _x = -e.nativeEvent.offsetX
    let _y = -e.nativeEvent.offsetY
    if (transform == 'none') {
      setPosition({ x: _y, y: _x })
    } else {
      setPosition({ x: _x, y: _y })
    }
  }

  return (
    <div className={s.loupe_wrap}>
      <div
        style={{
          maxWidth: `${baseWidth}px`,
          minWidth: `${baseWidth}px`,
          height: `${baseHeight}px`,
        }}>
        <div
          style={{
            transform: transform,
            maxWidth: `${baseWidth}px`,
            minWidth: `${baseWidth}px`,
            height: `${baseHeight}px`,
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <i
          className={s.move_box}
          onMouseEnter={() => handleMouseEnter()}
          onMouseMove={(e) => handleMouseMove(e)}
          onMouseOut={() => handleMouseOut()}
          onBlur={() => 0}></i>
        {showLoupe && (
          <i
            className={s.img_hover}
            style={{
              top: transform == 'none' ? `${-25 - position.x}px` : `${-25 - position.y}px`,
              left: transform == 'none' ? `${-25 - position.y}px` : `${-25 - position.x}px`,
              opacity: showLoupe ? 0.3 : 0,
            }}></i>
        )}
      </div>

      <div
        className={s.img_max}
        style={{
          zIndex: 98,
          opacity: showLoupe ? 1 : 0,
          left: showLoupe ? imgPositionX : '-200px',
          width: `${loupeWidth}px`,
          height: `${loupeWidth}px`,
          overflow: 'hidden',
        }}>
        <div
          style={{
            width: `${zoomWidth}px`,
            height: `${zoomHeight}px`,
            transform:
              transform === 'none'
                ? `translate(${position.y * magnification + loupeWidth / 2}px ,${
                    position.x * magnification + loupeWidth / 2
                  }px)`
                : `translate(${position.x * magnification + loupeWidth / 2}px ,${
                    position.y * magnification + loupeWidth / 2
                  }px)`,
          }}>
          <div
            style={{
              transform: transform,
              width: `${zoomWidth}px`,
              height: `${zoomHeight}px`,
              backgroundImage: `url(${maxImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>

        <div className={s.loupe_title}>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}
