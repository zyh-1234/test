import { Form, InputNumber, Popconfirm, Table, Typography } from 'antd'
import { useState } from 'react'

import s from './OrderDetail.module.css'

export default function OrderDetail({ data: { tableHeads } }) {
  const originData = [
    {
      key: 1,
      index: 1,
      img: '../../img/14K分色.jpg',
      code: 'f815245123',
      name: '18K',
      size: '20cm*18cm',
      count: 14,
      price: 8.5,
      totalprice: 14 * 8.5,
      status: '有库存',
    },
    {
      key: 2,
      index: 2,
      img: '../../img/香槟金耳环.jpg',
      code: 'f815245123-1',
      name: '14K',
      size: '20cm*18cm*16cm',
      count: 12,
      price: 8.5,
      totalprice: 12 * 8.5,
      status: '有库存',
    },
  ]

  const [form] = Form.useForm()
  const [data, setData] = useState(originData)
  const [editingKey, setEditingKey] = useState('')

  const isEditing = (record) => record.key === editingKey

  tableHeads.map((item) => {
    if (item.dataIndex === 'img') {
      item.render = (img) => {
        return <img src={img} alt="" />
      }
      return item
    }
    if (item.dataIndex === 'operation') {
      item.render = (_, record) => {
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
      return item
    }
  })

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

  const columns = [...tableHeads]

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    // record,
    // index,
    children,
    ...restProps
  }) => {
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
            {dataIndex === 'count' ? <InputNumber style={{ width: '100%' }} /> : null}
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
