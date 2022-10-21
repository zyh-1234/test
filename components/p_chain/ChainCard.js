import useChangeWindowSize from 'core/hooks/useChageWindowSize'
import { mapCodeToName } from 'utils/mapData'
import s from './ChainCard.module.css'

export default function ChainCard({ data }) {
  const { name, img } = data.xx[0]
  const size = useChangeWindowSize()
  const width = size.w < 1260 ? (size.w < 960 ? (size.w = 960 / 1.5) : size.w / 1.5) : size.w / 2
  const imgStyle = {
    width: `${width}px`,
    height: `${0.3 * width}px`,
    backgroundImage: `url(${img})`,
    backgroundPosition: `center -${0.3935 * width}px`,
    backgroundSize: `${width}px ${width}px`,
  }
  const iconStyle = {
    width: `${0.16 * width}px `,
    height: `${0.1 * width}px`,
    backgroundImage: 'url(../../img/fj_icon_min.png)',
    backgroundPosition: 'center 5px',
    backgroundSize: `calc(${0.1 * width}px * (3000 / 767)) ${0.1 * width}px`,
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div className={s.chain_card_wrap}>
      <div className={s.container}>
        <div className={s.chain_img} style={imgStyle} />
        <div className={s.chain_des}>
          <p>{name}</p>
          <p className={s.fj_icon} style={iconStyle}></p>
          <p>{mapCodeToName(name)}</p>
        </div>
      </div>
    </div>
  )
}
