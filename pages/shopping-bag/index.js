import { useState, useEffect } from 'react'
import Nav from '@/Common/Nav'
import OrderEdit from '@/p_shopping-bag/OrderEdit'
import ShoppingBagRight from '@/p_shopping-bag/ShoppingBagRight'
import ShoppingBagLeft from '@/p_shopping-bag/ShoppingBagLeft'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeOrder, editOrder, editOrderNote, editOrderStamp } from 'actions/order'

import s from './shopping-bag.module.css'

function ShoppingBag({
  orderList,
  removeOrder,
  editOrder,
  editOrderStamp,
  editOrderNote,
  contentText,
  description,
  orderDesText,
}) {
  const [price, setPrice] = useState(0) //原价
  const [value, setValue] = useState('') // 表单状态 'new' 'prepare' 'urgent'
  const [showOrderEditBox, setShowOrderEditBox] = useState(false)
  const [editType, setEditType] = useState('')
  const [currentOrder, setCurrentOrder] = useState({})

  const onChange = (e) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  const handleAction = (id, type) => {
    const _currentOrder = orderList.find((item) => item.id === id)
    setCurrentOrder(_currentOrder)
    setEditType(type)

    if (type === 'remove') {
      //移除元素
      const index = orderList.findIndex((item) => item.id === id)
      removeOrder(index)
    } else {
      setShowOrderEditBox(true)
    }
  }

  const handleConfirm = (value, type) => {
    switch (type) {
      case 'edit':
        editOrder({ index: orderList.findIndex((item) => item.id === currentOrder.id), value })
        break
      case 'stamp':
        if (value !== '' && orderList.find((item) => item.id === currentOrder.id)[type] !== value)
          editOrderStamp({ id: currentOrder.id, value })
        break
      case 'note':
        if (value !== '' && orderList.find((item) => item.id === currentOrder.id)[type] !== value)
          editOrderNote({ id: currentOrder.id, value })
        break
      default:
        break
    }
    setShowOrderEditBox(false)
  }

  const handleCancel = () => {
    setShowOrderEditBox(false)
  }

  useEffect(() => {
    //更新价格
    const currentPrice = orderList.reduce(
      (p, c) => p + c.price * c.qty.reduce((i, j) => i + j.count * 12, 0),
      0,
    )
    setPrice(currentPrice)
  }, [orderList])

  return (
    <>
      <Nav />
      <div className={s.shopping_bag_wrap}>
        <div className={s.container}>
          <ShoppingBagLeft
            handleAction={handleAction}
            orderList={orderList}
            orderDesText={orderDesText}
          />
          <ShoppingBagRight
            value={value}
            price={price}
            onChange={onChange}
            description={description}
            contentText={contentText}
          />

          {/* 订单内容编辑 */}
          <OrderEdit
            show={showOrderEditBox}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            order={currentOrder}
            type={editType}
          />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  orderList: state.orderReducer.orderList,
  contentText: state.orderReducer.contentText,
  description: state.orderReducer.description,
  orderDesText: state.orderReducer.orderDesText,
})

const mapDispathToProps = (dispatch) =>
  bindActionCreators({ removeOrder, editOrder, editOrderStamp, editOrderNote }, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(ShoppingBag)
