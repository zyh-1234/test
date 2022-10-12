import MyTitle from '@/Common/MyTitle'
import Link from 'next/link'
import ReactSlick from 'react-slick'
import s from './HomeCollection.module.css'

export default function HomeCollection({ data }) {
  function CustomNextArrow(props) {
    const { onClick } = props
    return <div className={s.next} onClick={onClick} />
  }

  function CustomPrevArrow(props) {
    const { onClick } = props
    return <div className={s.prev} onClick={onClick} />
  }
  const settings = {
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    className: 'home-collections',
    swipe: true,
  }
  return (
    <div className={s.home_collection_wrap}>
      <div className={s.home_collection}>
        <MyTitle title={data.title} />
        <div className={s.home_collection_content}>
          <ReactSlick {...settings}>
            {data.lists.map((item, index) => (
              <Link
                key={`${index}-${item.colId}`}
                href="/collection/[colId]"
                as={`/collection/${item.colId}`}>
                <div className={s.img_wrap}>
                  <p className={s.img}>
                    <img src={item.img} alt={item.title} className={s.slick} />
                  </p>
                  <p className={s.title}>{item.title}</p>
                </div>
              </Link>
            ))}
          </ReactSlick>
        </div>
      </div>
    </div>
  )
}
