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
  res.statusCode = 200
  res.json({
    msg: 'success',
    code: '0',
    data: [
      {
        title: '14K 产品✔',
        type: 2,
        id: 1005,
      },
      {
        title: '香槟金 产品❤',
        type: 2,
        id: 1003,
      },
      {
        title: '18K 链条❤',
        type: 2,
        id: 1002,
      },
      {
        title: '18K 链条✌',
        type: 2,
        id: 1004,
      },
      {
        title: '香槟金 产品❤',
        type: 1,
        id: 102,
      },
      {
        title: '14K 产品',
        type: 1,
        id: 103,
      },
    ],
  })
}
