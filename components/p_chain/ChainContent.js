import Filtration from '@/Common/Filtration'
import ChainCard from '@/p_chain/ChainCard'
import s from './ChainContent.module.css'

export default function ChainContent({ data, setShowDetail, onSelectItem }) {
  const handleClick = (id) => {
    onSelectItem(id)
    setShowDetail(true)
  }

  return (
    <div className={s.container}>
      <div className={s.detail}>
        <div className={s.filter}>
          <Filtration />
        </div>
        <div className={s.chain_page_style}>
          <div className={s.result}>
            <p>找到{(data && data.length) || 0}个可定制的产品</p>
          </div>
          <ul className={s.ul_box}>
            {data && data.length
              ? data.map((item, index) => (
                  <li key={`${item.id}-${index}`} onClick={() => handleClick(item.id)}>
                    <a>
                      <ChainCard data={item} />
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
