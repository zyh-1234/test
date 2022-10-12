export default function handler(req, res) {
  console.log(req.headers['user-agent'])
  const reSelectList = [
    {
      key: '001',
      status: true,
      name: 'flex-reselect-1',
    },
    {
      key: '002',
      status: true,
      name: 'flex-reselect-2',
    },
    {
      key: '003',
      status: false,
      name: 'flex-reselect-3',
    },
    {
      key: '004',
      status: true,
      name: 'flex-reselect-4',
    },
    {
      key: '005',
      status: false,
      name: 'flex-reselect-5',
    },
    {
      key: '006',
      status: false,
      name: 'flex-reselect-6',
    },
    {
      key: '007',
      status: true,
      name: 'flex-reselect-7',
    },
  ]
  res.statusCode = 200
  res.json({
    msg: 'success',
    code: '0',
    data: reSelectList,
  })
}
