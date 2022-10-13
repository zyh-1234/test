import Link from 'next/link'
import GoodsCard from '@/p_shopping-bags/GoodsCard'
import s from './ShoppingBagLeft.module.css'

export default function ShoppingBagLeft({ goodsList, handleAction, goodsDesText }) {
  return (
    <div className={s.shopping_bag_left}>
      <div className={s.title}>
        <p>{goodsDesText.title}</p>
        <Link href={goodsDesText.toUrl}>
          <a className={s.back_shopping}>{goodsDesText.backTo}</a>
        </Link>
      </div>
      <div className={s.shopping_cart_list}>
        {goodsList.length ? (
          goodsList.map((item) => <GoodsCard key={item.id} data={item} onAction={handleAction} />)
        ) : (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{goodsDesText.des}</h1>
          </div>
        )}
      </div>
    </div>
  )
}
