import Cors from 'cors'

const cors = Cors({ methods: ['GET', 'HEAD'] })

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}
export default async (req, res) => {
  await runMiddleware(req, res, cors)
  const { query } = req
  const { kw = '', start = 0, offset = 10 } = query

  if (kw === 'empty') {
    res.statusCode = 200
    res.json({
      code: '0',
      msg: 'success',
      data: [],
    })
    return
  }

  const mockData = [
    { id: 1010111, code: '123456678-9', img: '../../../img/img_404.png', name: '14k 香槟金' },
    { id: 1010112, code: '223456678-9', img: '../../../img/img_404.png', name: '18k 香槟金' },
    { id: 1010113, code: '3234566789-1', img: '../../../img/img_404.png', name: '14k 白金' },
    { id: 1010114, code: '4234566789-3', img: '../../../img/img_404.png', name: '14k 香槟金' },
    { id: 1010115, code: '5234566789-5', img: '../../../img/img_404.png', name: '14k 香槟金' },
    { id: 1010116, code: '6234566789-4', img: '../../../img/img_404.png', name: '14k 香槟金' },
    { id: 1010117, code: '7234566789-1', img: '../../../img/img_404.png', name: '14k 香槟金' },
    { id: 1010118, code: '8234566789-2', img: '../../../img/img_404.png', name: '14k 香槟金' },
    { id: 1010119, code: '9234566789-6', img: '../../../img/img_404.png', name: '14k 香槟金' },
    { id: 1010120, code: '1334566789-5', img: '../../../img/img_404.png', name: '14k 香槟金' },
  ]
  const filterData = mockData.filter(
    (item) => item.name.indexOf(kw) >= 0 || item.code.indexOf(kw) >= 0,
  )
  // start > 0模拟返回不足offset条数据
  const resData =
    Number(start) > 0
      ? filterData.slice(0, offset - 2).map((item, idx) => {
          const index = start * 10 + idx
          item.id += index
          return item
        })
      : filterData.slice(0, offset)
  res.statusCode = 200
  res.json({
    code: '0',
    msg: 'success',
    data: resData,
  })
}
