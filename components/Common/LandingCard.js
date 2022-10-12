import Link from 'next/link'
import { useState } from 'react'
import s from './LandingCard.module.css'

export default function LandingCard({ data }) {
  const { title, img, subTitleLists } = data
  const [showHover, setShowHover] = useState(false)

  return (
    <div
      className={s.landing_card_wrap}
      onMouseMove={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}>
      <Link href="/">
        <img src={img} alt={title} />
      </Link>
      <div
        className={s.isHover}
        style={{ backgroundColor: showHover ? 'rgba(104, 104, 104, 0.1)' : 'transparent' }}></div>
      <div className={s.content}>
        <p className={s.title}>{title}</p>
        <ul>
          {subTitleLists.map((list, index) => (
            <Link href="/" key={index}>
              <li className={s.subTitle} key={index}>
                {list.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
