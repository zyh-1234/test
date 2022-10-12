import { AutoComplete, Button, Checkbox, Form, Input, Select } from 'antd'
import { useState } from 'react'
import s from './RegisterForm.module.css'

export default function RegisterForm({ onRegister }) {
  const { Option } = Select

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 24,
        offset: 0,
      },
    },
  }

  const onFinish = (values) => {
    onRegister(values)
  }

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  )

  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onEmailChange = (value) => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(
        ['@qq.com', '@163.com', '@186.com'].map((domain) => `${value}${domain}`),
      )
    }
  }

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }))
  const [form] = Form.useForm()
  return (
    <div className={s.register_form_wrap}>
      <div className={s.register_form}>
        <Form
          {...formItemLayout}
          autoComplete="off"
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: '86',
          }}
          scrollToFirstError>
          <Form.Item>
            <p>创建一个账户</p>
          </Form.Item>

          <Form.Item
            name="lastname"
            label="名字"
            tooltip="怎么称呼？"
            rules={[{ required: true, message: '请输入名字', whitespace: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="firstname"
            label="姓氏"
            rules={[{ required: true, message: '请输入姓氏', whitespace: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '设置密码',
              },
              { min: 6, message: '密码不应少于6位' },
            ]}
            hasFeedback>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '再次确认密码',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次密码不一致'))
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="手机"
            rules={[
              { required: true, message: '请输入手机号码' },
              { pattern: /^1[3456789]\d{9}$/, message: '手机号码输入有误！' },
            ]}>
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item name="email" label="E-mail" rules={[{ message: '请输入电子邮箱' }]}>
            <AutoComplete options={websiteOptions} onChange={onEmailChange} placeholder="email">
              <Input />
            </AutoComplete>
          </Form.Item>

          {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[{ required: true, message: 'Please input the captcha you got!' }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item> */}

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('请同意')),
              },
            ]}
            {...tailFormItemLayout}>
            <Checkbox>
              已阅{' '}
              <a href="/">
                <u>用户条款</u>
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className={s.register_botton}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
