import React from 'react'

function debounce(fn, delay) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

function useDebounce(callback, delay) {
  const callbackRef = React.useRef(callback)
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
  useIsomorphicLayoutEffect(() => {
    callbackRef.current = callback
  })
  return React.useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay]
  )
}

export default useDebounce
