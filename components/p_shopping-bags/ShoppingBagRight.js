import { Radio } from 'antd'
import { QuestionOutlined } from '@ant-design/icons'
import s from './ShoppingBagRight.module.css'
import { useState } from 'react'

export default function ShoppingBagRight({
  price,
  value,
  onChange,
  description,
  contentText,
  onClickSend,
}) {
  const [showDes, setShowDes] = useState(false) //显示表单状态说明

  return (
    <div className={s.shopping_bag_right}>
      <div className={s.content}>
        <div className={s.title}>{contentText.title}</div>
        <div className={s.order_detail}>
          <div className={s.price}>
            <span>{contentText.price}</span>
            <span>￥{price.toFixed(2)}</span>
          </div>
          <div className={s.discount}>
            <span>{contentText.discount}</span>
            <span>－￥{(price * 0.4).toFixed(2)}</span>
          </div>
          <div>{contentText.discountDes}</div>
          <div className={s.total}>
            <span>{contentText.total}</span>
            <span>￥{(price * 0.6).toFixed(2)}</span>
          </div>
          <div>{contentText.totalDes}</div>
          <div className={s.checkbox_wrap}>
            <div className={s.checkbox}>
              <Radio.Group onChange={onChange} value={value}>
                {contentText.orderStatus.map((item, index) => (
                  <Radio key={`${item}-${index}`} value={item}>
                    {item}
                  </Radio>
                ))}
              </Radio.Group>
            </div>
            <div className={s.question_icon} onClick={() => setShowDes(!showDes)}>
              <QuestionOutlined />
            </div>
          </div>
          <div className={s.send} onClick={onClickSend}>
            {contentText.sendButton}
          </div>
          <div className={s.download}>{contentText.downloadButton}</div>
        </div>
      </div>
      <div className={s.description_wrap} style={{ opacity: showDes ? '1' : '0' }}>
        <div className={s.description}>
          {description.map((item, index) => (
            <div key={index}>
              {item.title ? (
                <div>
                  <p>1. {item.title}</p>
                </div>
              ) : (
                <div className={s.description_sec}>
                  <span>2. </span>
                  {item.list.map((des, desdex) => (
                    <span key={desdex}>{des}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
