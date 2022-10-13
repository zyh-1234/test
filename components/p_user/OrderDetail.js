import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd'
import { useState } from 'react'

import s from './OrderDetail.module.css'

export default function OrderDetail({ data: { tableHeads } }) {
  const originData = [
    {
      key: 1,
      index: 1,
      url: 'img1',
      code: 'f815245123',
      name: '18K',
      size: '20cm*18cm',
      num: 14,
      price: 8.5,
      totalprice: 14 * 8.5,
      status: '有库存',
      a: 3,
    },
    {
      key: 2,
      index: 2,
      url: 'img2',
      code: 'f815245123-1',
      name: '14K',
      size: '20cm*18cm*16cm',
      num: 12,
      price: 8.5,
      totalprice: 12 * 8.5,
      status: '有库存',
      a: 1,
    },
  ]

  const [form] = Form.useForm()
  const [data, setData] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  const isEditing = (record) => record.key === editingKey

  const edit = (record) => {
    form.setFieldsValue({
      index: 0,
      url: '',
      code: '',
      name: '',
      num: 0,
      size: '',
      price: '',
      totalprice: '',
      status: '',
      ...record,
    })
    setEditingKey(record.key)
  }

  const cancel = async (value) => {
    const row = await form.validateFields()
    console.log(row, value)
    setEditingKey('')
  }

  const save = async (key) => {
    try {
      const row = await form.validateFields()
      console.log(row)
      const newData = [...data]
      const index = newData.findIndex((item) => key === item.key)

      if (index > -1) {
        const item = newData[index]
        newData.splice(index, 1, { ...item, ...row })
        setData(newData)
        setEditingKey('')
      } else {
        newData.push(row)
        setData(newData)
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  tableHeads[tableHeads.length - 1].render = (_, record) => {
    const editable = isEditing(record)
    return editable ? (
      <span>
        <Typography.Link
          onClick={() => save(record.key)}
          style={{
            marginRight: 8,
          }}>
          保存
        </Typography.Link>
        <Popconfirm title="删除?" onConfirm={() => cancel(record.key)}>
          <a>删除</a>
        </Popconfirm>
      </span>
    ) : (
      <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
        编辑
      </Typography.Link>
    )
  }

  const columns = [...tableHeads]

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    // record,
    // index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <InputNumber style={{ width: '100%' }} /> : <Input />
    return (
      <td {...restProps} align="center" style={{ fontSize: 'small', padding: '20px 0' }}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}>
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    )
  }

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'num' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })
  return (
    <div className={s.order_detail_wrap}>
      <Form form={form} component={false}>
        <Table
          components={{
            header: {
              cell: ({ children, ...restProps }) => {
                return (
                  <th {...restProps} style={{ textAlign: 'center' }}>
                    {children}
                  </th>
                )
              },
            },
            body: {
              cell: EditableCell,
            },
          }}
          // bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
            // disabled: true,
          }}
        />
      </Form>
    </div>
  )
}
