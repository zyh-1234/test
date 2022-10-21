import { useEffect, useState } from 'react'
import Link from 'next/link'
import s from './Nav.module.css'
// import { asyncQueryNavData } from 'actions/nav'
import cache from 'utils/cache'
import { getNavData } from 'core/service/nav'

const Nav = () => {
  const [showMask, setShowMask] = useState(false)
  const [showMaskImg, setShowMaskImg] = useState('../../img/14k.jpg')
  const [showNavData, setShowNavData] = useState({ data: [{ name: '', img: '', url: '', id: 0 }] })
  const [navData, setNavData] = useState(null)

  const handleMouseMove = (item) => {
    if (!item.data.length) return
    const _item = JSON.parse(JSON.stringify(item))
    setShowNavData(_item)
    setShowMask(true)
    setShowMaskImg(_item.defaultImg)
  }

  const handleLiMouseMove = (index) => {
    const url = showNavData.data.filter((i) => i.id == index)
    url[0].img ? setShowMaskImg(url[0].img) : setShowMaskImg(showNavData.defaultImg)
  }

  const handleMouseOut = () => {
    setShowMask(false)
  }

  useEffect(() => {
    ;(async () => {
      const data = cache.getCache('allCategory')
      const mergeData = await Promise.all(
        data.map((item) => {
          return (async () => {
            const res = await getNavData(item.id)
            return {
              type: item.title_en,
              id: item.id,
              name: item.title_zh,
              defaultImg: res[0] ? res[0].img : '',
              data: res.map((i) => ({
                name: i.title_zh,
                img: i.img,
                url: '/',
                id: i.id,
              })),
            }
          })()
        }),
      )
      console.log('nav data: ', mergeData)
      setNavData(mergeData)
    })()
  }, [])

  return (
    <div className={s.home_nav_wrap}>
      <div className={s.home_nav}>
        <ul>
          {navData &&
            navData.map((item, index) => (
              <li
                className={s.home_nav_item}
                key={`${item.id}-${index}`}
                onMouseMove={() => handleMouseMove(item)}
                onMouseLeave={() => setShowMask(false)}>
                <span
                  className={item.id === showNavData.id ? 'curNav' : ''}
                  onClick={() => setShowMask(false)}>
                  {item.type === 'Necklace' ? (
                    <Link
                      href={{ pathname: '/chain/[id]', query: { type: '' } }}
                      as={`/chain/${item.id}?type=${item.type}`}>
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={{ pathname: '/product/[id]', query: { type: '' } }}
                      as={`/product/${item.id}?type=${item.type}`}>
                      {item.name}
                    </Link>
                  )}
                </span>
              </li>
            ))}
        </ul>
      </div>
      <div
        className={s.mask_wrap}
        style={{ height: showMask ? '200vh' : '0', opacity: showMask ? '1' : 0 }}>
        <div
          className={s.mask}
          style={{ height: showMask ? '200vh' : '0', opacity: showMask ? '1' : 0 }}>
          <div
            className={s.position}
            style={{ transform: showMask ? 'translateY(0)' : 'translateY(-800px)' }}
            onBlur={() => 0}
            onFocus={() => 0}
            onMouseOver={() => setShowMask(true)}
            onMouseOut={() => handleMouseOut()}>
            <div className={s.ul_content_wrap}>
              <ul className={s.ul_content}>
                {showNavData.data.map((item, index) => (
                  <li
                    key={index}
                    className={s.li_item}
                    onMouseMove={() => handleLiMouseMove(item.id)}>
                    <Link href="/">
                      <div className={s.hot_wrap}>
                        <a>{item.name}</a>
                        {item.hot && item.hot == 1 && (
                          <div className={s.hot}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1024 1024"
                              version="1.1">
                              <path
                                d="M408.576 448.192v-0.448a419.328 419.328 0 0 0-0.1792-6.9248v0.2816l-0.0128-1.088a76.6208 76.6208 0 0 1-0.0384-2.24 122.752 122.752 0 0 1 0.32-7.7184l-0.128 1.7152 0.192-2.688c1.1776-13.9904 4.992-31.3344 10.7904-49.2288 9.5872-27.5456 26.112-57.2672 52.2752-79.1808C506.8672 271.296 557.312 256 607.6544 256c5.7344 0 11.0208 2.8544 13.888 7.488 2.8672 4.6336 2.88 10.3424 0.0256 14.976-1.9712 3.2768-86.2208 81.7536 11.5584 137.344C671.9104 437.8624 729.6 495.68 729.6 564.608c0 54.016-22.6304 104.9856-63.7312 143.5008C624.6784 746.7264 570.0224 768 512 768c-57.792 0-112.4608-21.5808-153.9072-60.7488a206.6304 206.6304 0 0 1-46.5536-64.6912A186.9312 186.9312 0 0 1 294.4 564.608c0-52.3264 26.2912-110.3488 62.8992-119.4112l0.1792 10.9568c0.0896 3.4432 0.256 6.784 0.4864 10.1504l0.576 6.8096c0.3328 3.4432 0.768 6.976 1.28 10.7136l1.152 7.7824 1.408 8.4992 0.8064 4.5952 1.8176 9.9584c1.6384 8.832 4.1984 18.8544 7.68 30.1824a25.6 25.6 0 0 0 48.9472-15.0272 227.8912 227.8912 0 0 1-6.2976-24.512l-2.3424-13.0304-1.2544-7.5136-1.024-6.784a286.528 286.528 0 0 1-0.4352-3.1744l-0.6912-6.016-0.512-5.6832a181.6832 181.6832 0 0 1-0.1536-2.3936l-0.2176-4.9664-0.128-6.6176v-0.9344z"
                                fill="#FF0808"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={s.img_wrap}>
                <p
                  style={{
                    backgroundImage: `url(${showMaskImg})`,
                    width: `${showNavData.type === 'chain' ? '800px' : '300px'}`,
                  }}
                />
              </div>
            </div>
            <div className={s.title}>
              {showNavData.type === 'chain' ? (
                <p>
                  我们的链条永不褪色，拥有核心技术。
                  <Link href="/about-us">
                    <a>
                      <i style={{ textDecoration: 'underline' }}>为什么？</i>
                    </a>
                  </Link>
                </p>
              ) : (
                <p>了解更多更多</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({ navData: state.navDataReducer.navData })

// const mapDispatchToProps = (dispatch) => bindActionCreators({ asyncQueryNavData }, dispatch)

// export default connect(mapStateToProps, mapDispatchToProps)(Nav)

export default Nav
