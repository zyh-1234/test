import Head from 'next/head'
import Nav from '@/Common/Nav'
import SendBox from '@/p_contact/SendBox'
import ServiceContent from '@/p_contact/ServiceContent'
import { getContactUs } from 'core/service/contact-us'
import { useEffect, useRef, useState } from 'react'
import s from './contact-us.module.css'

export default function ContactUs() {
  let addressRef = useRef()
  const [data, setData] = useState([])
  const [msg, setMsg] = useState({})
  const [showSendBox, setShowSendBox] = useState(false)
  const [showContentBox, setShowContentBox] = useState(false)

  const onSubmit = (values) => {
    console.log(values, msg)
    setMsg(values)
    setShowSendBox(false)
    // send msg
  }

  const fecthData = async () => {
    const res = await getContactUs()
    setData(res)
  }
  useEffect(() => {
    fecthData()
  }, [])

  return (
    <div className={s.contact_us_wrap}>
      <Head>
        <title>广州市佛隆首饰有限公司 | 联系我们</title>
      </Head>
      <Nav />
      <div className={s.content}>
        <div className={s.our_service}>
          <ul className={s.our_service_lists}>
            <li onClick={() => setShowContentBox(true)}>测试服务条款11</li>
            <li onClick={() => setShowContentBox(true)}>我们的条款23</li>
            <li onClick={() => setShowContentBox(true)}>为什么有条款22</li>
            <li onClick={() => setShowContentBox(true)}>测试条款11</li>
            <li onClick={() => setShowContentBox(true)}>我们的条款23</li>
            <li onClick={() => setShowContentBox(true)}>为什么有条款22</li>
          </ul>
        </div>
        <div className={s.contact}>
          <div className={s.title}>
            <p className={s.test}>CONTACT US</p>
            <p>
              Feel free to contact us with any requests, questions or feedbacks. We&apos;are very
              happy to answer, and assist any inquires you have.
            </p>
          </div>
          <div>
            {data
              ? data.map((item, index) =>
                  item.type == 'text' ? (
                    <div key={index} className={s.content_list}>
                      <div className={s.svg}>
                        <svg
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div className={s.title}>
                        <p>{item.title}</p>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  ) : item.type == 'send' ? (
                    <div key={index} className={s.content_list}>
                      {/* <div
                        className={s.svg}
                        onClick={() => setShowSendBox(true)}
                        style={{ cursor: 'pointer' }}>
                        <svg
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d={item.icon} />
                        </svg>
                      </div> */}
                      <div className={s.title}>
                        <p
                          onClick={() => setShowSendBox(true)}
                          style={{ cursor: 'pointer' }}
                          className={s.send_button}>
                          {item.title}
                        </p>
                        <p>
                          {item.des.split('|')[0]}
                          <i
                            onClick={() =>
                              window.scrollTo({
                                top: `${addressRef.offsetTop}`,
                                behavior: 'smooth',
                              })
                            }>
                            {item.des.split('|')[1]}
                          </i>
                        </p>
                      </div>
                    </div>
                  ) : item.type == 'wechat' ? (
                    <div key={index} className={s.content_list}>
                      <div className={s.svg}>
                        <svg
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div className={s.title}>
                        <p>{item.title}</p>
                        <p>{item.des}</p>
                        <div className={s.wechat_wrap}>
                          {item.lists.map((i, edx) => (
                            <div key={`${i.number}-${edx}`} className={s.wechat}>
                              <span>{i.number}</span>
                              <span>
                                <img src={i.qr} alt={i.number} />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : item.type == 'email' ? (
                    <div key={index} className={s.content_list}>
                      <div className={s.svg}>
                        <svg
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div className={s.title}>
                        <p>{item.title}</p>
                        <p>{item.des}</p>
                        {item.emails.map((email, emdx) => (
                          <div key={`${email}-${emdx}`} className={s.email}>
                            <span>{email}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : item.type == 'addresses' ? (
                    <div ref={(el) => (addressRef = el)} key={index} className={s.content_list}>
                      <div className={s.svg}>
                        <svg
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div className={s.title}>
                        <p>{item.title}</p>
                        <p>{item.des}</p>
                        {item.addresses.map((address, adx) => (
                          <div key={`${address.name}-${adx}`} className={s.addresses}>
                            <span className={s.address_name}>{address.name}</span>
                            <span>{address.des}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null,
                )
              : null}
          </div>
        </div>
      </div>
      <SendBox
        onFinish={(values) => onSubmit(values)}
        showSendBox={showSendBox}
        setShowSendBox={setShowSendBox}
      />
      <ServiceContent showContentBox={showContentBox} setShowContentBox={setShowContentBox} />
    </div>
  )
}
