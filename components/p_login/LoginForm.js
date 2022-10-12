import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Radio, Form, Input, Select } from 'antd'
import { useState } from 'react'
import s from './LoginForm.module.css'

export default function LoginForm({ onLogin }) {
  const [loginType, setLoginType] = useState('phone')

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 90 }}>
        <Select.Option value="+85">
          <div className={s.flag_wrap}>
            <p
              className={s.flag}
              style={{
                backgroundImage: "url('../../img/flags.png')",
                backgroundPosition: '-5240px 0',
              }}></p>
            <p>+85</p>
          </div>
        </Select.Option>
        <Select.Option value="+86">
          <div className={s.flag_wrap}>
            <p
              className={s.flag}
              style={{
                backgroundImage: "url('../../img/flags.png')",
                backgroundPosition: '-1049px 0',
              }}></p>
            <p>+86</p>
          </div>
        </Select.Option>
        <Select.Option value="+87">
          <div className={s.flag_wrap}>
            <p
              className={s.flag}
              style={{
                backgroundImage: "url('../../img/flags.png')",
                backgroundPosition: '-1049px 0',
              }}></p>
            <p>+87</p>
          </div>
        </Select.Option>
      </Select>
    </Form.Item>
  )

  const onFinish = (values) => {
    onLogin(values)
  }

  return (
    <div className={s.login_form_wrap}>
      <div className={s.login_form}>
        <Form
          autoComplete="off"
          name="login"
          initialValues={{ loginMode: 'phone', prefix: '+86' }}
          onValuesChange={(value) => {
            value.loginMode && setLoginType(value.loginMode)
          }}
          onFinish={onFinish}>
          <Form.Item>
            <p style={{ color: '#b00024' }}>老用户登录</p>
          </Form.Item>

          <Form.Item name="loginMode">
            <Radio.Group>
              <Radio value="email">电子邮箱</Radio>
              <Radio value="phone">手机号码</Radio>
            </Radio.Group>
          </Form.Item>

          {loginType == 'email' ? (
            <Form.Item
              name="useremail"
              rules={[
                { required: true, message: '请输入邮箱' },
                { type: 'email', message: '请输入正确的电子邮箱！xxx@xx.xxx' },
              ]}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
          ) : (
            <Form.Item
              name="userphone"
              rules={[
                { required: true, message: '请输入手机号' },
                { pattern: /^1[3456789]\d{9}$/, message: '手机号码输入有误！' },
              ]}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                addonBefore={prefixSelector}
                type="number"
                style={{ width: '100%' }}
                placeholder="Phone"
              />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[
              { required: true, message: '请输入密码！' },
              { min: 6, message: '密码不应少于6位' },
            ]}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="/login">
              <i style={{ fontSize: '12px' }}>
                <u>忘记密码？</u>
              </i>
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={s.login_button}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
