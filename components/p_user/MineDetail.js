import { Form, Input } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import s from './MineDetail.module.css'
import { useEffect, useState } from 'react'

const mapSubmitType = {
  USERNAME: 'username',
  NICKNAME: 'nickname',
  EMAILPHONE: 'email&phone',
  CHAGEPASSWORD: 'chagepassword',
  WX: 'wx',
  WHATSAPP: 'whatsapp',
  OTHEREMAIL: 'otheremail',
  OTERCONTACT: 'othercontact',
  SUGGEST: 'suggest',
}
export default function MineDetail({ data, userInfo, isEdit, setIsEdit, onSubmit }) {
  const [canEdit, setCanEdit] = useState(isEdit)
  const [type, setType] = useState('')
  const handleSubmit = (value) => {
    onSubmit(type, value)
  }
  const handleSubmitType = (submitType) => {
    setType(submitType)
  }
  useEffect(() => {
    return () => {
      setCanEdit(true)
      setIsEdit()
    }
  }, [setIsEdit])
  return (
    <div className={s.minedetail_wrap}>
      <div className={s.head}>
        <p>{data.title}</p>
        <p className={canEdit ? s.edit : s.success}>
          <span onClick={() => setCanEdit(false)}>{data.edit}</span>/
          <span onClick={() => setCanEdit(true)}>{data.success}</span>
        </p>
      </div>
      <Form
        autoComplete="off"
        name="userInfo"
        labelWrap={true}
        onFinish={(value) => handleSubmit(value)}
        initialValues={{ ...userInfo }}>
        <div className={s.item_wrap}>
          <div className={s.item}>
            <div className={s.item_label}>
              <p>{data.lastname}*:</p>
            </div>
            <Form.Item name="lastname">
              <Input readOnly={canEdit} />
            </Form.Item>
          </div>
          <div className={s.item}>
            <div className={s.item_label}>
              <p>{data.fristname}*:</p>
            </div>
            <Form.Item name="fristname">
              <Input readOnly={canEdit} />
            </Form.Item>
          </div>
          <Form.Item className={s.item}>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.USERNAME)
              }}>
              <div className={s.submit_icon}>
                <CheckOutlined />
              </div>
            </button>
          </Form.Item>
        </div>
        <div className={s.nickname}>
          <div className={s.nickname_title}>
            <p>{data.nicknameDes}</p>
            <p>{data.nickname}:</p>
          </div>
          <div className={s.nickname_item_wrap}>
            <Form.Item name="nickname" className={s.nickname_item}>
              <Input readOnly={canEdit} />
            </Form.Item>
          </div>
          <Form.Item className={s.nickname_submit}>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.NICKNAME)
              }}>
              <div className={s.submit_icon}>
                <CheckOutlined />
              </div>
            </button>
          </Form.Item>
        </div>
        <div className={`${s.item_wrap} ${s.email_phone} `}>
          <div className={s.item}>
            <div className={s.item_label}>
              <p>{data.email}*:</p>
            </div>
            <Form.Item name="useremail">
              <Input readOnly={canEdit} />
            </Form.Item>
          </div>
          <div className={s.item}>
            <div className={s.item_label}>
              <p>{data.phone}*:</p>
            </div>
            <Form.Item name="userphone">
              <Input readOnly={canEdit} />
            </Form.Item>
          </div>
          <Form.Item className={s.item}>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.EMAILPHONE)
              }}>
              <div className={s.submit_icon}>
                <CheckOutlined />
              </div>
            </button>
          </Form.Item>
          <p className={s.email_phone_des}>{data.des}</p>
        </div>

        <div className={s.password_title}>
          <p>{data.changepassword}</p>
        </div>

        <div className={s.item_wrap}>
          <div className={s.item}>
            <div className={s.item_label}>
              <p>{data.new}*:</p>
            </div>
            <Form.Item name="newpassword" rules={[{ min: 6, message: '密码不应少于6位' }]}>
              <Input.Password readOnly={canEdit} />
            </Form.Item>
          </div>

          <div className={s.item}>
            <div className={s.item_label}>
              <p>{data.confirm}*:</p>
            </div>
            <Form.Item
              name="confirmpassword"
              rules={[
                {
                  message: '再次确认密码',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newpassword') === value) {
                      return Promise.resolve()
                    }
                    return Promise.reject(new Error('两次密码不一致'))
                  },
                }),
              ]}>
              <Input.Password readOnly={canEdit} />
            </Form.Item>
          </div>
          <Form.Item className={s.item}>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.CHAGEPASSWORD)
              }}>
              <div className={s.submit_icon}>
                <CheckOutlined />
              </div>
            </button>
          </Form.Item>
        </div>
        <div className={s.contact_title}>
          <p>{data.contactinfoTitle}</p>
          <p>{data.contactinfoDes}</p>
        </div>
        <div className={`${s.item_wrap}  `}>
          <div className={s.item_label}>
            <p>{data.wx}:</p>
          </div>
          <Form.Item className={s.item} name="wx">
            <Input readOnly={canEdit} />
          </Form.Item>
          <Form.Item className={s.item}>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.WX)
              }}>
              <div className={s.submit_icon}>
                <CheckOutlined />
              </div>
            </button>
          </Form.Item>
        </div>
        <div className={`${s.item_wrap}  `}>
          <div className={s.item_label}>
            <p>{data.whatsapp}:</p>
          </div>
          <Form.Item className={s.item} name="whatsapp">
            <Input readOnly={canEdit} />
          </Form.Item>
          <Form.Item className={s.item}>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.WHATSAPP)
              }}>
              <div className={s.submit_icon}>
                <CheckOutlined />
              </div>
            </button>
          </Form.Item>
        </div>
        <div className={`${s.item_wrap} `}>
          <div className={s.item_label}>
            <p>{data.otheremail}:</p>
          </div>
          <Form.Item className={s.item} name="otheremail">
            <Input readOnly={canEdit} />
          </Form.Item>
          <Form.Item className={s.item}>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.OTHEREMAIL)
              }}>
              <div className={s.submit_icon}>
                <CheckOutlined />
              </div>
            </button>
          </Form.Item>
        </div>
        <div className={`${s.item_wrap}  `}>
          <div className={s.item_label}>
            <p>{data.othercontact}:</p>
          </div>
          <Form.Item className={s.item} name="othercontact">
            <Input readOnly={canEdit} />
          </Form.Item>
          <Form.Item className={s.item}>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.OTERCONTACT)
              }}>
              <div className={s.submit_icon}>
                <CheckOutlined />
              </div>
            </button>
          </Form.Item>
        </div>
        <div className={`${s.item_wrap} ${s.item_wrap_suggest} `}>
          <div className={s.suggest_title}>
            <p>{data.suggest}</p>
          </div>
          <Form.Item name="suggest">
            <Input.TextArea readOnly={canEdit} style={{ width: '250px', height: '200px' }} />
          </Form.Item>
          <Form.Item>
            <button
              type="submit"
              className={s.submit}
              style={{ pointerEvents: canEdit ? 'none' : 'all' }}
              onClick={() => {
                handleSubmitType(mapSubmitType.SUGGEST)
              }}>
              <div className={s.suggest_submit_icon}>
                <CheckOutlined />
                <p>{data.submit}</p>
              </div>
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
