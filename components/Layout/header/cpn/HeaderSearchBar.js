import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './HeaderSearchBar.module.css'

export default function HeaderSearchBar({ searchText }) {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            opacity: pathname.replace('/', '') === 'search' ? 0 : 1,
          }}>
          <div className={s.search_wrap}>
            <div className={s.search}>
              <p>{searchText}</p>
            </div>
            <div className={s.search_icon}>
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M789.804097 737.772047 742.865042 784.699846 898.765741 940.600545 945.704796 893.672746ZM456.92259 82.893942c-209.311143 0-379.582131 170.282245-379.582131 379.582131s170.270988 379.570875 379.582131 379.570875c209.287607 0 379.558595-170.270988 379.558595-379.570875S666.210197 82.893942 456.92259 82.893942zM770.128989 462.477097c0 172.721807-140.508127 313.229934-313.206398 313.229934-172.720783 0-313.229934-140.508127-313.229934-313.229934s140.508127-313.229934 313.229934-313.229934C629.620861 149.247162 770.128989 289.75529 770.128989 462.477097z"></path>
              </svg>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}
