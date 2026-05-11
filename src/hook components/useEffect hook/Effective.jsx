import { useState, useEffect } from "react";

const Effective = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}` 
    }, [count])

    const addCount = () => {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </div>  
  )
}

export default Effective
