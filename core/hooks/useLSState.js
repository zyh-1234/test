import { useState, useEffect } from 'react'
import useMounted from 'core/hooks/useMounted'
import store from 'store2'
/**
 * localStorage 同步State
 * @param {*} key 存储的键
 * @param {*} defaultVal 默认值
 */
const useLSState = (key, defaultVal = []) => {
  const hasMounted = useMounted()
  const [data, setData] = useState(defaultVal)
  const setter = (newData) => {
    console.log('setter', newData)
    setData(newData)
    store.set(key, newData)
  }

  useEffect(() => {
    // ls 没有数据则使用 defaultVal初始化
    if (store(key) === null) {
      setData(defaultVal)
      store.set(key, defaultVal)
    } else if (!hasMounted) {
      // ls 有数据则使用store数据更新state
      setData(store(key))
    }
  }, [key, defaultVal, hasMounted])

  // 返回数据和setter
  return [data, setter]
}

export default useLSState
