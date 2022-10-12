import { useState } from 'react'
import s from './Filter.module.css'

export default function Filter({ choose }) {
  const mode = [
    {
      name: '色系',
      id: 101,
      type: 'color',
      childs: [
        { name: '14K', id: 1011, type: 2, childs: [] },
        { name: '18K', id: 1012, type: 2, childs: [] },
        { name: '香槟金', id: 1013, type: 2, childs: [] },
        { name: '白金', id: 1014, type: 2, childs: [] },
      ],
    },
    {
      name: '石头',
      type: 'stone',
      id: 102,
      childs: [
        { name: '净色', id: 1021, type: 2, childs: [] },
        { name: '白石', id: 1022, type: 2, childs: [] },
        { name: '珍珠', id: 1023, type: 2, childs: [] },
        { name: '浅蓝', id: 1024, type: 2, childs: [] },
        { name: '绿色', id: 1025, type: 2, childs: [] },
        { name: '红色', id: 1026, type: 2, childs: [] },
        { name: '玛瑙', id: 1027, type: 2, childs: [] },
        { name: '松石', id: 1028, type: 2, childs: [] },
        { name: '其他', id: 1029, type: 2, childs: [] },
      ],
    },

    {
      name: '更多',
      type: 'more',
      id: 103,
      childs: [
        {
          name: '元素',
          id: 1031,
          type: 2,
          childs: [
            { name: '四叶草', id: 103101, type: 3, childs: [] },
            { name: '花朵', id: 103102, type: 3, childs: [] },
            { name: '爱心', id: 103103, type: 3, childs: [] },
            { name: '圣母（墨西哥/俄罗斯）', id: 103104, type: 3, childs: [] },
            { name: '耶稣', id: 103105, type: 3, childs: [] },
            { name: '十字架', id: 103106, type: 3, childs: [] },
            { name: '动物', id: 103107, type: 3, childs: [] },
            { name: '猫', id: 103108, type: 3, childs: [] },
            { name: '猫头鹰', id: 103109, type: 3, childs: [] },
            { name: '天鹅', id: 103110, type: 3, childs: [] },
            { name: '昆虫', id: 103112, type: 3, childs: [] },
            { name: '鸟', id: 103113, type: 3, childs: [] },
            { name: '圆球', id: 103114, type: 3, childs: [] },
            { name: '月亮', id: 103115, type: 3, childs: [] },
            { name: '星星', id: 103116, type: 3, childs: [] },
            { name: '树', id: 103117, type: 3, childs: [] },
            { name: '叶子', id: 103118, type: 3, childs: [] },
            { name: '玫瑰', id: 103119, type: 3, childs: [] },
            { name: '天使', id: 103120, type: 3, childs: [] },
            { name: '丘比特', id: 103125, type: 3, childs: [] },
            { name: '蝴蝶', id: 103126, type: 3, childs: [] },
            { name: '带有字印', id: 103127, type: 3, childs: [] },
            { name: '英文字母【A-Z】', id: 103128, type: 3, childs: [] },
            { name: '开口戒', id: 103129, type: 3, childs: [] },
            { name: '皇冠', id: 103131, type: 3, childs: [] },
            { name: '星座', id: 103132, type: 3, childs: [] },
          ],
        },
        {
          name: '地区',
          id: 1032,
          type: 2,
          childs: [
            { name: '墨西哥', id: 10321, type: 3, childs: [] },
            { name: '俄罗斯', id: 10322, type: 3, childs: [] },
            { name: '日韩', id: 10323, type: 3, childs: [] },
            { name: '国内', id: 10324, type: 3, childs: [] },
          ],
        },
        {
          name: '主题',
          id: 1033,
          type: 2,
          childs: [
            { name: '情人节', id: 10331, type: 3, childs: [] },
            { name: '母亲节', id: 10332, type: 3, childs: [] },
            { name: '圣诞节', id: 10333, type: 3, childs: [] },
            { name: '中秋节', id: 10334, type: 3, childs: [] },
            { name: '夏日', id: 10335, type: 3, childs: [] },
            { name: '冬季', id: 10336, type: 3, childs: [] },
            { name: '春日', id: 10337, type: 3, childs: [] },
          ],
        },
        {
          name: '风格',
          id: 1034,
          type: 2,
          childs: [
            { name: '简约', id: 10341, type: 3, childs: [] },
            { name: '贵气', id: 10342, type: 3, childs: [] },
            { name: '清新', id: 10343, type: 3, childs: [] },
          ],
        },
      ],
    },
  ]

  const [chooseList, setChooseList] = useState({
    color: { id: '' },
    stone: { id: '' },
    more: { 0: { id: '' }, 1: { id: '' }, 2: { id: '' }, 3: { id: '' } },
  }) //选中列表,每项只能选一个?
  const [showList, setShowList] = useState({ 0: false, 1: false, 2: false, 3: false })

  const handleClick = (item, thdex, gp) => {
    const _chooseList = Object.assign({}, { ...chooseList })
    if (item.type === 2 && item.childs.length) {
      const _showList = Object.assign({}, { ...showList })
      _showList[`${thdex}`] = !_showList[`${thdex}`]
      setShowList(_showList)
    }

    if (gp.type === 'more' && item.type === 3) {
      _chooseList.more[thdex].id = item.id
      setShowList({ 0: false, 1: false, 2: false, 3: false })
      setChooseList(_chooseList)
      choose(chooseList)
    } else if (gp.type === 'color' || gp.type === 'stone') {
      _chooseList[`${gp.type}`].id = item.id
      setChooseList(_chooseList)
      choose(chooseList)
    }
  }
  return (
    <div className={s.filter_wrap}>
      <ul className={s.first_ul}>
        {mode.map((item) => (
          <li className={s.first_li} key={item.id}>
            <p className={s.first_p}>{item.name}</p>
            <ul className={s.sec_ul}>
              {item.childs.map((sec, secdex) => (
                <li className={s.sec_li} key={sec.id}>
                  <p
                    className={s.sec_p}
                    style={{
                      color:
                        chooseList[`${item.type}`].id === sec.id && sec.childs.length === 0
                          ? 'red'
                          : 'black',
                    }}
                    onClick={() => handleClick(sec, secdex, item)}>
                    {sec.childs.length && chooseList.more[secdex].id
                      ? `${sec.name} : ${
                          sec.childs.find((i) => i.id === chooseList.more[secdex].id).name
                        }`
                      : sec.name}
                  </p>

                  {sec.childs.length ? (
                    <ul
                      className={s.th_ul}
                      style={{ display: showList[`${secdex}`] ? 'block' : 'none' }}>
                      {sec.childs.map((th) => (
                        <li
                          className={s.th_li}
                          key={th.id}
                          style={{
                            color: chooseList.more[`${secdex}`].id === th.id ? 'red' : 'black',
                          }}
                          onClick={() => handleClick(th, secdex, item)}>
                          {th.name}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
