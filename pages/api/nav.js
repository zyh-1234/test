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
  console.log(req.method)
  const mockData = [
    {
      name: '链条',
      id: 10001,
      type: 'chain',
      data: [
        { name: '14K 链条 热销', img: '../../img/14k.jpg', url: '/', id: 11, hot: 1 },
        { name: '香槟金 链条 热销', img: '../../img/香槟金.jpg', url: '/', id: 12, hot: 1 },
        { name: '14K 分色 链条', img: '../../img/14K分色.jpg', url: '/', id: 13 },
        { name: '香槟金分色 链条', img: '../../img/香槟金分色.jpg', url: '/', id: 14 },
        { name: '白金色/银色 链条', img: '../../img/白金色.jpg', url: '/', id: 15 },
        { name: '18K 链条', img: '../../img/18K.jpg', url: '/', id: 16 },
        { name: '三色 链条', img: '../../img/三色链条.jpg', url: '/', id: 17 },
      ],
      defaultImg: '../../img/14k.jpg',
    },
    {
      type: 'earring',
      name: '耳环',
      id: 10002,
      data: [
        { name: '14K 耳环', img: '../../img/14k耳环.jpg', url: '/', id: 21 },
        { name: '香槟金 耳环', img: '../../img/香槟金耳环.jpg', url: '/', id: 22 },
        { name: '14K 分色 耳环', img: '../../img/14K分色耳环.jpg', url: '/', id: 23 },
        { name: '香槟金分色 耳环', img: '../../img/香槟金分色耳环.jpg', url: '/', id: 24 },
        { name: '珍珠 耳环', img: '../../img/珍珠耳环.jpg', url: '/', id: 25 },
        { name: '净色 耳环', img: '../../img/净色耳环.jpeg', url: '/', id: 26 },
        { name: '白石 耳环', img: '../../img/白石耳环.jpg', url: '/', id: 27 },
      ],
      defaultImg: '../../img/14k耳环.jpg',
    },
    {
      type: 'ring',
      name: '戒指',
      id: 10003,
      data: [
        {
          name: '14K 戒指',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_392,h_392/media/product/newgeneration/view/1/sku/nettle-n/diamond/topaz-Blue_AAA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/white.jpg',
          url: '/',
          id: 31,
        },
        {
          name: '香槟金 戒指',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_392,h_392/media/product/newgeneration/view/1/sku/nettle-n/diamond/diamond-Swarovsky_AAAAA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/yellow.jpg',
          url: '/',
          id: 32,
        },
        {
          name: '净色 戒指',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_392,h_392/media/product/newgeneration/view/1/sku/nettle-n/diamond/sapphire_AA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/white.jpg',
          url: '/',
          id: 33,
        },
        {
          name: '14k 分色 戒指',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_275,h_275/media/product/newgeneration/view/1/sku/nettle-n/diamond/diamond-sapphire_AA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/white.jpg',
          url: '/',
          id: 34,
        },
        { name: '香槟金分色 戒指', img: '', url: '/', id: 35 },
        { name: '珍珠 戒指', img: '', url: '/', id: 36 },
      ],
      defaultImg:
        'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_516,h_516/media/product/newgeneration/view/1/sku/chubascoli-n/diamond/greendiamond_A/stone2/diamond-Brillant_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/yellow.jpg',
    },
    {
      type: 'necklace/bracelet',
      name: '项链/手链',
      id: 10004,
      data: [
        { name: '14K 项链/手链', img: '../../img/手链1.jpeg', url: '/', id: 41 },
        { name: '香槟金 项链/手链', img: '../../img/手链2.jpeg', url: '/', id: 42 },
        { name: '14k 分色 项链/手链', img: '../../img/手链3.jpeg', url: '/', id: 43 },
        { name: '香槟金分色 项链/手链', img: '../../img/手链1.jpeg', url: '/', id: 44 },
      ],
      defaultImg: '../../img/手链1.jpeg',
    },
    {
      type: 'suit',
      name: '套装',
      id: 10005,
      data: [
        { name: '香槟金 套装', img: '../../img/套装/F81200180-01.jpg', url: '/', id: 51 },
        { name: '香槟金分色 套装', img: '../../img/套装/F81200180-02.jpg', url: '/', id: 52 },
        { name: '14k 套装', img: '../../img/套装/F81200180-09.jpg', url: '/', id: 53 },
      ],
      defaultImg: '../../img/套装/F81200180-10.jpg',
    },
    {
      type: 'pendant',
      name: '吊坠',
      id: 10006,
      data: [
        {
          name: '14K 吊坠',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_392,h_392/media/product/newgeneration/view/1/sku/nettle-n/diamond/topaz-Blue_AAA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/white.jpg',
          url: '/',
          id: 61,
        },
        {
          name: '香槟金 吊坠',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_392,h_392/media/product/newgeneration/view/1/sku/nettle-n/diamond/diamond-Swarovsky_AAAAA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/yellow.jpg',
          url: '/',
          id: 62,
        },
        {
          name: '14K 分色 吊坠',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_392,h_392/media/product/newgeneration/view/1/sku/nettle-n/diamond/sapphire_AA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/white.jpg',
          url: '/',
          id: 63,
        },
        {
          name: '香槟金分色 吊坠',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_275,h_275/media/product/newgeneration/view/1/sku/nettle-n/diamond/diamond-sapphire_AA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/white.jpg',
          url: '/',
          id: 64,
        },
        { name: '净色 吊坠', img: '', url: '/', id: 65 },
      ],
      defaultImg:
        'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_516,h_516/media/product/newgeneration/view/1/sku/12330intore/diamond/diamond-sapphire_AAA/alloycolour/yellow/accent/neon-green.jpg',
    },
    {
      type: 'bracelet',
      name: '手镯',
      id: 10007,
      data: [
        {
          name: '14K 手镯',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_392,h_392/media/product/newgeneration/view/1/sku/nettle-n/diamond/topaz-Blue_AAA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/white.jpg',
          url: '/',
          id: 71,
        },
        {
          name: '香槟金 手镯',
          img: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_392,h_392/media/product/newgeneration/view/1/sku/nettle-n/diamond/diamond-Swarovsky_AAAAA/stone2/diamond-sapphire_AAA/stone3/diamond-Swarovsky_AAAAA/alloycolour/yellow.jpg',
          url: '/',
          id: 72,
        },
      ],
      defaultImg:
        'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto,w_516,h_516/media/product/newgeneration/view/1/sku/12330intore/diamond/diamond-sapphire_AAA/alloycolour/yellow/accent/neon-green.jpg',
    },
    { type: 'brooch', name: '胸针', id: 10008, data: [], defaultImg: '' },
  ]

  res.statusCode = 200
  res.json({
    msg: 'success',
    code: '0',
    data: mockData,
  })
}
