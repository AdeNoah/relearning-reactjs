import { useContext } from "react"
import { UserContext } from "./ContextA"



const ContextD = () => {

    const user = useContext(UserContext)

  return (
    <div className="box">
      <h1>Component D</h1>
      <h3>{`bye ${user.name}`}</h3>
    </div>
  )
}

export default ContextD
