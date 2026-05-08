import { useState } from "react"

const MyComponent = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateNAme = () => {
        setName('Noe')
    }

    const incrementAge = () => {
        setAge(age + 1)
    }
    const decrementAge = () => {
        setAge(prevAge => Math.max(0, prevAge - 1));
    }

    const toggleEmployed = () => {
        setIsEmployed(!isEmployed)
    }


  return (
    <div>
      <p>name: { name }</p>
      <button onClick={updateNAme}>
        Set Name
      </button>

      <p>Age: {age}</p>
      <button 
      onClick={decrementAge}
      disabled={age === 0}
      style={{ cursor: age === 0 ? 'not-allowed' : 'pointer' }}>
        Decrement Age
      </button>

      <button onClick={incrementAge}>
        Increment Age
      </button>


      <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
      <button onClick={toggleEmployed}>Toggle Employment</button>

    </div>
  )
}

export default MyComponent
