import Link from 'next/link'
import { UserOutlined } from '@ant-design/icons'
import s from './HeaderLoginBar.module.css'

export default function HeaderLoginBar({ data }) {
  const { title, and } = data
  return (
    <>
      <Link href="/login">
        <a>
          <div className={s.loginbar_wrap}>
            <div className={s.loginbar}>
              <div className={s.login_icon}>
                <UserOutlined />
              </div>
              <div className={s.login_title}>
                <p>
                  <u>{title}</u>
                  {and}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}
