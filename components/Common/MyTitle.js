import s from './MyTitle.module.css'

export default function MyTitle({ title }) {
  return (
    <div className={s.wrap}>
      <p className={s.title}>{title}</p>
    </div>
  )
}
