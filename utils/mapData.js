/**
 *
 * @param {*} code 产品编码
 * @returns 中文名
 * 
 * 1. 色系判断：判断第 1 个字符是否为字母，如果是字母，则 F8 为香槟金，F9 为香槟金分
色；Z5 为 14K 分色；T5/T9 为三色；G8 为精工【暂且忽略】；非字母，则判断是几号数
字：1 为 18K，2 为 18K 分色，3 为 23K，4 为白金色，5 是 14K，6 是 16K，
2. 类别判断：在上述判断的基础上，继续扫描色系之后的数字（带有字母的，从第三位数
字起扫描），1 为套装，2 为耳环，3 为戒指，4 为项链，5 为手链，6 为吊坠，7 为手镯
3. 石头判断：若类别判断中不是 4 或者 5，判断下位是否为 1，若为 1 则直接判断为净色
检测是否存在-，如果有-，直接扫描-后面的数字，根据数字，判断出以下的石头颜色：
净色：
白石：-1，-31，
珍珠：-13，-14
浅蓝：-2，-30，-40
绿色：-3，-33，-15，-16，-29
红色：-6，-8，-10，-36，-38，-48
混彩：-11，-21，-41
粉红：-9，-39
深紫蓝：-12，-42，-32
香槟色：-4，-34
?：-7，-37
宝蓝石：-5
其他：任何没有被提及到的分类数字编号：-23，-24，-25，-28 等等
4. 结束，针对链条产品，只应用第 1. 点判断规则，然后要人工区分出。
 */
const stoneRule = {
  '01': '白石',
  '02': '浅蓝',
  '03': '绿色',
  '04': '香槟色',
  '05': '宝蓝石',
  '06': '红色',
  '07': '黑石',
  '08': '红色',
  '09': '粉红',
  10: '红色',
  11: '混彩',
  12: '深紫蓝',
  13: '珍珠',
  14: '珍珠',
  15: '绿色',
  16: '绿色',
  17: '?',
  18: '?',
  19: '?',
  20: '?',
  21: '混彩',
  22: '?',
  23: '?',
  24: '?',
  25: '?',
  26: '?',
  27: '?',
  28: '?',
  29: '绿色',
  30: '浅蓝',
  31: '白石',
  32: '深紫蓝',
  33: '绿色',
  34: '香槟色',
  35: '?',
  36: '红色',
  37: '黑石',
  38: '红色',
  39: '粉红',
  40: '浅蓝',
  41: '混彩',
  42: '深紫蓝',
  48: '红色',
}
const colorRule = {
  F8: '香槟金',
  F9: '香槟金分色',
  Z5: '14K 分色',
  T5: '三色',
  T9: '三色',
  G8: '精工',
  1: '18K',
  2: '18K 分色',
  3: '23K',
  4: '白金色',
  5: '14K',
  6: '16K',
}
const typeRule = {
  1: '套装',
  2: '耳环',
  3: '戒指',
  4: '项链',
  5: '手链',
  6: '吊坠',
  7: '手镯',
}
// const isStr = (str) => Object.prototype.toString.call(str) === '[object String]'
export const mapCodeToName = (code) => {
  let name = ''
  const _code = `${code}`
  const code1 = _code.split('-')[0]
  const code2 = _code.split('-')[1] ? _code.split('-')[1] : '净色'
  if (Number(code1)) {
    // 不是字母
    name += colorRule[code1.slice(0, 1)]
    name += code2 == '净色' ? code2 : stoneRule[code2]
    name += typeRule[code1.slice(1, 2)]
  } else {
    name += colorRule[code1.slice(0, 2)]
    name += code2 == '净色' ? code2 : stoneRule[code2]
    name += typeRule[code1.slice(2, 3)]
  }

  return name
}

export const mapDataToStoneList = (data, type) => {
  const list = []
  data.map((item) => {
    if (item.sx.title_zh === type) {
      list.push(item.st.title_zh)
    }
  })
  return [...new Set(list)]
}

export const mapDataToColorList = (data, type) => {
  const list = []
  data.map((item) => {
    if (item.st.title_zh === type || item.length === type) {
      list.push(item.sx.title_zh)
    }
  })
  return [...new Set(list)]
}

export const mapDataToLengthList = (data, type) => {
  const list = []
  data.map((item) => {
    if (item.st.title_zh === type) {
      list.push(item.length)
    }
  })
  return [...new Set(list)]
}
