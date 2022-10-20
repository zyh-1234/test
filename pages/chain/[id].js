import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { getProductCategory } from 'core/service/product'

import Nav from '@/Common/Nav'
import ChainBanner from '@/p_chain/ChainBanner'
import Toolbar from '@/Common/Toolbar'
import ChainContent from '@/p_chain/ChainContent'
import ChainDetail from '@/p_chain/ChainDetail'

export default function Chain() {
  const route = useRouter()
  const {
    query: { id },
  } = route
  const [data, setData] = useState()
  const [showDetail, setShowDetail] = useState(false)
  const [selectItem, setSelectItem] = useState('111')
  const handleChange = (item) => {
    console.log('choose', item)
  }

  const handleSelectItem = (index) => {
    setSelectItem(index)
  }

  useEffect(() => {
    let _isMounted = true
    async function fetchData(id) {
      const res = await getProductCategory(id)
      console.log('chain', res)
      if (_isMounted) {
        setData(res.data)
      }
    }

    fetchData(id)

    return () => {
      _isMounted = false
    }
  }, [id])

  return (
    <>
      <Nav />
      <ChainBanner
        title="链条"
        des="UNTARNISHED CHAINS"
        topBanner="../../../../img/hexinjisu.png"
      />
      <Toolbar onChange={handleChange} />
      <ChainContent data={data} setShowDetail={setShowDetail} onSelectItem={handleSelectItem} />
      {showDetail ? (
        <ChainDetail
          setShowDetail={setShowDetail}
          title={data.title}
          dataLists={data.filter((item) => item.id === selectItem)[0]}
        />
      ) : null}
    </>
  )
}
