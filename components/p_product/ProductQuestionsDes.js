import Link from 'next/link'
import s from './ProductQuestionsDes.module.css'

export default function ProductQuestionsDes({ showDes, setShowDes }) {
  const descriptions = [
    { title: '您对此款产品或者其他产品有更好的想法？比如换个颜色？或者换个石头的颜色？', url: '' },
    {
      title: '我们的产品会带有 Fallon-FJ 的字印，如果您需要不带字印或者自己的字印产品，请|【备注】',
      url: '/shopping-bag',
    },
    {
      title: '我们可以定制，但是需要一点时间。请|联系我们',
      url: '/contact-us',
    },
    {
      title: '价格仅供参考，针对库存量低的产品，价格可能会发生变动，敬请留意。',
      url: '',
    },
    {
      title: '为什么我们的链条几乎永不褪色？- 点击|关于我们 ',
      url: '/about-us',
    },
  ]
  return (
    <div className={s.description_wrap} style={{ opacity: showDes ? 1 : 0 }}>
      <div className={s.close} onClick={() => setShowDes(!showDes)}>
        <img src="../../img/clear.png" alt="close" />
      </div>
      <ul>
        {descriptions.map((item, index) => (
          <li key={item.title}>
            {item.url ? (
              <p>
                {index + 1} .{item.title.split('|')[0]}
                <Link href={item.url}>
                  <i style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                    {item.title.split('|')[1]}
                  </i>
                </Link>
              </p>
            ) : (
              <p>
                {index + 1} .{item.title}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
