import React from 'react'

function debounce(fn: Function, delay: number) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

function useDebounce(callback: Function, delay: number) {
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
