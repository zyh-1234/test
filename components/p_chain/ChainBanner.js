import s from './ChainBanner.module.css'

export default function ChainBanner({ title, topBanner, des }) {
  return (
    <div className={s.chain_banner}>
      <div className={s.title}>
        <p>{title}</p>
        <div className={s.container}>
          <div className={s.title_bg} style={{ backgroundImage: `url(${topBanner})` }} />
          <p className={s.title_des}>{des}</p>
        </div>
      </div>
    </div>
  )
}
