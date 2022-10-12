import Link from 'next/link'
import s from './Footer.module.css'

export default function Footer({ config = {} }) {
  const { beian, copyright } = config
  return (
    <footer className={s.footer_wrap}>
      <div className={s.footer}>
        <img className={s.bg_1} src="../../img/footer_bg1.png" alt="bg_1" />
        <div className={s.footer_content}>
          <div className={s.logo}>
            <img src="https://www.fallon-fj.com/static/index/img/fallon_logo1.png" alt="logo" />
          </div>
          <div className={s.contact_detail}>
            <div className={s.wechat}>
              <div className={s.wechat_1}>
                <span style={{ textDecoration: 'underline' }}>
                  <Link href="/contact-us">CONTACT US</Link>
                </span>
                <span>email address: ansenn@fallon-fj.com</span>
              </div>
              <div className={s.wechat_2}>
                <span>Wechat or WhatsApp Us</span>
                <span className={s.wechat_img}>
                  <div>
                    <p>
                      <img src="../../img/qr1.png" alt="qr" />
                    </p>
                    <p>+86 13710368338 - AnSenn</p>
                  </div>
                  <div>
                    <p>
                      <img src="../../img/qr2.png" alt="qr" />
                    </p>
                    <p>+86 13710666688 - Anson</p>
                  </div>
                </span>
              </div>
              <div className={s.wechat_3}>
                <span>Mon-Sat 09:00-18:00 GMT+8</span>
              </div>
            </div>
            <div className={s.address_wrap}>
              <div className={s.title}>
                <p>Fallon Jewelry Co., Ltd.</p>
              </div>
              <div className={s.address}>
                <span>
                  <p>Head Office & Shop Add #1</p>
                  <p>
                    Floor 4, Jewelry Commercial Building Qin Yi, No.3 FuPing Road, Sha Tou Street,
                    Pan Yu District, Guangzhou, GuangDong Province, China
                  </p>
                </span>
                <span>
                  <p>Experience Store & Shop Add #2</p>
                  <p>
                    No.1071,Block B,Xijiao Building,Zhanqian Road, Liwan District, Guangzhou,
                    GuangDong, China
                  </p>
                </span>
                <span>
                  <p>{beian}</p>
                  <p>{copyright}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img className={s.bg_2} src="../../img/footer_bg2.png" alt="bg_2" />
      </div>
    </footer>
  )
}
