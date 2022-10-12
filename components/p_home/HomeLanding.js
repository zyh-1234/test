import LandingCard from '@/Common/LandingCard'
import s from './HomeLanding.module.css'

export default function HomeLanding({ data }) {
  return (
    <div className={s.home_landing_wrap}>
      <div className={s.home_landing}>
        {data.map((item, index) => (
          <LandingCard data={item} key={index} />
        ))}
      </div>
    </div>
  )
}
