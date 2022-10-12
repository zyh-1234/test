import { memo } from 'react'
import s from './HomeMask.module.css'

function HomeMask() {
  return (
    <div className={s.home_mask_wrap}>
      <ul></ul>
    </div>
  )
}

export default memo(HomeMask)
