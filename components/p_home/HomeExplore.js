import MyTitle from '@/Common/MyTitle'
import Link from 'next/link'
import s from './HomeExplore.module.css'

export default function HomeExplore({ data }) {
  const { exploreImgLists } = data
  return (
    <div className={s.home_explore_wrap}>
      <MyTitle title="主题展示" />
      <div className={s.home_explore_img_list}>
        {exploreImgLists.map((item, index) => (
          <div key={index} className={s.explore_img}>
            <Link href="/">
              <a>
                <img src={item.img} alt={item.url} />
                <p>{item.title}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
