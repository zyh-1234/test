import { memo } from 'react'
import s from './Suggest.module.css'

const Suggest = ({ data = [], submitSearch }) => {
  if (!data.length) return null
  return (
    <div className={s.suggest_wrap}>
      <ul className={s.container}>
        {data.map((item, idx) => (
          <li
            className={s.suggest_item}
            key={`search-suggest-${item + idx}`}
            onClick={() => submitSearch(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default memo(Suggest)
