import Link from 'next/link'
import s from './HeaderNavBar.module.css'

export default function HeaderNavBar({ menus }) {
  return (
    <div className={s.loginbar_wrap}>
      {menus.map((item, index) => (
        <div key={`${index}-${item.title}`} className={s.about_us}>
          <Link href={`${item.href}`}>
            <a>
              <p className={s.about_us_icon} style={{ backgroundImage: `url("${item.url}")` }}></p>
              <span>{item.title}</span>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
