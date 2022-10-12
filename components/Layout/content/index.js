import Sidebar from '@/Common/Sidebar'
import { BackTop } from 'antd'
import { VerticalAlignTopOutlined } from '@ant-design/icons'
import config from '../../../globalConfig/globalConfig'

import s from './Content.module.css'

export default function Content({ children }) {
  const backTopstyle = {
    height: 30,
    width: 90,
    lineHeight: '30px',
    borderRadius: 4,
    backgroundColor: config.get('theme').black.primary,
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  }
  const renderBackTop = () => (
    <div style={backTopstyle}>
      <span className={s.back_top}>
        <VerticalAlignTopOutlined />
      </span>
      <span>回到顶部</span>
    </div>
  )
  return (
    <>
      <section className={s.section}>{children}</section>

      <BackTop style={{ left: 40 }}>{renderBackTop()}</BackTop>

      <Sidebar />
    </>
  )
}
