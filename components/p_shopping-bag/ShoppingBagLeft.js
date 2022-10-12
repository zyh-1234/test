import Link from 'next/link'
import OrderCard from '@/p_shopping-bag/OrderCard'
import s from './ShoppingBagLeft.module.css'

export default function ShoppingBagLeft({ orderList, handleAction, orderDesText }) {
  return (
    <div className={s.shopping_bag_left}>
      <div className={s.title}>
        <p>{orderDesText.title}</p>
        <Link href={orderDesText.toUrl}>
          <a className={s.back_shopping}>{orderDesText.backTo}</a>
        </Link>
      </div>
      <div className={s.shopping_cart_list}>
        {orderList.length ? (
          orderList.map((item) => <OrderCard key={item.id} data={item} onAction={handleAction} />)
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{orderDesText.des}</h1>
          </div>
        )}
      </div>
    </div>
  )
}
