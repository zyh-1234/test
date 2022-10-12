import s from './ProductCard.module.css'
import { mapCodeToName } from 'utils/mapData'
import useChangeWindowSize from 'core/hooks/useChageWindowSize'

export default function ProductCard({ data }) {
  const { name, price, img } = data
  const size = useChangeWindowSize()
  const width = size.w < 1260 ? (size.w < 960 ? (size.w = 960 / 1.5) : size.w / 1.5) : size.w / 2

  const iconStyle = {
    width: `${0.16 * width}px `,
    height: `${0.1 * width}px`,
    backgroundImage: 'url(../../img/fj_icon_min.png)',
    backgroundPosition: `center ${0.031 * width}px`,
    backgroundSize: `calc(${0.1 * width}px * (3000 / 767)) ${0.1 * width}px`,
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div className={s.product_card_wrap}>
      <div className={s.product_card_img}>
        <img src={img} alt={name} />
        <div className={s.showdown}></div>
      </div>
      <div className={s.product_card_des_wrap}>
        <div className={s.product_card_des}>
          <span style={iconStyle} />
          <span className={s.des}>
            <span className={s.product_card_des_code}>
              <p>{name}</p>
            </span>
            <span style={{ width: `${0.04 * width}px` }} />
            <span className={s.product_card_des_name}>
              <p>{mapCodeToName(name)}</p>
            </span>
          </span>
          <p className={s.product_card_des_price}>¥{price}</p>
        </div>
      </div>
    </div>
  )
}
