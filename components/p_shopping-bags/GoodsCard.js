import Loupe from '@/Common/Loupe'
import { mapCodeToName } from 'utils/mapData'
import s from './GoodsCard.module.css'

export default function GoodsCard({ data, onAction }) {
  const { code, name, price, qty, moreqty, img, type = '', id, stamp = '', note = '' } = data

  const handleClick = (action) => {
    onAction(id, action)
  }

  return (
    <div className={s.order_card_wrap}>
      <div className={s.order_card_left}>
        <div className={s.img}>
          <Loupe
            img={img}
            maxImg={img}
            title=""
            baseHeight={180}
            baseWidth={180}
            imgPositionX="280px"
            transform={type ? 'rotateZ(-90deg)' : 'none'}
          />
        </div>
        <div className={s.detail}>
          <div className={s.name}>{mapCodeToName(name)}</div>
          <div className={s.code}>
            <span>Item No. :</span>
            <span>{code}</span>
          </div>
          <div className={s.single_price}>
            <span>Single Price:</span>
            <span>¥{price}</span>
          </div>
          <div className={s.qty}>
            <span>Qty:</span>
            <span className={type ? s.chain_size_wrap : s.size_wrap}>
              {qty.map((item, index) =>
                item.count ? (
                  <span key={index} className={s.size}>
                    <span>{item.count * 12}</span>
                    {type ? (
                      <span className={s.chain_size}>
                        (Length: {item.size.length} cm; Width: {item.size.width} mm)
                      </span>
                    ) : (
                      <span>({item.size}); </span>
                    )}
                  </span>
                ) : null,
              )}
              {moreqty &&
                moreqty.map((item, index) =>
                  item.count ? (
                    <span key={index} className={s.size}>
                      <span>{item.count * 12}</span>
                      {type ? (
                        <span className={s.chain_size}>
                          (Length: {item.size.length}cm; Width: {item.size.width} mm)
                        </span>
                      ) : (
                        <span>({item.size}); </span>
                      )}
                    </span>
                  ) : null,
                )}
            </span>
          </div>
          {stamp && (
            <div className={s.stamp}>
              <span>Stamp: </span>
              <span>{stamp}</span>
            </div>
          )}
          {note && (
            <div className={s.note}>
              <span>Note: </span>
              <span>{note}</span>
            </div>
          )}
        </div>
      </div>
      <div className={s.order_card_right}>
        <div className={s.action}>
          <div onClick={() => handleClick('remove')}>Remove</div>
          <div onClick={() => handleClick('edit')}>Edit</div>
          <div onClick={() => handleClick('stamp')}>Stamp</div>
          <div onClick={() => handleClick('note')}>Note</div>
        </div>
        <div className={s.calculation}>
          <span>Price: </span>
          <span> ¥{(qty.reduce((p, c) => p + c.count * 12, 0) * price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
