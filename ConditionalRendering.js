import React, { useState } from "react";

//conditional rendering renders something only when the condition is satisfied
//The rendering may be a piece of code or and entire component
const Login = () => {
  const [age, setAge] = useState(0);
  const handleEvent = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };
  return (
    <div>
      <form>
        <p1>Enter your age:</p1>
        <input type="text" value={age} onChange={handleEvent} />
      </form>
      {age >= 18 && <p>Hello,rendered</p>}
    </div>
  );
};

export default Login;
