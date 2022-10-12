import MyTitle from '@/Common/MyTitle'
import Link from 'next/link'
import s from './HomeSearchMore.module.css'

export default function HomeSearchMore({ data }) {
  return (
    <div className={s.home_search_more_wrap}>
      <MyTitle title="搜索更多" />
      <div className={s.home_search_more_content}>
        {data.map((item, index) => (
          <Link href="/" key={`${index}`}>
            <a className={s.home_search_more}>
              <span>
                <img src={item.img} alt={item.title} />
              </span>
              <span>
                <strong>{item.title}</strong>
                <p>{item.des}</p>
              </span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
