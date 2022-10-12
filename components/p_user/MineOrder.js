import s from './MineOrder.module.css'

export default function MineOrder({ data }) {
  const { title, des } = data
  const orderDes = data.orderDes.split('|')
  return (
    <div className={s.mineorder_wrap}>
      <div className={s.head}>
        <p>{title}</p>
        <p>
          <span>{orderDes[0]} 2022082622AG144 即将处理 </span>
          <span>{orderDes[1]} 22 </span>
          <span>{orderDes[2]} 144 </span>
          <span>{orderDes[3]}</span>
        </p>
        <p>{des}</p>
      </div>
    </div>
  )
}
