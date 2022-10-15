import { notification } from 'antd'
import Dropdown from '@/Common/Dropdown'
import Loupe from '@/Common/Loupe'
import ProductQuestionsDes from '@/p_product/ProductQuestionsDes'
import { ShoppingCartOutlined, QuestionOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addGoods } from 'actions/goods'
import s from './ChainDetail.module.css'

const mapDropdownType = {
  CODE: 'code',
  COLOR: 'color',
  STONE: 'stone',
  SIZE: 'size',
  COUNT: 'count',
  LENGTH: 'length',
  WIDTH: 'width',
}

const ChainDetail = ({ setShowDetail, dataLists, addGoods }) => {
  const [currentProduct, setCurrentProduct] = useState(dataLists.xx[0]) //默认展示第一条
  const [showDes, setShowDes] = useState(false)
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(currentProduct.length)

  const [dropdownChainList, setDropdownChainList] = useState([
    { title: '条码', type: 'code', list: [] },
    { title: '色系颜色', type: 'color', list: [] },
    { title: '链身长度', type: 'length', list: ['40', '50', '60'] },
    { title: '链身宽度', type: 'width', list: [] },
    { title: '选购数量', type: 'count', list: [] },
  ])

  const handleChainStartClick = (type) => {
    const _dropdownChainList = JSON.parse(JSON.stringify(dropdownChainList))
    switch (type) {
      case mapDropdownType.COLOR:
        _dropdownChainList.map((item) => {
          const allColor = dataLists.xx.map((i) => i.sx.title_zh)
          if (item.type === type) {
            item.list = allColor
          }
        })
        setDropdownChainList(_dropdownChainList)
        return
      default:
        break
    }
  }

  const handleChainSelect = (sel, type) => {
    const allData = JSON.parse(JSON.stringify(dataLists.xx))
    switch (type) {
      case mapDropdownType.COLOR:
        allData.map((item) => {
          if (item.sx.title_zh === sel) {
            setCurrentProduct(JSON.parse(JSON.stringify(item)))
          }
        })
        return
      case mapDropdownType.LENGTH:
        setLength(sel)
        return
      case mapDropdownType.CODE:
        handleSelect(sel, type)
        return
      case mapDropdownType.COUNT:
        setCount(Number(sel))
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
        return
      case mapDropdownType.COUNT:
        setCount(Number(sel))
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
    addGoods({
      ..._currentProduct,
      qty: [{ size: { width: 2, length }, count }],
      price,
      stamp: '',
      note: '',
      type: 'chain',
      name: 110,
    })

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

        <div className={s.chain_content_wrap}>
          <div className={s.title}>{currentProduct.title}</div>
          <div className={s.head_img}>
            <Loupe
              baseWidth={680}
              baseHeight={170}
              magnification={3}
              maxImg={currentProduct.img}
              img={currentProduct.img_s}
              title={currentProduct.title}
            />
          </div>
          <div className={s.chain_choose_list_wrap}>
            {dropdownChainList.map((item, index) => (
              <div className={s.chain_choose_list} key={`${item.title}-${index}`}>
                <Dropdown
                  title={item.title}
                  type={item.type}
                  list={item.list}
                  currentSelect={
                    item.type === mapDropdownType.COLOR
                      ? currentProduct.sx.title_zh
                      : item.type === mapDropdownType.WIDTH
                      ? '2'
                      : currentProduct[`${item.type}`]
                  }
                  onSelect={(sel, type) => handleChainSelect(sel, type)}
                  onStartClick={handleChainStartClick}
                />
              </div>
            ))}
          </div>
          <div className={s.des}>
            <p>我们不一定拥有您所选择出来的规格的链条，如果您有特别需要，请备注或直接联系我们</p>
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

export default connect(null, mapDispathToProps)(ChainDetail)
