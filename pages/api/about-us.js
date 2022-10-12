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
  res.statusCode = 200
  const aboutUs = [
    {
      title: '关于佛隆',
      des: '广州市佛隆首饰有限公司是一家集首饰设计、生产及营销为一体的专业饰品企业。目前公司 拥有自己的现代化首饰生产基地，及多家连锁销售店，从设计研发到管理营销人员数百人。 公司专业从事各种镀金时尚艺术首饰的设计研发、生产和销售，产品种类繁多、工艺技术精 湛，产品类别有: 戒指、耳环、项链、手链、吊坠、手镯、胸针等。公司成立至今，产品深 受国内外客户的青睐。',
      bannerImg: '../../img/about_us_banner.jpg',
      bannerList: [],
    },
    {
      title: '核心技术',
      des: '我们的产品几乎不存在氧化变色的问题。首饰行业内的痛点是 K 金饰品会随着时间氧化褪色，给消费者们带来不好的体验。佛隆历经数年潜心研发，开发出几乎不会氧化的核心技术， 深受客户好评和喜爱。我们的产品可以保证在数年无论穿戴与否的情况下，都几乎不会出现 氧化或者褪色。并且，产品本身不含有有害物质，即便对体质敏感人群，也非常健康，几乎 不出现过敏反应。',
      bannerImg: '../../img/hexinjisu.png',
      bannerList: [],
    },
    {
      title: '产品色系',
      des: '我们的产品颜色范围包括有 14K，18K，香槟金，玫瑰金和少量的白金色。结合自己独特的 设计和技术，还能做出包含两种颜色的分色：14K 分色，18K 分色。',
      bannerImg: '',
      bannerList: [
        { color: '14K', img: '../../img/14k.jpg' },
        { color: '14K分色', img: '../../img/14K分色.jpg' },
        { color: '香槟金', img: '../../img/香槟金.jpg' },
        { color: '香槟金分色', img: '../../img/香槟金分色.jpg' },
        { color: '18K', img: '../../img/18K.jpg' },
        { color: '白金色', img: '../../img/白金色.jpg' },
        { color: '三色', img: '../../img/三色链条.jpg' },
      ],
    },
  ]

  res.json({
    msg: 'success',
    code: '0',
    data: aboutUs,
  })
}
