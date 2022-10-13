import s from './EditGoodsContent.module.css'

export default function EditGoodsContent({
  goods,
  chainSize,
  setChainSize,
  chainQty,
  setChainQty,
  goodsQty,
  setGoodsQty,
  showMore,
  setShowMore,
}) {
  const { code, name, img } = goods

  const handleAdd = () => {
    if (chainSize.size.width && chainSize.size.length) {
      if (chainQty.length === 0) {
        // 整合
        setChainQty(chainQty.concat(goods.qty).concat([chainSize]))
      } else {
        setChainQty(chainQty.concat([chainSize]))
      }
    } else {
      // 没有设置尺寸 点击ADD无效
      return
    }
  }

  const handleChainSizeChange = (e, type) => {
    const _size = JSON.parse(JSON.stringify(chainSize))
    _size.size[type] = Number(e.currentTarget.value >= 0 ? e.currentTarget.value : 0)
    setChainSize(_size)
  }

  const handleChainCountChange = (e, index, init) => {
    if (init) {
      // 不增加尺寸 直接修改原尺寸的情况
      setChainQty(chainQty.concat(goods.qty))
    } else {
      const _chainQty = JSON.parse(JSON.stringify(chainQty))
      _chainQty[index].count = Number(e.currentTarget.value >= 0 ? e.currentTarget.value : 0)
      setChainQty(_chainQty)
    }
  }

  const handleCountChange = (e, qty, id) => {
    const _qty = JSON.parse(JSON.stringify(qty))
    _qty.find((item) => item.id === id).count = Number(
      e.currentTarget.value >= 0 ? e.currentTarget.value : 0,
    )
    setGoodsQty(_qty)
  }

  const handleChainClean = (index) => {
    const _chainQty = JSON.parse(JSON.stringify(chainQty))
    _chainQty.splice(index, 1)
    setChainQty(_chainQty)
  }

  return (
    <div className={s.edit_content_wrap}>
      <div className={s.edit_content_left}>
        <div>
          <p>{code}</p>
        </div>
        <div
          style={{
            width: '200px',
            height: '200px',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}>
          {goods.type ? (
            <p className={s.back_img} style={{ backgroundImage: `url(${img})` }}></p>
          ) : (
            <img src={img} alt={name} />
          )}
        </div>
        <div>
          <p>{code}</p>
        </div>
      </div>
      <div className={s.edit_content_right}>
        {goods.type ? (
          <div className={s.size_content}>
            <div className={s.top}>
              <div>Qty:</div>

              <div className={s.size_select}>
                <div className={s.change_length}>
                  <span>Length: </span>
                  <span>
                    <input
                      value={chainSize.size.length || ''}
                      onChange={(e) => handleChainSizeChange(e, 'length')}
                      style={{ outline: 'none' }}
                      type="number"
                    />
                  </span>
                  <span>cm;</span>
                </div>
                <div className={s.change_width}>
                  <span>Width: </span>
                  <span>
                    <input
                      // value={chainSize.size.width || ''}
                      // onChange={(e) => handleChainSizeChange(e, 'width')}
                      value={2}
                      style={{ outline: 'none' }}
                      type="number"
                      readOnly={true}
                    />
                  </span>
                  <span>mm;</span>
                </div>
              </div>

              <div className={s.add_button} onClick={handleAdd}>
                Add
              </div>
            </div>
            <div className={s.middle}>
              {chainQty.length ? (
                <ul
                  style={{
                    width: '265px',
                    height: '200px',
                    overflow: 'hidden',
                    overflowY: 'scroll',
                  }}>
                  {chainQty.map((item, index) => (
                    <li key={`${index}-${item.size}`} className={s.chain_list_li}>
                      <div>
                        <p>
                          <span>
                            <input
                              style={{ outline: 'none' }}
                              type="number"
                              value={item.count || ''}
                              onChange={(e) => handleChainCountChange(e, index)}
                            />
                          </span>
                          <span>*12 </span>
                        </p>
                        <p>{`(Length: ${item.size.length}cm; Width: ${item.size.width}mm)`}</p>
                      </div>
                      <div className={s.clean} onClick={() => handleChainClean(index)}>
                        <img src="../../img/clean.png" alt="clean" />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul
                  onClick={() => handleChainCountChange('', '', 'init')}
                  style={{
                    width: '265px',
                    height: '200px',
                    overflow: 'hidden',
                    overflowY: 'scroll',
                  }}>
                  {goods.qty.map((item, index) => (
                    <li key={`${index}-${item.size}`}>
                      <p>
                        <span>
                          <input
                            style={{ outline: 'none' }}
                            type="number"
                            value={item.count}
                            readOnly={true}
                          />
                        </span>
                        <span>*12 </span>
                      </p>
                      <p>{`(Length: ${item.size.length}cm; Width: ${item.size.width}mm)`}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className={s.size_content}>
            <div className={s.top}>
              <p>Qty:</p>
            </div>
            <div className={s.middle}>
              <ul>
                {goodsQty.length &&
                  goodsQty.slice(0, 6).map((item, index) => (
                    <li key={`${index}-${item.size}`}>
                      <span>
                        <input
                          style={{ outline: 'none' }}
                          type="number"
                          value={item.count || ''}
                          onChange={(e) => handleCountChange(e, goods.qty, item.id)}
                        />
                      </span>
                      <span>*12 </span>
                      <span>({item.size})</span>
                    </li>
                  ))}
              </ul>
              <ul style={{ display: showMore ? 'block' : 'none', color: 'red' }}>
                {goodsQty.length &&
                  goodsQty.slice(6, goods.qty.length).map((item, index) => (
                    <li key={`${index}-${item.size}`}>
                      <span>
                        <input
                          style={{ outline: 'none', borderColor: 'red' }}
                          type="number"
                          value={item.count || ''}
                          onChange={(e) => handleCountChange(e, goods.qty, item.id)}
                        />
                      </span>
                      <span>*12 </span>
                      <span>({item.size})</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={s.bottom} onClick={() => setShowMore(!showMore)}>
              <p>More Sizes</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
