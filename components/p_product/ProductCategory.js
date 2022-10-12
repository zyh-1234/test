import Filtration from '@/Common/Filtration'
import ProductCard from '@/p_product/ProductCard'
import ChainCard from '@/p_chain/ChainCard'
import s from './ProductCategory.module.css'

export default function ProductCategory({ type, data, setShowDetail, onSelectItem }) {
  const handleClick = (id) => {
    onSelectItem(id)
    setShowDetail(true)
  }

  return (
    <div className={s.container}>
      <div className={s.detail}>
        {type === 'chain' && (
          <div className={s.filter}>
            <Filtration />
          </div>
        )}
        <div className={`${s.product_list_fix} ${type === 'chain' ? 'chain_page_style' : ''}`}>
          <div className={s.result}>
            <p>找到{(data && data.dataLists && data.dataLists.length) || 0}个可定制的产品</p>
          </div>
          <ul className={s.ul_box}>
            {data && data.dataLists && data.dataLists.length
              ? data.dataLists.map((item, index) => (
                  <li key={`${item.id}-${index}`} onClick={() => handleClick(item.id)}>
                    <a>
                      {type === 'chain' ? <ChainCard data={item} /> : <ProductCard data={item} />}
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
