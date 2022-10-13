import { useState, useEffect } from 'react'
import Nav from '@/Common/Nav'
import EditGoods from '@/p_shopping-bags/EditGoods'
import ShoppingBagRight from '@/p_shopping-bags/ShoppingBagRight'
import ShoppingBagLeft from '@/p_shopping-bags/ShoppingBagLeft'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeGoods, editGoods, editGoodsStamp, editGoodsNote } from 'actions/goods'

import s from './shopping-bags.module.css'

function ShoppingBags({
  goodsList,
  removeGoods,
  editGoods,
  editGoodsStamp,
  editGoodsNote,
  contentText,
  description,
  goodsDesText,
}) {
  const [price, setPrice] = useState(0) //原价
  const [value, setValue] = useState('') // 表单状态 'new' 'prepare' 'urgent'
  const [showEditGoodsBox, setShowEditGoodsBox] = useState(false)
  const [editType, setEditType] = useState('')
  const [currentGoods, setCurrentGoods] = useState({})

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  const handleAction = (id, type) => {
    const _currentGoods = goodsList.find((item) => item.id === id)
    setCurrentGoods(_currentGoods)
    setEditType(type)

    if (type === 'remove') {
      //移除元素
      const index = goodsList.findIndex((item) => item.id === id)
      removeGoods(index)
    } else {
      setShowEditGoodsBox(true)
    }
  }

  const handleConfirm = (value, type) => {
    switch (type) {
      case 'edit':
        editGoods({ index: goodsList.findIndex((item) => item.id === currentGoods.id), value })
        break
      case 'stamp':
        if (value !== '' && goodsList.find((item) => item.id === currentGoods.id)[type] !== value)
          editGoodsStamp({ id: currentGoods.id, value })
        break
      case 'note':
        if (value !== '' && goodsList.find((item) => item.id === currentGoods.id)[type] !== value)
          editGoodsNote({ id: currentGoods.id, value })
        break
      default:
        break
    }
    setShowEditGoodsBox(false)
  }

  const handleCancel = () => {
    setShowEditGoodsBox(false)
  }

  useEffect(() => {
    //更新价格
    const currentPrice = goodsList.reduce(
      (p, c) => p + c.price * c.qty.reduce((i, j) => i + j.count * 12, 0),
      0,
    )
    setPrice(currentPrice)
  }, [goodsList])

  return (
    <>
      <Nav />
      <div className={s.shopping_bag_wrap}>
        <div className={s.container}>
          <ShoppingBagLeft
            handleAction={handleAction}
            goodsList={goodsList}
            goodsDesText={goodsDesText}
          />
          <ShoppingBagRight
            value={value}
            price={price}
            onChange={onChange}
            description={description}
            contentText={contentText}
          />

          {/* 商品内容编辑 */}
          <EditGoods
            show={showEditGoodsBox}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            goods={currentGoods}
            type={editType}
          />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  goodsList: state.goodsReducer.goodsList,
  contentText: state.goodsReducer.contentText,
  description: state.goodsReducer.description,
  goodsDesText: state.goodsReducer.goodsDesText,
})

const mapDispathToProps = (dispatch) =>
  bindActionCreators({ removeGoods, editGoods, editGoodsStamp, editGoodsNote }, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(ShoppingBags)
