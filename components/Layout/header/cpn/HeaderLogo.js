import Link from 'next/link'
import s from './HeaderLogo.module.css'

export default function HeaderLogo({
  img = 'https://www.fallon-fj.com/static/index/img/fallon_logo1.png',
}) {
  return (
    <div className={s.logo_wrap}>
      <Link href="/">
        <a className={s.logo}>
          <img src={img} alt="logo" />
        </a>
      </Link>
    </div>
  )
}
