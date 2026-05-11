import { useContext } from "react";
import { UserContext } from "./ContextA";

import ContextD from "./ContextD";

const ContextC = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`Hello again ${user.name}`}</h2>
      <ContextD />
    </div>
  );
};

export default ContextC;
