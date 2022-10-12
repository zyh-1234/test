import Filter from './Filter'
import s from './ProductBanner.module.css'

export default function ProductBanner({ type, title, des, topBanner, filterChange }) {
  return (
    <>
      {type === 'chain' ? (
        <div className={s.chain_banner}>
          <div className={s.title}>
            <p>{title}</p>
            <div className={s.container}>
              <div className={s.title_bg} style={{ backgroundImage: `url(${topBanner})` }} />
              <p className={s.title_des}>{des}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={s.banner}>
          <div className={s.title}>
            <p>{title}</p>
          </div>
          <Filter choose={(list) => filterChange(list)} />
        </div>
      )}
    </>
  )
}
