import s from './ServiceContent.module.css'

export default function SendBox({ showContentBox, setShowContentBox }) {
  return (
    <div className={s.content_box} style={{ display: showContentBox ? 'block' : 'none' }}>
      <div className={s.container}>
        <div className={s.close} onClick={() => setShowContentBox(false)}>
          <img src="../../img/clear.png" alt="close" />
        </div>

        <div className={s.content_wrap}>内容展示</div>
      </div>
    </div>
  )
}
