import s from './HomeCustomise.module.css'

export default function HomeCustomise({ data }) {
  return (
    <div className={s.home_customise_wrap}>
      <div className={s.home_customise}>
        {data.map((item, index) => (
          <div className={s.child_box} key={index}>
            <div className={s.left}>
              <img src={item.icon} alt={item.title} />
            </div>
            <div className={s.right}>
              <p className={s.title}>{item.title}</p>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
