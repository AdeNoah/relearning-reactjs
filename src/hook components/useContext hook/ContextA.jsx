import { useState, createContext } from "react"
import ContextB from "./ContextB"
// import ContextD from "./ContextD";

export const UserContext = createContext();

const ContextA = () => {

    const [user, setuser] = useState({name: 'Noe' })

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user.name}`}</h2>
      <UserContext.Provider value={user}>
        <ContextB user={user} />
      </UserContext.Provider>
    </div>
  )
}

export default ContextA
