import { useState, useCallback, useEffect } from 'react'

const useChangeWindowSize = () => {
  const [size, setSize] = useState({
    w: window.document.documentElement.clientWidth,
    h: window.document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      w: window.document.documentElement.clientWidth,
      h: window.document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return size
}

export default useChangeWindowSize
