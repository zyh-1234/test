import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import s from './OrderEdit.module.css'
import { useEffect, useState } from 'react'
import EditOrderText from './EditOrderText'
import EditOrderContent from './EditOrderContent'

export default function OrderEdit({ type, order, onCancel, onConfirm, show }) {
  const [text, setText] = useState('') //文本
  const [orderQty, setOrderQty] = useState([]) //其他尺寸
  const [showMore, setShowMore] = useState(false) //是否显示更多尺寸
  const [chainQty, setChainQty] = useState([]) // 链条尺寸
  const [chainSize, setChainSize] = useState({ size: { width: 2, length: 0 }, count: 1 }) // 链条尺寸模型
  const handleChange = (e) => {
    const value = e.currentTarget.value
    setText(value)
  }

  const handleConfirm = () => {
    if (type === 'edit') {
      order.type
        ? chainQty.length
          ? onConfirm(chainQty, 'edit')
          : onConfirm('', '')
        : onConfirm(orderQty, type) //其他产品修改确认
    } else {
      onConfirm(text, type)
    }
    setChainSize({ size: { width: 2, length: 0 }, count: 1 })
    setChainQty([])
  }

  const handleCancel = () => {
    onCancel()
    setChainQty([])
    setChainSize({ size: { width: 2, length: 0 }, count: 1 })
  }

  useEffect(() => {
    setText(order[type])
    order.qty && setOrderQty(order.qty)
    order.qty && order.qty.slice(6, order.qty.length).reduce((c, p) => c + p.count, 0) === 0
      ? setShowMore(false)
      : setShowMore(true)
  }, [order.qty, order, type])

  return (
    <div
      className={s.content_box}
      style={{
        opacity: show ? '1' : '0',
        left: show ? '0' : '-2500px',
        zIndex: show ? '9999' : '-99',
      }}>
      <div className={s.container}>
        {type === 'edit' ? (
          <EditOrderContent
            order={order}
            chainSize={chainSize}
            setChainSize={setChainSize}
            chainQty={chainQty}
            setChainQty={setChainQty}
            orderQty={orderQty}
            setOrderQty={setOrderQty}
            showMore={showMore}
            setShowMore={setShowMore}
          />
        ) : (
          <EditOrderText text={text} type={type} handleChange={handleChange} />
        )}
        <div className={s.control}>
          <div className={s.cancel} onClick={handleCancel}>
            <CloseOutlined />
            <p>取消</p>
          </div>
          <div className={s.confirm} onClick={handleConfirm}>
            <CheckOutlined />
            <p>确认</p>
          </div>
        </div>
      </div>
    </div>
  )
}
