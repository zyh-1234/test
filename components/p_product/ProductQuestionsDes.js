import Link from 'next/link'
import s from './ProductQuestionsDes.module.css'

export default function ProductQuestionsDes({ descriptions, showDes, setShowDes }) {
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
