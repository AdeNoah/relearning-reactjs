import { useState, useEffect, useRef } from "react"



const ReferenceComponent = () => {

    const reference = useRef(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log('COMPONENT RENDERED')
    })

    const handleClick = () => {
        inputRef.current.focus()
    }

  return (
    <div>
      <button onClick={handleClick}>click me!</button>
      <input ref={inputRef} />
    </div>
  )
}

export default ReferenceComponent
