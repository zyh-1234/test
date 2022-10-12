import { HomeOutlined, WechatOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Badge } from 'antd'
import { connect } from 'react-redux'
import s from './Sidebar.module.css'

function Sidebar({ orderList }) {
  return (
    <div className={s.sidebar_wrap}>
      <div className={s.sidebar}>
        <Link href="/">
          <a>
            <HomeOutlined />
          </a>
        </Link>
      </div>
      <div className={s.sidebar}>
        <WechatOutlined />
      </div>
      <div className={s.sidebar}>
        <Link href="/shopping-bag">
          <a>
            <Badge count={orderList.length} offset={[5, -5]}>
              <ShoppingCartOutlined size="large" />
            </Badge>
          </a>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ orderList: state.orderReducer.orderList })

export default connect(mapStateToProps, null)(Sidebar)
