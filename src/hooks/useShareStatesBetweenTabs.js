import { useState, useRef, useEffect } from 'react'

const useShareStatesBetweenTabs = (nameKey, value) => {
  const [state, setState] = useState(value)
  const isNewSession = useRef(true)

  useEffect(() => {
    if (isNewSession.current) {
      const currentState = localStorage.getItem(nameKey)

      if (currentState) setState(JSON.parse(currentState))
      else setState(value)

      isNewSession.current = false
      return
    }
    try {
      localStorage.setItem(nameKey, JSON.stringify(state))
    } catch (error) {}
  }, [state, nameKey, value])

  useEffect(() => {
    const onReceieveMessage = (e) => {
      const { key, newValue } = e
      if (key === nameKey) {
        setState(JSON.parse(newValue))
      }
    }
    window.addEventListener('storage', onReceieveMessage)
    return () => window.removeEventListener('storage', onReceieveMessage)
  }, [nameKey, setState])

  return [state, setState]
}

export default useShareStatesBetweenTabs
