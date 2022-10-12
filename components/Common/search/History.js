import Link from 'next/link'
import s from './History.module.css'

export default function History({ history, hotWord, deleteHistory, submitSearch }) {
  const renderHotItem = (item, index) => {
    // type = 2, 详情页面,
    // type = 1, 词汇
    const text = item.title.slice(0, 6)
    const prefix = '/product/detail/'
    if (item.type === 2) {
      return (
        <Link key={`hot-item-${index}`} href={`${prefix}[id]`} as={`${prefix}${item.id}`}>
          <a className={s.item}>{text}</a>
        </Link>
      )
    }
    return (
      <span key={`hot-item-${index}`} className={s.item} onClick={() => submitSearch(text)}>
        {text}
      </span>
    )
  }

  return (
    <>
      {hotWord && hotWord.length > 0 ? (
        <section className={s.container}>
          <div className={s.hot_head}>热门搜索</div>
          <div className={s.content}>
            {hotWord.slice(0, 10).map((item, index) => renderHotItem(item, index))}
          </div>
        </section>
      ) : null}

      <section className={s.container}>
        <div className={`${s.history_head} border-b-1px`}>
          <span>搜索历史</span>
          <button
            className={s.del}
            onClick={() => {
              document.activeElement.blur() // 收起虚拟键盘
              if (history.length) {
                deleteHistory()
              }
            }}>
            <img className={s.clean} src="/img/clean.png" alt="" />
          </button>
        </div>
        <div className={s.content}>
          {history && history.length > 0
            ? history.map((item, index) => (
                <div className={s.list} key={index} onClick={() => submitSearch(item)}>
                  {item}
                </div>
              ))
            : null}
        </div>
      </section>
    </>
  )
}
