import { Progress } from 'antd'
import Link from 'next/link'
import s from './Overview.module.css'

export default function Overview({ data, userInfo, onClickEdit }) {
  const {
    title,
    sayHi,
    description,
    contactInfoContentText,
    orderInfoContentText,
    contactUsContentText,
  } = data

  const { lastname, fristname, userphone, useremail, order, contactUs } = userInfo
  const username = lastname + ' ' + fristname
  return (
    <div className={s.overview_wrap}>
      <div className={s.des}>
        <p>{title}</p>
        <p>
          {sayHi}, <strong>{lastname}</strong>!
        </p>
        <p>{description}</p>
      </div>
      <div className={s.userinfo_wrap}>
        <div className={s.title}>
          <p>{contactInfoContentText.title}</p>
          <p className={s.edit} onClick={() => onClickEdit('edit')}>
            {contactInfoContentText.edit}
          </p>
        </div>
        <div className={s.content}>
          <p>
            {contactInfoContentText.name}: {username}
          </p>
          <p>
            {contactInfoContentText.email}: {useremail}
          </p>
          <p>
            {contactInfoContentText.phone}: {userphone}
          </p>
        </div>
        <div className={s.more}>
          <p onClick={() => onClickEdit('more')}>{contactInfoContentText.more}</p>
        </div>
      </div>
      <div className={s.order_wrap}>
        <div className={s.title}>
          <p>{orderInfoContentText.title}</p>
        </div>
        <div className={s.content}>
          <p>
            {orderInfoContentText.des1}
            {order.createAt}
            {orderInfoContentText.des2}
          </p>
        </div>
        <div className={s.progress}>
          <Progress percent={34} strokeColor="#11ca2a" showInfo={false} />
          <div className={s.status}>
            {orderInfoContentText.status.map((item, index) => (
              <p key={`${item}-${index}`}>{item}</p>
            ))}
          </div>
        </div>
        <div className={s.orderInfodes}>
          <p>{orderInfoContentText.des3}</p>
          <p>{orderInfoContentText.history}</p>
        </div>
      </div>
      <div className={s.contactus_wrap}>
        <div className={s.title}>
          <p>{contactUsContentText.title}</p>
        </div>
        <div className={s.content}>
          <p>
            {contactUsContentText.name}:{contactUs.name}
          </p>
          <p>
            {contactUsContentText.email}:{contactUs.email}
          </p>
          <p>
            {contactUsContentText.phone}:{contactUs.phone}
          </p>
          <p>
            {contactUsContentText.wx}:{contactUs.wx}
          </p>
          <p>
            {contactUsContentText.otherQA}
            {contactUs.otherQA}
          </p>
          <p>
            {contactUsContentText.and.split('|')[0]}
            <Link href="/">
              <strong className={s.otherQA}>{contactUsContentText.and.split('|')[1]}</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
