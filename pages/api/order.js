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

export default async function (req, res) {
  await runMiddleware(req, res, cors)
  console.log(req.methods)
  const orderList = []
  res.statusCode = 200
  res.json({
    msg: 'success',
    code: '0',
    data: orderList,
  })
}
