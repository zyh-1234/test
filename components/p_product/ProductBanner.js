import Filter from './Filter'
import s from './ProductBanner.module.css'

export default function ProductBanner({ title, filterChange }) {
  return (
    <div className={s.banner}>
      <div className={s.title}>
        <p>{title}</p>
      </div>
      <Filter choose={(list) => filterChange(list)} />
    </div>
  )
}
