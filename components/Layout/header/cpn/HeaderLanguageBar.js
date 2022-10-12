import Link from 'next/link'
import s from './HeaderLanguageBar.module.css'

export default function HeaderLanguageBar({ language }) {
  return (
    <div className={s.language_wrap}>
      {language.map((item, index) => (
        <Link key={`${index}-${item}`} href="/">
          <p className={s.language}>{item}</p>
        </Link>
      ))}
    </div>
  )
}
