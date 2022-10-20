import { notification } from 'antd'
import Dropdown from '@/Common/Dropdown'
import Loupe from '@/Common/Loupe'
import ProductQuestionsDes from './ProductQuestionsDes'
import { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addGoods } from 'actions/goods'
import { ShoppingCartOutlined, QuestionOutlined } from '@ant-design/icons'
import { mapDataToStoneList, mapDataToColorList, mapCodeToName } from 'utils/mapData'
import s from './ProductDetail.module.css'

const mapDropdownType = {
  CODE: 'code',
  COLOR: 'color',
  STONE: 'stone',
  SIZE: 'size',
  COUNT: 'count',
  LENGTH: 'length',
  WIDTH: 'width',
  CLIP: 'clip',
}

const ProductDetail = ({ setShowDetail, dataLists, addGoods }) => {
  const [currentProduct, setCurrentProduct] = useState(dataLists.xx[0]) //默认展示第一条
  const [showDes, setShowDes] = useState(false)
  const [size, setSize] = useState('9#')
  const [qty, setQty] = useState([
    { size: '7#', count: 0, id: 7 },
    { size: '8#', count: 0, id: 8 },
    { size: '9#', count: 0, id: 9 },
    { size: '10#', count: 0, id: 10 },
    { size: '11#', count: 0, id: 11 },
    { size: '12#', count: 0, id: 12 },
    { size: '4#', count: 0, id: 4 },
    { size: '5#', count: 0, id: 5 },
    { size: '6#', count: 0, id: 6 },
    { size: '13#', count: 0, id: 13 },
    { size: '14#', count: 0, id: 14 },
  ])
  const [count, setCount] = useState(0)
  const [dropdownList, setDropdownList] = useState([
    { title: '条码', type: 'code', list: [] },
    { title: '色系颜色', type: 'color', list: [] },
    { title: '石头颜色', type: 'stone', list: [] },
    { title: '尺寸大小', type: 'size', list: [] },
    // { title: '链身长度', type: 'length', list: [] },
    // { title: '夹片大小', type: 'clip', list: [] },
    { title: '选购数量', type: 'count', list: [] },
  ])

  const handleStartClick = (type) => {
    const _dropdownList = JSON.parse(JSON.stringify(dropdownList))
    switch (type) {
      case mapDropdownType.COLOR:
        _dropdownList.map((item) => {
          const currentStone = currentProduct.st.title_zh
          const allColor = mapDataToColorList(dataLists.xx, currentStone)
          if (item.type === type) {
            item.list = allColor
          }
        })
        setDropdownList(_dropdownList)
        return
      case mapDropdownType.STONE:
        _dropdownList.map((item) => {
          const currentColor = currentProduct.sx.title_zh
          const allStone = mapDataToStoneList(dataLists.xx, currentColor)
          if (item.type === type) {
            item.list = allStone
          }
        })
        setDropdownList(_dropdownList)
        return
      default:
        break
    }
  }

  const handleSelect = (sel, type) => {
    const allData = JSON.parse(JSON.stringify(dataLists.xx))
    switch (type) {
      case mapDropdownType.COLOR:
        allData.map((item) => {
          const currentStone = currentProduct.st.title_zh
          if (item.sx.title_zh === sel && item.st.title_zh === currentStone) {
            setCurrentProduct(JSON.parse(JSON.stringify(item)))
          }
        })
        return
      case mapDropdownType.STONE:
        allData.map((item) => {
          const currentColor = currentProduct.sx.title_zh
          if (item.sx.title_zh === currentColor && item.st.title_zh === sel) {
            setCurrentProduct(JSON.parse(JSON.stringify(item)))
          }
        })
        return
      case mapDropdownType.CODE:
        allData.findIndex((item) => item.code === sel) >= 0
          ? setCurrentProduct(
              JSON.parse(JSON.stringify(allData[allData.findIndex((item) => item.code === sel)])),
            )
          : notification.warn({
              message: '没有这个商品！',
              description: '请检查编码',
              duration: '3',
            })
        return
      case mapDropdownType.SIZE:
        setSize(sel)
        return
      case mapDropdownType.COUNT:
        setCount(Number(sel))

        setQty(
          ...[
            qty.map((i) => {
              if (i.size == size) {
                i.count = Number(sel)
              }
              return i
            }),
          ],
        )
        return
      default:
        break
    }
  }

  const addShoppingBag = () => {
    if (!count) {
      notification.warn({
        message: '加入购物车前，请填写购买数量！',
        duration: '3',
      })
      return
    }

    const price = Number(dataLists.price)
    const _currentProduct = JSON.parse(JSON.stringify(currentProduct))
    addGoods({ ..._currentProduct, qty, price, stamp: '', note: '', name: 110 })

    // 提示信息
    notification.success({
      message: '商品加入购物车成功^^！',
      description: '商品加入购物车成功！3s后自动关闭',
      duration: '3',
      onClick: () => {
        console.log('addShoppingBag')
      },
    })

    // 关闭详情
    setShowDetail(false)
  }

  return (
    <div className={s.content_box}>
      <div className={s.container}>
        <div className={s.close} onClick={() => setShowDetail(false)}>
          <img src="../../img/clear.png" alt="close" />
        </div>

        <div className={s.content_wrap}>
          <div className={s.content_left}>
            <p>{currentProduct.name}</p>
            <Loupe
              magnification={3}
              maxImg={currentProduct.img}
              img={currentProduct.img_s}
              title={currentProduct.title}
            />

            <p>{mapCodeToName(currentProduct.name)}</p>
          </div>
          <div className={s.content_right}>
            <div className={s.label}>
              <p>标签:</p>
              <p>
                <span>原石</span>
                <span>简约简约</span>
                <span>简约</span>
                <span>简约</span>
                <span>简约</span>
                <span>原石原石</span>
                <span>简约</span>
                <span>简约</span>
                <span>简约简约</span>
                <span>简约</span>
                <span>简约</span>
                <span>简约简约简约</span>
                <span>简约</span>
                <span>简约</span>
                <span>简约</span>
                <span>简约</span>
              </p>
            </div>

            <div className={s.dropdown_list}>
              {dropdownList.map((item, index) => (
                <Dropdown
                  key={`${item.type}-${index}`}
                  title={item.title}
                  type={item.type}
                  list={item.list}
                  currentSelect={
                    item.type === mapDropdownType.STONE
                      ? currentProduct.st.title_zh
                      : item.type === mapDropdownType.COLOR
                      ? currentProduct.sx.title_zh
                      : item.type === mapDropdownType.SIZE
                      ? '9#'
                      : currentProduct[item.type]
                  }
                  onSelect={(sel, type) => handleSelect(sel, type)}
                  onStartClick={handleStartClick}
                />
              ))}
            </div>
            <div className={s.des}>
              <p>对于批发商，购买的数量必须以打为单位，希望您可以理解。</p>
            </div>
          </div>
        </div>

        <div className={s.content_bottom}>
          <div className={s.question} onClick={() => setShowDes(!showDes)}>
            <QuestionOutlined />
          </div>
          <div className={s.shopping}>
            <ShoppingCartOutlined onClick={addShoppingBag} />
          </div>
        </div>

        <ProductQuestionsDes showDes={showDes} setShowDes={setShowDes} />
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({ orderList: state.orderReducer.orderList })

const mapDispathToProps = (dispatch) => bindActionCreators({ addGoods }, dispatch)

export default connect(null, mapDispathToProps)(ProductDetail)
