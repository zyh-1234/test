import s from './HomeCustomise.module.css'

export default function HomeCustomise() {
  const data = [
    {
      icon: '../../img/icon2.png',
      title: '环保无害',
      des: '产品不含有镍，健康而且不过敏',
    },
    {
      icon: '../../img/icon3.png',
      title: '经久耐戴',
      des: '佛隆产品几乎不氧化或变暗褪色',
    },
    {
      icon: '../../img/icon1.png',
      title: '定制服务',
      des: '请联系我们以定制你想要的款式',
    },
  ]
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
