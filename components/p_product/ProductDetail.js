import { notification } from 'antd'
import Dropdown from '@/Common/Dropdown'
import Loupe from '@/Common/Loupe'
import ProductQuestionsDes from './ProductQuestionsDes'
import { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addGoods } from 'actions/goods'
import { ShoppingCartOutlined, QuestionOutlined } from '@ant-design/icons'
import { mapDataToStoneList, mapDataToColorList } from 'utils/mapData'
import s from './ProductDetail.module.css'

const mapDropdownType = {
  CODE: 'code',
  COLOR: 'color',
  STONE: 'stone',
  SIZE: 'size',
  COUNT: 'count',
  LENGTH: 'length',
  WIDTH: 'width',
}

const ProductDetail = ({ setShowDetail, title, dataLists, type, addGoods }) => {
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
  const [isChain, setIsChain] = useState(false)
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(currentProduct.length)
  const [dropdownList, setDropdownList] = useState([
    { title: '条码', type: 'code', list: [] },
    { title: '色系颜色', type: 'color', list: [] },
    { title: '石头颜色', type: 'stone', list: [] },
    { title: '尺寸大小', type: 'size', list: [] },
    { title: '选购数量', type: 'count', list: [] },
  ])
  const [dropdownChainList, setDropdownChainList] = useState([
    { title: '条码', type: 'code', list: [] },
    { title: '色系颜色', type: 'color', list: [] },
    { title: '链身长度', type: 'length', list: ['40', '50', '60'] },
    { title: '链身宽度', type: 'width', list: [] },
    { title: '选购数量', type: 'count', list: [] },
  ])
  const descriptions = [
    { title: '您对此款产品或者其他产品有更好的想法？比如换个颜色？或者换个石头的颜色？', url: '' },
    {
      title: '我们的产品会带有 Fallon-FJ 的字印，如果您需要不带字印或者自己的字印产品，请|【备注】',
      url: '/shopping-bag',
    },
    {
      title: '我们可以定制，但是需要一点时间。请|联系我们',
      url: '/contact-us',
    },
    {
      title: '价格仅供参考，针对库存量低的产品，价格可能会发生变动，敬请留意。',
      url: '',
    },
    {
      title: '为什么我们的链条几乎永不褪色？- 点击|关于我们 ',
      url: '/about-us',
    },
  ]

  const handleStartClick = (type) => {
    setIsChain(false)
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

  const handleChainStartClick = (type) => {
    setIsChain(true)
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
    setIsChain(true)
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
    setIsChain(false)
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
    isChain
      ? addGoods({
          ..._currentProduct,
          qty: [{ size: { width: 2, length }, count }],
          price,
          stamp: '',
          note: '',
          type: 'chain',
          name: 110,
        })
      : addGoods({ ..._currentProduct, qty, price, stamp: '', note: '', name: 110 })

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

        {type === 'chain' ? (
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
        ) : (
          <div className={s.content_wrap}>
            <div className={s.content_left}>
              <p>{currentProduct.title}</p>
              <Loupe
                magnification={3}
                maxImg={currentProduct.img}
                img={currentProduct.img_s}
                title={currentProduct.title}
              />

              <p>{`${currentProduct.sx.title_zh}${currentProduct.st.title_zh}${title}`}</p>
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
        )}

        <div className={s.content_bottom}>
          <div className={s.question} onClick={() => setShowDes(!showDes)}>
            <QuestionOutlined />
          </div>
          <div className={s.shopping}>
            <ShoppingCartOutlined onClick={addShoppingBag} />
          </div>
        </div>

        <ProductQuestionsDes
          descriptions={descriptions}
          showDes={showDes}
          setShowDes={setShowDes}
        />
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({ orderList: state.orderReducer.orderList })

const mapDispathToProps = (dispatch) => bindActionCreators({ addGoods }, dispatch)

export default connect(null, mapDispathToProps)(ProductDetail)
