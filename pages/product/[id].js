import Nav from '@/Common/Nav'
import ProductBanner from '@/p_product/ProductBanner'
import Toolbar from '@/Common/Toolbar'
import ProductContent from '@/p_product/ProductContent'
import ProductDetail from '@/p_product/ProductDetail'
import { getProductCategory } from 'core/service/product'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import cache from 'utils/cache'

export default function Product() {
  const route = useRouter()
  const {
    query: { id },
  } = route
  const [data, setData] = useState()
  const [showDetail, setShowDetail] = useState(false)
  const [selectItem, setSelectItem] = useState('111')
  const [title, setTitle] = useState('')
  const handleChange = (item) => {
    console.log('choose', item)
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
      console.log('data', res.data)
      if (_isMounted) {
        setData(res.data)
        setTitle(cache.getCache('allCategory').filter((i) => i.id == id)[0].title_zh)
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
      <ProductBanner title={title} filterChange={(list) => handleFilterChange(list)} />
      <Toolbar onChange={handleChange} />
      <ProductContent data={data} setShowDetail={setShowDetail} onSelectItem={handleSelectItem} />
      {showDetail ? (
        <ProductDetail
          setShowDetail={setShowDetail}
          title={data.title}
          dataLists={data.filter((item) => item.id === selectItem)[0]}
        />
      ) : null}
    </>
  )
}
