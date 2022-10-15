import Link from 'next/link'
import ReactSlick from 'react-slick'
import s from './HomeBanner.module.css'

const HomeBanner = ({ data = {} }) => {
  const banners = [...data]
  const isSwiperable = !!(banners && banners.length)

  function CustomNextArrow(props) {
    const { onClick } = props
    return (
      <div className={s.next_wrap}>
        <p className={s.next} onClick={onClick} />
      </div>
    )
  }

  function CustomPrevArrow(props) {
    const { onClick } = props
    return (
      <div className={s.prev_wrap}>
        <p className={s.prev} onClick={onClick} />
      </div>
    )
  }
  const settings = {
    arrows: true,
    lazyLoad: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: isSwiperable,
    infinite: isSwiperable,
    swipe: isSwiperable,
    className: 'home-banners',
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }
  return (
    <div className={s.home_banners_wrap}>
      {/* 轮播 */}
      <ReactSlick {...settings}>
        {banners.map((item, index) => (
          <div key={`${index}-${item.id}`}>
            {/* 跳转链接 */}
            <Link href="/details/[id]" as={`/details/${item.id}`}>
              {/* banner图片 */}
              <img src={item.img} key={index} alt={item.ig} />
            </Link>
          </div>
        ))}
      </ReactSlick>
    </div>
  )
}

export default HomeBanner
