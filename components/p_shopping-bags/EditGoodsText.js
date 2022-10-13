import { Input } from 'antd'
const { TextArea } = Input
import s from './EditGoodsText.module.css'

export default function EditGoodsText({ type, text, handleChange }) {
  return (
    <div className={s.edit_text_wrap}>
      <div className={s.title}>
        <p>{`edit ${type}`.toLocaleUpperCase()}</p>
      </div>
      <div className={s.content_container}>
        <TextArea
          showCount
          maxLength={100}
          value={text}
          style={{
            height: 120,
          }}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
