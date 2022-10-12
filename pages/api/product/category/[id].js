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
  const mockData = [
    {
      id: 10001,
      title: '链条',
      topBanner: '../../../../img/hexinjisu.png',
      dataLists: [
        {
          id: 100011,
          name: '1102888', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: '../../../../img/三色链条.jpg',
          width: 2,
          length: 55,

          // 类型
          lx: {
            id: 1,
            title_zh: '链条',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000111,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/三色链条.jpg', //产品大图
              img_s: '../../../../img/三色链条.jpg', //产品缩略图
              num: 123, //库存数量
              width: 2,
              length: 60,

              // 石头类型
              st: {
                id: 1000111,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 2,
              title: 'F82202888', //子产品名
              img: '../../../../img/三色链条.jpg', //产品大图
              img_s: '../../../../img/三色链条.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量
              width: 2,
              length: 60,
              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100012,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: '../../../../img/香槟金分色.jpg',
          width: 2,
          length: 45,
          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000121,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/香槟金分色.jpg', //产品大图
              img_s: '../../../../img/香槟金分色.jpg', //产品缩略图
              num: 123, //库存数量
              width: 2,
              length: 55,

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000122,
              title: 'F82202888', //子产品名
              img: '../../../../img/香槟金分色.jpg', //产品大图
              img_s: '../../../../img/香槟金分色.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量
              width: 2,
              length: 60,

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100013,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '134',
          img: '../../../../img/14K分色.jpg',
          width: 2,
          length: 45,
          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000131,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/14K分色.jpg', //产品大图
              img_s: '../../../../img/14K分色.jpg', //产品缩略图
              num: 123, //库存数量
              width: 2,
              length: 55,

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000132,
              title: 'F82202888', //子产品名
              img: '../../../../img/14K分色.jpg', //产品大图
              img_s: '../../../../img/14K分色.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量
              width: 2,
              length: 60,

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
      ],
    },
    {
      id: 10002,
      title: '耳环',
      topBanner: '',
      dataLists: [
        {
          id: 100021,
          name: '52200601', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: '../../../../img/52200601/52200601-01.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000211,
              title: '52200601', //子产品名
              code: '52200601-01', //完整条码
              img: '../../../../img/52200601/52200601-01.jpg', //产品大图
              img_s: '../../../../img/52200601/52200601-01.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000212,
              title: '52200601', //子产品名
              img: '../../../../img/52200601/52200601-05.jpg', //产品大图
              img_s: '../../../../img/52200601/52200601-05.jpg', //产品缩略图
              code: '52200601-05', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '蓝宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000213,
              title: '52200601', //子产品名
              img: '../../../../img/52200601/52200601-06.jpg', //产品大图
              img_s: '../../../../img/52200601/52200601-06.jpg', //产品缩略图
              code: '52200601-06', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000214,
              title: '52200601', //子产品名
              img: '../../../../img/52200601/52200601-15.jpg', //产品大图
              img_s: '../../../../img/52200601/52200601-15.jpg', //产品缩略图
              code: '52200601-15', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '绿宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000215,
              title: '52200601', //子产品名
              code: '52200601-04', //完整条码
              img: '../../../../img/52200601/52200601-01.jpg', //产品大图
              img_s: '../../../../img/52200601/52200601-01.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '18K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000216,
              title: '52200601', //子产品名
              img: '../../../../img/52200601/52200601-05.jpg', //产品大图
              img_s: '../../../../img/52200601/52200601-05.jpg', //产品缩略图
              code: '52200601-03', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '蓝宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000217,
              title: '52200601', //子产品名
              img: '../../../../img/52200601/52200601-06.jpg', //产品大图
              img_s: '../../../../img/52200601/52200601-06.jpg', //产品缩略图
              code: '52200601-02', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000218,
              title: '52200601', //子产品名
              img: '../../../../img/52200601/52200601-15.jpg', //产品大图
              img_s: '../../../../img/52200601/52200601-15.jpg', //产品缩略图
              code: '52200601-14', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '绿宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '18K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100022,
          name: '1102888', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: '../../../../img/耳环1.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 100022,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000222,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '珍珠',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000223,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-02', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '玛瑙石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000224,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-03', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '18K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000225,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-04', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000226,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-05', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000227,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-06', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100023,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: '../../../../img/耳环2.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000231,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/耳环2.jpeg', //产品大图
              img_s: '../../../../img/耳环2.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000232,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环2.jpeg', //产品大图
              img_s: '../../../../img/耳环2.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100024,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '134',
          img: '../../../../img/耳环3.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000241,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/耳环3.jpeg', //产品大图
              img_s: '../../../../img/耳环3.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '蓝宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000242,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环3.jpeg', //产品大图
              img_s: '../../../../img/耳环3.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '18K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100025,
          name: '1102888', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: '../../../../img/耳环1.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000251,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000252,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '珍珠',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000253,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-02', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '玛瑙石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000254,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-03', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '18K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000255,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-04', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000256,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-05', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000257,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环1.jpeg', //产品大图
              img_s: '../../../../img/耳环1.jpeg', //产品缩略图
              code: 'F82202888-06', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100026,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: '../../../../img/耳环2.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000261,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/耳环2.jpeg', //产品大图
              img_s: '../../../../img/耳环2.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000262,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环2.jpeg', //产品大图
              img_s: '../../../../img/耳环2.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100027,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '13',
          img: '../../../../img/耳环3.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000271,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/耳环3.jpeg', //产品大图
              img_s: '../../../../img/耳环3.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '18K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000272,
              title: 'F82202888', //子产品名
              img: '../../../../img/耳环3.jpeg', //产品大图
              img_s: '../../../../img/耳环3.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
      ],
    },
    {
      id: 10003,
      title: '戒指',
      topBanner: '',
      dataLists: [
        {
          id: 100031,
          name: 'F83200102', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: '../../../../img/F83200102/F83200102-01.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '戒指',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000311,
              title: 'F83200102-01', //子产品名
              code: 'F83200102-01', //完整条码
              img: '../../../../img/F83200102/F83200102-01.jpg', //产品大图
              img_s: '../../../../img/F83200102/F83200102-01.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 2,
              title: 'F83200102-02', //子产品名
              img: '../../../../img/F83200102/F83200102-02.jpg', //产品大图
              img_s: '../../../../img/F83200102/F83200102-02.jpg', //产品缩略图
              code: 'F83200102-02', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '蓝宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 3,
              title: 'F83200102-04', //子产品名
              img: '../../../../img/F83200102/F83200102-04.jpg', //产品大图
              img_s: '../../../../img/F83200102/F83200102-04.jpg', //产品缩略图
              code: 'F83200102-0244', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '粉宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 4,
              title: 'F83200102-10', //子产品名
              img: '../../../../img/F83200102/F83200102-10.jpg', //产品大图
              img_s: '../../../../img/F83200102/F83200102-10.jpg', //产品缩略图
              code: 'F83200102-10', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 5,
              title: 'F83200102-12', //子产品名
              img: '../../../../img/F83200102/F83200102-12.jpg', //产品大图
              img_s: '../../../../img/F83200102/F83200102-12.jpg', //产品缩略图
              code: 'F83200102-12', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '紫宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 6,
              title: 'F83200102-15', //子产品名
              img: '../../../../img/F83200102/F83200102-15.jpg', //产品大图
              img_s: '../../../../img/F83200102/F83200102-15.jpg', //产品缩略图
              code: 'F83200102-15', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '绿宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 7,
              title: 'F83200102-28', //子产品名
              img: '../../../../img/F83200102/F83200102-28.jpg', //产品大图
              img_s: '../../../../img/F83200102/F83200102-28.jpg', //产品缩略图
              code: 'F83200102-28', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100032,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: 'https://www.fallon-fj.com/cp_img/F82200600-05.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000321,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000322,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100033,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '134',
          img: 'https://www.fallon-fj.com/cp_img/F82200006-29.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000331,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000332,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
      ],
    },
    {
      id: 10004,
      title: '项链/手链',
      topBanner: '',
      dataLists: [
        {
          id: 100041,
          name: '1102888', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: '../../../../img/手链1.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '项链/手链',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000411,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/手链1.jpeg', //产品大图
              img_s: '../../../../img/手链1.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000412,
              title: 'F82202888', //子产品名
              img: '../../../../img/手链1.jpeg', //产品大图
              img_s: '../../../../img/手链1.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100042,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: '../../../../img/手链2.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '项链/手链',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000421,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/手链2.jpeg', //产品大图
              img_s: '../../../../img/手链2.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000422,
              title: 'F82202888', //子产品名
              img: '../../../../img/手链2.jpeg', //产品大图
              img_s: '../../../../img/手链2.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100043,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '134',
          img: '../../../../img/手链3.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '项链/手链',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000431,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/手链3.jpeg', //产品大图
              img_s: '../../../../img/手链3.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000432,
              title: 'F82202888', //子产品名
              img: '../../../../img/手链3.jpeg', //产品大图
              img_s: '../../../../img/手链3.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
      ],
    },
    {
      id: 10005,
      title: '套装',
      topBanner: '',
      dataLists: [
        {
          id: 100051,
          name: 'F81200180-01', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: '../../../../img/套装/F81200180-01.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '套装',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000511,
              title: 'F81200180-01', //子产品名
              code: 'F81200180-01', //完整条码
              img: '../../../../img/套装/F81200180-01.jpg', //产品大图
              img_s: '../../../../img/套装/F81200180-01.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000512,
              title: 'F81200180-02', //子产品名
              img: '../../../../img/套装/F81200180-02.jpg', //产品大图
              img_s: '../../../../img/套装/F81200180-02.jpg', //产品缩略图
              code: 'F81200180-02', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '蓝宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000513,
              title: 'F81200180-09', //子产品名
              img: '../../../../img/套装/F81200180-09.jpg', //产品大图
              img_s: '../../../../img/套装/F81200180-09.jpg', //产品缩略图
              code: 'F81200180-09', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '紫宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
            {
              id: 1000514,
              title: 'F81200180-10', //子产品名
              img: '../../../../img/套装/F81200180-10.jpg', //产品大图
              img_s: '../../../../img/套装/F81200180-10.jpg', //产品缩略图
              code: 'F81200180-10', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '红宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100052,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: '../../../../img/套装1.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '套装',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000521,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/套装1.jpeg', //产品大图
              img_s: '../../../../img/套装1.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000522,
              title: 'F82202888', //子产品名
              img: '../../../../img/套装1.jpeg', //产品大图
              img_s: '../../../../img/套装1.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100053,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '134',
          img: '../../../../img/套装2.jpeg',

          // 类型
          lx: {
            id: 1,
            title_zh: '套装',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000531,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: '../../../../img/套装2.jpeg', //产品大图
              img_s: '../../../../img/套装2.jpeg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000532,
              title: 'F82202888', //子产品名
              img: '../../../../img/套装2.jpeg', //产品大图
              img_s: '../../../../img/套装2.jpeg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
      ],
    },
    {
      id: 10006,
      title: '吊坠',
      topBanner: '',
      dataLists: [
        {
          id: 100061,
          name: '1102888', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '吊坠',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000611,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000612,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100062,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: 'https://www.fallon-fj.com/cp_img/F82200600-05.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000621,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000622,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100063,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '134',
          img: 'https://www.fallon-fj.com/cp_img/F82200006-29.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000631,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000632,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
      ],
    },
    {
      id: 10007,
      title: '手镯',
      topBanner: '',
      dataLists: [
        {
          id: 100071,
          name: '1102888', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '手镯',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000711,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000712,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100072,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: 'https://www.fallon-fj.com/cp_img/F82200600-05.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000721,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000722,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100073,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '134',
          img: 'https://www.fallon-fj.com/cp_img/F82200006-29.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000731,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000732,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
      ],
    },
    {
      id: 10008,
      title: '胸针',
      topBanner: '',
      dataLists: [
        {
          id: 100081,
          name: '1102888', //总产品名
          hot: 111, //热度
          new: 1111, //新鲜度
          lll: 11111, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '11',
          img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '胸针',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000811,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000812,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100082,
          name: '2202888', //总产品名
          hot: 1522, //热度
          new: 2222, //新鲜度
          lll: 12222, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '14',
          img: 'https://www.fallon-fj.com/cp_img/F82200600-05.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000821,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000822,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
        {
          id: 100083,
          name: '3302888', //总产品名
          hot: 133, //热度
          new: 5333, //新鲜度
          lll: 13333, //浏览量
          create_time: '2022-12-12 12:12:12', //创建时间
          price: '134',
          img: 'https://www.fallon-fj.com/cp_img/F82200006-29.jpg',

          // 类型
          lx: {
            id: 1,
            title_zh: '耳环',
            title_en: '....',
            title_ru: '....',
            title_sp: '....',
            title_ar: '....',
            title_ko: '....',
            code: 3,
          },

          // 子产品信息
          xx: [
            {
              id: 1000831,
              title: '52202888', //子产品名
              code: '52202888-01', //完整条码
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '14K',
                title_en: '...',
                title_ru: '...',
                title_sp: '...',
                title_ar: '...',
                title_ko: '...',
              },
            },

            {
              id: 1000832,
              title: 'F82202888', //子产品名
              img: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品大图
              img_s: 'https://www.fallon-fj.com/cp_img/F82200431-02.jpg', //产品缩略图
              code: 'F82202888-01', //完整条码
              num: 123, //库存数量

              // 石头类型
              st: {
                id: 1,
                title_zh: '白宝石',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },

              // 色系
              sx: {
                id: 1,
                title_zh: '香槟金',
                title_en: '......',
                title_ru: '......',
                title_sp: '......',
                title_ar: '......',
                title_ko: '......',
              },
            },
          ],
        },
      ],
    },
  ]

  const {
    query: { id },
  } = req
  const resData = mockData.filter((i) => i.id == id)
  res.statusCode = 200
  res.json({
    msg: 'success',
    code: '0',
    data: resData[0],
  })
}
