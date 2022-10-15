import ProductCard from '@/p_product/ProductCard'
import s from './ProductContent.module.css'

export default function ProductContent({ data, setShowDetail, onSelectItem }) {
  const handleClick = (id) => {
    onSelectItem(id)
    setShowDetail(true)
  }

  return (
    <div className={s.container}>
      <div className={s.detail}>
        <div className={s.product_list_fix}>
          <div className={s.result}>
            <p>找到{(data && data.dataLists && data.dataLists.length) || 0}个可定制的产品</p>
          </div>
          <ul className={s.ul_box}>
            {data && data.dataLists && data.dataLists.length
              ? data.dataLists.map((item, index) => (
                  <li key={`${item.id}-${index}`} onClick={() => handleClick(item.id)}>
                    <a>
                      <ProductCard data={item} />
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  )
}
