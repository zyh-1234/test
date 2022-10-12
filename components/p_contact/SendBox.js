import { Button, Form, Input } from 'antd'
import s from './SendBox.module.css'

export default function SendBox({ onFinish, showSendBox, setShowSendBox }) {
  const layout = {
    // layout: 'vertical',
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
  }

  const validateMessages = {
    required: '${label} 是必填选项!',
    types: {
      email: '填写正确的${label} 如：xxx@xxx.xxx',
      number: '填写正确的${label}号',
    },
  }

  return (
    <div className={s.send_box} style={{ display: showSendBox ? 'block' : 'none' }}>
      <div className={s.container}>
        <div className={s.close} onClick={() => setShowSendBox(false)}>
          <img src="../../img/clear.png" alt="close" />
        </div>

        <div className={s.form_wrap}>
          <div className={s.message}>SEND US A MESSAGE</div>
          <div className={s.form}>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={(values) => onFinish(values)}
              validateMessages={validateMessages}>
              <Form.Item
                name={['messages', 'name']}
                label="名字"
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Input className={s.input} />
              </Form.Item>

              <Form.Item
                name={['messages', 'tellPhone']}
                label="手机"
                rules={[
                  {
                    type: 'number',
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                name={['messages', 'email']}
                label="电子邮箱"
                rules={[
                  {
                    required: true,
                    type: 'email',
                  },
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                name={['messages', 'introduction']}
                label="信息"
                rules={[{ required: true }]}>
                <Input.TextArea />
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6, span: 12 }}>
                <Button type="primary" htmlType="submit" className={s.submit}>
                  提交
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
