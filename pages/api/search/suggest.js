import Cors from 'cors'

const cors = Cors({ methods: ['GET', 'POST', 'HEAD'] })

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
  const { kw = '' } = req.query
  const mockData = ['建议111', '建议1112222', '建议111223', '建议11134', '建议111334'].map(
    (s) => `${s}${kw}`,
  )

  res.statusCode = 200
  res.json({
    code: '0',
    msg: 'success',
    data: mockData,
  })
}
