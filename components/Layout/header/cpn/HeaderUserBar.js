import Link from 'next/link'
import { Avatar } from 'antd'
import s from './HeaderUserBar.module.css'

export default function HeaderUserBar({ text, userInfo }) {
  const { avatarImg = '', fristname = '', lastname = '' } = userInfo
  const username = lastname + ' ' + fristname
  return (
    <>
      <Link href="/user">
        <a>
          <div className={s.userbar_wrap}>
            <div className={s.userbar}>
              <div className={s.user_icon}>
                <Avatar size="small" src={avatarImg} />
              </div>
              <div className={s.user_title}>
                <p>
                  {text}, {username}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}
