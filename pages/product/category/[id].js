import Nav from '@/Common/Nav'
import ProductBanner from '@/p_product/ProductBanner'
import Toolbar from '@/Common/Toolbar'
import ProductCategory from '@/p_product/ProductCategory'
import ProductDetail from '@/p_product/ProductDetail'
import { getProductCategory } from 'core/service/product'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

export default function Goods() {
  const route = useRouter()
  const {
    query: { id },
  } = route
  const [data, setData] = useState()
  const [choose, setChoose] = useState({ id: 5, name: '按人气' })
  const [showDetail, setShowDetail] = useState(false)
  const [selectItem, setSelectItem] = useState('111')
  const [type, setType] = useState('')
  const chooseList = [
    { id: 1, name: '价格↑' },
    { id: 2, name: '价格↓' },
    { id: 3, name: '最新' },
    { id: 4, name: '相关' },
    { id: 5, name: '按人气' },
  ]

  const handleChange = (item) => {
    const _choose = Object.assign({}, item)
    console.log('choose', item)
    setChoose(_choose)
  }

  const handleFilterChange = (list) => {
    console.log(list)
    // 刷新数据
  }

  const handleSelectItem = (index) => {
    setSelectItem(index)
  }

  useEffect(() => {
    let _isMounted = true
    async function fetchData(id) {
      const res = await getProductCategory(id)
      if (_isMounted) {
        setData(res)
      }
    }

    setType(id == '10001' ? 'chain' : '')
    fetchData(id)

    return () => {
      _isMounted = false
    }
  }, [id])

  return (
    <>
      <Nav />
      <ProductBanner
        type={type}
        title={data && data.title}
        des="UNTARNISHED CHAINS"
        topBanner={data && data.topBanner}
        filterChange={(list) => handleFilterChange(list)}
      />
      <Toolbar choose={choose} chooseList={chooseList} onChange={handleChange} />
      <ProductCategory
        data={data}
        type={type}
        setShowDetail={setShowDetail}
        onSelectItem={handleSelectItem}
      />
      {showDetail ? (
        <ProductDetail
          setShowDetail={setShowDetail}
          title={data.title}
          dataLists={data.dataLists.filter((item) => item.id === selectItem)[0]}
          type={type}
        />
      ) : null}
    </>
  )
}
