import { useState, useEffect, useMemo } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import throttle from 'lodash.throttle'
import Input from '@/Common/search/Input'
import History from '@/Common/search/History'
import Suggest from '@/Common/search/Suggest'
import Result from '@/Common/search/Result'
import { getSearchResult, getSearchSuggest, getHotPro } from 'core/service/search'
import useLSState from 'core/hooks/useLSState'
import s from './search.module.css'
import Nav from '@/Common/Nav'

const TYPES = {
  HISTORY: 'history',
  SUGGEST: 'suggest',
  RESULT: 'result',
}
export default function Search({ result, hotWord, kw }) {
  const router = useRouter()
  const [contType, setContType] = useState(kw ? TYPES.RESULT : TYPES.HISTORY)
  const [loading, setLoading] = useState(false)
  const [suggestList, setSuggestList] = useState([])
  const [inputVal, setInputVal] = useState(kw || '')
  const [history, setHistory] = useLSState('searchHistory', kw ? [kw] : [])

  const submitSearch = (kw = '') => {
    history.unshift(kw)
    const _history = [...new Set(history.slice(0, 6))]
    setHistory(_history)
    // 切换为结果类型
    setContType(TYPES.RESULT)
    // 加载中
    setLoading(true)
    // 替换路由参数
    console.log('切换路由', kw)
    setInputVal(kw)
    router.replace({
      path: '/search',
      query: {
        kw,
      },
    })
  }

  const fetchSuggest = useMemo(
    () =>
      throttle(async (kw = '') => {
        console.log('fetchSuggest', kw)
        if (contType !== TYPES.SUGGEST) setContType(TYPES.SUGGEST)
        const res = (await getSearchSuggest(kw)) || []
        setSuggestList(res)
      }, 1000),
    [contType, setContType, setSuggestList],
  )

  const renderContent = () => {
    if (loading) return <div className={s.loading}>加载中......</div>
    switch (contType) {
      case TYPES.HISTORY:
        return (
          <History
            submitSearch={submitSearch}
            hotWord={hotWord}
            history={history}
            deleteHistory={() => setHistory([])}
          />
        )
      case TYPES.SUGGEST:
        return <Suggest submitSearch={submitSearch} data={suggestList} />
      case TYPES.RESULT:
        return <Result data={result} kw={kw} />
      default:
        break
    }
  }

  const showHistory = () => {
    setContType(TYPES.HISTORY)
  }

  // result数据加载结束清空loading状态
  useEffect(() => {
    setLoading(false)
  }, [result])

  return (
    <>
      <Head>
        <title>搜索</title>
      </Head>
      <Nav />
      <div className={s.search_wrap}>
        <Input
          keyword={kw}
          submitSearch={submitSearch}
          fetchSuggest={fetchSuggest}
          showHistory={showHistory}
          inputVal={inputVal}
          setInputVal={setInputVal}
        />
        <div className={s.content}>{renderContent()}</div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const { kw = '' } = query
  let result = []
  let hotWord = []

  if (kw && kw.trim()) {
    // 热门产品 & 搜索结果
    const [resultRes, hotWordRes] = await Promise.allSettled([getSearchResult(kw), getHotPro()])
    result = resultRes.value
    hotWord = hotWordRes.value
  } else {
    // 热门产品
    hotWord = await getHotPro()
  }

  return {
    props: {
      result: result,
      hotWord: hotWord,
      kw,
    },
  }
}
