import { useEffect, useState } from "react"

const ChangingProgressProvider = ({ interval = 1000, values, children }) => {
  const [valueIndex, setValueIndex] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setValueIndex(() => {
        return (valueIndex + 1) % values.length
      })
    }, interval)
    return () => clearInterval(intervalId)
  }, [interval, values.length])

  return children(values[valueIndex])
}

export default ChangingProgressProvider
