import s from './LoginLeftInfo.module.css'

export default function LoginLeftInfo({ loginPageContent }) {
  return (
    <>
      <div className={s.title}>
        <p>{loginPageContent.title}</p>
        <p>{loginPageContent.des}</p>
      </div>
      <ul className={s.login_left_ul}>
        {loginPageContent.pageLeftInfo.map((item, index) => (
          <li key={`${item.title}-${index}`} className={s.login_left_ul_li}>
            <div className={s.icon}>
              <img src={item.icon} alt={item.title} />
            </div>
            <div className={s.content}>
              <p>{item.title}</p>
              <p>{item.des}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
