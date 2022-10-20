import { InboxOutlined } from '@ant-design/icons'
import { Modal, Upload as upload } from 'antd'
import { API_UPLOAD_URL } from 'core/service/request/config'
import React, { useState } from 'react'
import s from './Upload.module.css'
const { Dragger } = upload

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })

const Upload = () => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState([])
  const handleCancel = () => setPreviewOpen(false)
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }

  const handleChange = (info) => {
    const {
      fileList: newFileList,
      file: { status, response },
    } = info
    console.log('status:', status, 'response:', response)
    setFileList(newFileList)
  }
  const handleDrop = (e) => {
    console.log('Dropped files', e.dataTransfer.files)
  }
  return (
    <div className={s.upload}>
      <div>完成{fileList.length}上传</div>
      <Dragger
        className={s.dragger}
        name="img"
        multiple={true}
        action={API_UPLOAD_URL}
        headers={{ app: 'apiht.fallon-fj.com' }}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onDrop={handleDrop}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">单击或拖动文件到此区域进行上传</p>
      </Dragger>

      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  )
}
export default Upload
