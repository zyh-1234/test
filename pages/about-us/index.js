import React, { Component } from 'react'
import Head from 'next/head'
import { getAboutUs } from 'core/service/about-us'
import s from './aboutUs.module.css'

class AboutUs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }
  imgRef = { 0: React.createRef(), 1: React.createRef(), 2: React.createRef() }

  handleClick = (index) => {
    const top = `${this.imgRef[index].offsetTop + 100}`
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    })
  }

  fecthData = async () => {
    const res = await getAboutUs()
    this.setState({ data: res })
  }

  componentDidMount() {
    this.fecthData()
  }
  render() {
    return (
      <div className={s.about_us_wrap}>
        <Head>
          <title>广州市佛隆首饰有限公司 | 关于我们</title>
        </Head>
        {this.state.data ? (
          <>
            <div className={s.nav}>
              {this.state.data.map((nav, index) => (
                <p key={`${nav.title}-${index}`} onClick={() => this.handleClick(index)}>
                  {nav.title}
                </p>
              ))}
            </div>
            <div className={s.about_content_wrap}>
              {this.state.data.map((item, index) => (
                <div
                  ref={(el) => (this.imgRef[`${index}`] = el)}
                  key={`${item.title}-${index}`}
                  className={s.about_content}>
                  <div className={s.banner_img}>
                    <img
                      style={{ display: item.bannerImg ? 'block' : 'none' }}
                      src={item.bannerImg}
                      alt={item.title}
                    />
                  </div>
                  {item.bannerImg && (
                    <div
                      className={s.fj_icon}
                      style={{ backgroundImage: 'url(../../../../img/fj_icon_bottom.png)' }}
                    />
                  )}

                  <div className={s.content}>
                    <p className={s.title}>{item.title}</p>
                    <p className={s.des}>{item.des}</p>
                  </div>

                  {item.bannerList.length ? (
                    <div className={s.child_img_wrap}>
                      {item.bannerList.map((banner, index) => (
                        <div key={index} className={s.banner_list}>
                          <div className={s.color_name}>
                            <p>{banner.color}</p>
                          </div>
                          <div className={s.child_img_img}>
                            <p style={{ backgroundImage: `url(${banner.img})` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    )
  }
}

export default AboutUs
